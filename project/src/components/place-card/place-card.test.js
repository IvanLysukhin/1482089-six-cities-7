import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router, Switch, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import PlaceCard from './place-card';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus, AppRoute} from '../../constants';
import userEvent from '@testing-library/user-event';

const mockStore = configureStore();
const mockOffer = {
  city: {
    name: 'Cologne',
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
describe('Component: PlaceCard', () => {

  beforeEach(() => {
    history = createMemoryHistory();
    store = mockStore({
      AUTH: {authorizationStatus: AuthorizationStatus.AUTH},
    });
  });

  it('should render "PlaceCard" correctly', () => {


    render(
      <Provider store={store}>
        <Router history={history}>
          <PlaceCard offer={mockOffer} isNearOffers/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Waterfront with extraordinary view/i)).toBeInTheDocument();
    expect(screen.getByText(/303/i)).toBeInTheDocument();
    expect(screen.getByText(/house/i)).toBeInTheDocument();
  });

  it('should redirect to offer room by click on preview image link', () => {

    render(
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path={AppRoute.MAIN}>
              <PlaceCard offer={mockOffer} isNearOffers/>
            </Route>
            <Route exact path={`${AppRoute.ROOM}/${mockOffer.id}`}>
              <h1>Fake offer room</h1>
            </Route>
          </Switch>
        </Router>
      </Provider>,
    );

    userEvent.click(screen.getByAltText('Place image'));
    expect(screen.getByText(/Fake offer room/i)).toBeInTheDocument();
  });

  it('should redirect to offer room by click on title link', () => {

    render(
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path={AppRoute.MAIN}>
              <PlaceCard offer={mockOffer} isNearOffers/>
            </Route>
            <Route exact path={`${AppRoute.ROOM}/${mockOffer.id}`}>
              <h1>Fake offer room</h1>
            </Route>
          </Switch>
        </Router>
      </Provider>,
    );

    userEvent.click(screen.getByText(/Waterfront with extraordinary view/i));
    expect(screen.getByText(/Fake offer room/i)).toBeInTheDocument();
  });
});
