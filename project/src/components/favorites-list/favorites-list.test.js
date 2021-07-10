import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus} from '../../constants';
import FavoritesList from './favorites-list';
import {mockOffers} from '../../mock/test-mocks';

const mockStore = configureStore();

mockOffers.push({
  ...mockOffers[0],
  city: {
    name: 'Paris',
  },
  isFavorite: true,
});

mockOffers.push({
  ...mockOffers[0],
  isFavorite: true,
});

let history;
let store;

describe('Component: FavoritesList', () => {
  beforeEach(() => {
    history = createMemoryHistory();
    store = mockStore({
      AUTH: {authorizationStatus: AuthorizationStatus.AUTH},
    });
  });

  it('should render "FavoritesList" correctly', () => {
    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <FavoritesList offers={mockOffers}/>
        </Router>
      </Provider>,
    );

    expect(container.querySelectorAll('.favorites__locations-items').length).toBe(2);
  });
});
