import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router, Switch, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import PlaceCard from './place-card';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus, AppRoute} from '../../constants';
import userEvent from '@testing-library/user-event';
import {mockOffer} from '../../mock/test-mocks';

const mockStore = configureStore();

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
