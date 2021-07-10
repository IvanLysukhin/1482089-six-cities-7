import React from 'react';
import {
  render,
  screen
} from '@testing-library/react';
import {
  Router,
  Route
} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import App from './app';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {
  AuthorizationStatus,
  AppRoute, SortType
} from '../../constants';
import {
  mockOffers,
  mockReviews
} from '../../mock/test-mocks';

const mockStore = configureStore();

let history;
let store;
let fakeApp;

const initialState = {
  AUTH: {
    authorizationStatus: AuthorizationStatus.AUTH,
  },
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
};

describe('Component: PlaceCard', () => {

  beforeEach(() => {
    history = createMemoryHistory();
    store = mockStore(initialState);

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

    store = mockStore({
      ...initialState,
      AUTH: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      },
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <App/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByText(/Password/i)).toBeInTheDocument();
  });

  it('should redirect to "Main" when user navigate to "/login", if user was authorization', () => {
    history.push(AppRoute.LOGIN);

    store = mockStore({
      ...initialState,
      AUTH: {
        authorizationStatus: AuthorizationStatus.AUTH,
      },
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <App/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Cologne/i)).toBeInTheDocument();
    expect(screen.getByText(/Brussels/i)).toBeInTheDocument();
    expect(screen.getByText(/Amsterdam/i)).toBeInTheDocument();
    expect(screen.getByText(/Hamburg/i)).toBeInTheDocument();
    expect(screen.getByText(/Dusseldorf/i)).toBeInTheDocument();
    expect(screen.getByText(/places to stay/i)).toBeInTheDocument();
  });

  it('should render "NoPage" when user navigate to incorrect rout', () => {
    history.push('/incorrect');

    render(fakeApp);
    expect(screen.getByText(/404\. Page Not Found/i)).toBeInTheDocument();
    expect(screen.getByText('Return to main')).toBeInTheDocument();
  });
});
