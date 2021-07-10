import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus} from '../../constants';
import Favorites from './favorites';
import {mockOffers} from '../../mock/test-mocks';

const mockStore = configureStore();

mockOffers.push({
  ...mockOffers[0],
  isFavorite: true,
});

let history;
let store;

describe('Component: Favorites', () => {
  beforeEach(() => {
    history = createMemoryHistory();
    store = mockStore({
      AUTH: {authorizationStatus: AuthorizationStatus.AUTH},
    });
  });

  it('should render "Favorites" correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <Favorites offers={mockOffers}/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Saved listing/i)).toBeInTheDocument();
  });
});
