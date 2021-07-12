import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus} from '../../constants';
import Room from './room';
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
    updatedReviews: [],
  },
  CHANGE: {
    city: 'Paris',
    hoveredCardId: 0,
    sortType: 'Popular',
  },
};

describe('Component: Room', () => {

  beforeEach(() => {
    history = createMemoryHistory();
    store = mockStore(defaultStore);
  });

  it('should render "Room" correctly', () => {

    render(
      <Provider store={store}>
        <Router history={history}>
          <Room offer={mockOffer}/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/303/i)).toBeInTheDocument();
    expect(screen.getByText(/Waterfront with extraordinary view/i)).toBeInTheDocument();
    expect(screen.getByText(/house/i)).toBeInTheDocument();
    expect(screen.getByText(/This is a place for dreamers to reset, reflect, and create. Designed with a slow pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets/i)).toBeInTheDocument();
    expect(screen.getByText(/Breakfast/i)).toBeInTheDocument();
    expect(screen.getByText(/Air conditioning/i)).toBeInTheDocument();
    expect(screen.getByText(/2 Bedrooms/i)).toBeInTheDocument();
    expect(screen.getByText(/Max 6 adults/i)).toBeInTheDocument();
    expect(screen.getByText(/2.9/i)).toBeInTheDocument();
  });
});
