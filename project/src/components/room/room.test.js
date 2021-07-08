import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus} from '../../constants';
import Room from './room';

const mockStore = configureStore();

const mockOffer = {
  city: {
    name: 'Paris',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13,
    },
  },
  images: [
    'https://7.react.pages.academy/static/hotel/20.jpg',
    'https://7.react.pages.academy/static/hotel/15.jpg',
  ],
  title: 'Waterfront with extraordinary view',
  rating: 2.9,
  type: 'house',
  price: 303,
  goods: [
    'Breakfast',
    'Air conditioning',
  ],
  host: {
    id: 25,
    name: 'Angelina',
    avatarUrl: 'img/avatar-angelina.jpg',
    isPro: true,
  },
  description: 'This is a place for dreamers to reset, reflect, and create. Designed with a slow pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.',
  location: {
    latitude: 50.951361,
    longitude: 6.944974,
    zoom: 16,
  },
  id: 1,
  previewImage: 'https://7.react.pages.academy/static/hotel/14.jpg',
  isFavorite: false,
  isPremium: false,
  maxAdults: 6,
  bedRooms: 2,
};

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
