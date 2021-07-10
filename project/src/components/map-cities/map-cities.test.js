import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus} from '../../constants';
import MapCities from './map-cities';
import {mockOffer} from '../../mock/test-mocks';

const mockStore = configureStore();

let history;
let store;

const defaultStore = {
  AUTH: {
    authorizationStatus: AuthorizationStatus.AUTH,
    accountEmail: 'test@test.com',
  },
  LOAD: {
    isDataLoaded: true,
    nearbyOffers: [],
    offerReviews: [],
  },
  CHANGE: {
    city: 'Paris',
    hoveredCardId: 0,
    sortType: 'Popular',
  },
};

describe('Component: MapCities', () => {

  beforeEach(() => {
    history = createMemoryHistory();
    store = mockStore(defaultStore);
  });

  it('should render "MapCities" correctly', () => {

    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <MapCities
            offers={[mockOffer]}
            city={mockOffer.city}
          />
        </Router>
      </Provider>,
    );

    expect(container.querySelector('.leaflet-container')).toBeInTheDocument();
    expect(container.querySelector('.leaflet-marker-icon')).toBeInTheDocument();
  });
});
