import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus} from '../../constants';
import Main from './main';
import {mockOffers, offersNumber} from '../../mock/test-mocks';

const mockStore = configureStore();

let history;
let store;

const defaultStore =  {
  AUTH: {
    authorizationStatus: AuthorizationStatus.AUTH,
    accountEmail: 'test@test.com',
  },
  LOAD: {
    isDataLoaded: true,
    offers: mockOffers,
  },
  CHANGE: {
    city: 'Cologne',
    hoveredCardId: 0,
    sortType: 'Popular',
  },
};

describe('Component: Main', () => {

  beforeEach(() => {
    history = createMemoryHistory();
    store = mockStore(defaultStore);
  });

  it('should render "Main" correctly', () => {

    render(
      <Provider store={store}>
        <Router history={history}>
          <Main />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(`${offersNumber} places to stay in Cologne`)).toBeInTheDocument();
    expect(screen.getByText('test@test.com')).toBeInTheDocument();
    expect(screen.getByText('Sign out')).toBeInTheDocument();
    expect(screen.getByText('Sort by')).toBeInTheDocument();
    expect(screen.getByText('Sort by')).toBeInTheDocument();
    expect(screen.getByText('Sort by')).toBeInTheDocument();
    expect(screen.getByText('Places')).toBeInTheDocument();
  });

  it('should render "Main" correctly without authorization', () => {

    store = mockStore({
      ...defaultStore,
      AUTH: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        accountEmail: '',
      },
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <Main />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(`${offersNumber} places to stay in Cologne`)).toBeInTheDocument();
    expect(screen.queryByText('test@test.com')).not.toBeInTheDocument();
    expect(screen.getByText('Sign in')).toBeInTheDocument();
    expect(screen.getByText('Sort by')).toBeInTheDocument();
    expect(screen.getByText('Places')).toBeInTheDocument();
  });
});
