import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus} from '../../constants';
import FavoritesEmpty from './favorites-empty';

const mockStore = configureStore();

let history;
let store;

describe('Component: FavoritesEmpty', () => {
  beforeEach(() => {
    history = createMemoryHistory();
    store = mockStore({
      AUTH: {authorizationStatus: AuthorizationStatus.AUTH},
    });
  });

  it('should render "FavoritesEmpty" correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <FavoritesEmpty offers={[]}/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Nothing yet saved/i)).toBeInTheDocument();
    expect(screen.getByText(/Save properties to narrow down search or plan your future trips/i)).toBeInTheDocument();
  });
});
