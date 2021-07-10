import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus} from '../../constants';
import FavoritesListItem from './favorites-list-item';
import {mockOffers, offersNumber} from '../../mock/test-mocks';

const mockStore = configureStore();

let history;
let store;

const favoritesMockOffers = mockOffers.map((offer) => ({
  ...offer,
  isFavorite: true,
}));

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
          <FavoritesListItem city={{offers:favoritesMockOffers}}/>
        </Router>
      </Provider>,
    );

    expect(container.querySelectorAll('.place-card').length).toBe(offersNumber);
  });
});
