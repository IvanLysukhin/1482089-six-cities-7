import React from 'react';
import {Router, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {AuthorizationStatus} from '../../constants';
import PrivateRoute from './private-route';

const mockStore = configureStore({});
let history;

describe('Component: PrivateRouter', () => {
  beforeEach(() => {
    history = createMemoryHistory();
    history.push('/private');
  });

  it('should render component for public route, when user not authorized', () => {
    const store = mockStore({
      AUTH: {authorizationStatus: AuthorizationStatus.NO_AUTH},
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <Route exact path="/login"><h1>Public</h1></Route>
          <PrivateRoute
            exact
            path="/private"
            render={() => (<h1>Private</h1>)}
          />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Public/i)).toBeInTheDocument();
    expect(screen.queryByText(/Private/i)).not.toBeInTheDocument();
  });

  it('should render component for private route, when user authorized', () => {
    const store = mockStore({
      AUTH: {authorizationStatus: AuthorizationStatus.AUTH},
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <Route exact path="/login"><h1>Public</h1></Route>
          <PrivateRoute
            exact
            path="/private"
            render={() => (<h1>Private</h1>)}
          />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Private/i)).toBeInTheDocument();
    expect(screen.queryByText(/Public/i)).not.toBeInTheDocument();
  });
});
