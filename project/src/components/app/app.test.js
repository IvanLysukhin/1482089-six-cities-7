import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import App from './app';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus, AppRoute, SortType} from '../../constants';
import {creatMockArray} from '../../utils';

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

const mockReview = {
  id: 1,
  user: {
    id: 14,
    isPro: true,
    name: 'Corey',
    avatarUrl: 'https://7.react.pages.academy/static/avatar/5.jpg',
  },
  rating: 4,
  comment: 'I stayed here for one night and it was an unpleasant experience.',
  date: '2021-07-01T13:04:25.833Z',
};

const offersNumber = 10;
const mockOffers = creatMockArray(mockOffer, offersNumber);
const mockReviews = creatMockArray(mockReview, offersNumber);

let history;
let store;
let fakeApp;

describe('Component: PlaceCard', () => {

  beforeEach(() => {
    history = createMemoryHistory();
    store = mockStore({
      AUTH: {authorizationStatus: AuthorizationStatus.AUTH},
      LOAD: {
        isDataLoaded: true,
        offers: mockOffers,
        offerReviews: mockReviews,
        nearbyOffers: mockOffers,
      },
      CHANGE: {
        city: 'Paris',
        sortType: SortType.POPULAR,
      },
      dispatch: jest.fn(),
    },
    );

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <App/>
        </Router>
      </Provider>
    );
  });

  it('should render "Main" when user navigate to "/"', () => {
    history.push(AppRoute.MAIN);
    render(fakeApp);

    expect(screen.getByText(/Cologne/i)).toBeInTheDocument();
    expect(screen.getByText(/Brussels/i)).toBeInTheDocument();
    expect(screen.getByText(/Amsterdam/i)).toBeInTheDocument();
    expect(screen.getByText(/Hamburg/i)).toBeInTheDocument();
    expect(screen.getByText(/Dusseldorf/i)).toBeInTheDocument();
    expect(screen.getByText(/places to stay/i)).toBeInTheDocument();
  });

  it('should render "Favorite" when user navigate to "/favorites"', () => {
    history.push(AppRoute.FAVORITES);
    render(fakeApp);
    expect(screen.getByText(/Nothing yet saved/i)).toBeInTheDocument();
  });

  it('should render "Room" when user navigate to "/offer/id"', () => {
    history.push(`${AppRoute.ROOM}/1`);

    render(
      <Provider store={store}>
        <Router history={history}>
          <Route exact path={`${AppRoute.ROOM}/1`}>
            <h1>
              Offer room 1
            </h1>
          </Route>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Offer room 1/i)).toBeInTheDocument();
  });

  it('should render "LogIn" when user navigate to "/login"', () => {
    history.push(AppRoute.LOGIN);

    render(fakeApp);

    expect(screen.getByText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByText(/Password/i)).toBeInTheDocument();
  });

  it('should render "NoPage" when user navigate to incorrect rout', () => {
    history.push('/incorrect');

    render(fakeApp);
    expect(screen.getByText(/404\. Page Not Found/i)).toBeInTheDocument();
    expect(screen.getByText('Return to main')).toBeInTheDocument();
  });
});
