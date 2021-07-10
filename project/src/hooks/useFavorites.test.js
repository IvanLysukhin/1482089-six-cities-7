import {renderHook, act} from '@testing-library/react-hooks';
import useFavorites from './useFavorites';
import {AppRoute, AuthorizationStatus} from '../constants';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Route, Router} from 'react-router-dom';
import Login from '../components/login/login';
import {Provider} from 'react-redux';
import React from 'react';
import configureStore from 'redux-mock-store';

const mockStore = configureStore({});

const mockOffer = {
  isFavorite: false,
  id: 1,
};
let history;

describe('Hook, useFavorites', () => {

  beforeEach(() => {
    history = createMemoryHistory();
  });

  it('should return function', () => {
    const {result} = renderHook(() =>
      useFavorites(AuthorizationStatus.AUTH, mockOffer, jest.fn(), history),
    );

    expect(result.current).toBeInstanceOf(Function);
  });

  it('should redirect to "/login", if user no authorization', () => {
    const {result} = renderHook(() =>
      useFavorites(AuthorizationStatus.NO_AUTH, mockOffer, jest.fn(), history),
    );

    history.push('/fake');

    const {rerender} = render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/fake">
            <h1>Fake screen</h1>
          </Route>
        </Router>
      </Provider>,
    );

    expect(screen.queryByText('E-mail')).not.toBeInTheDocument();
    expect(screen.getByText('Fake screen')).toBeInTheDocument();

    act(() => {
      result.current();
    });

    rerender(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <Route exact path={AppRoute.LOGIN}>
            <Login/>
          </Route>
          <Route exact path="/fake">
            <h1>Fake screen</h1>
          </Route>
        </Router>
      </Provider>,
    );

    expect(screen.getByText('E-mail')).toBeInTheDocument();
    expect(screen.queryByText('Fake screen')).not.toBeInTheDocument();
  });

  it('should call given dispatch', () => {
    const dispatch = jest.fn();

    const {result} = renderHook(() =>
      useFavorites(AuthorizationStatus.AUTH, mockOffer, dispatch, history),
    );

    act(() => {
      result.current();
    });

    expect(dispatch).toBeCalled();

  });
});
