import {
  initialState,
  checkAuth
} from './check-auth';
import {
  requireAuthorization,
  logout
} from '../action';
import {AuthorizationStatus} from '../../constants';

describe('Reducer: Check auth', () => {
  it('without parameters returns initial state', () => {
    expect(checkAuth(undefined, {})).toEqual(initialState);
  });

  it('successful authorization', () => {
    expect(checkAuth(
      initialState,
      requireAuthorization({
        status: AuthorizationStatus.AUTH,
        email: 'example@mail.ru',
      })))
      .toEqual({
        ...initialState,
        authorizationStatus: AuthorizationStatus.AUTH,
        accountEmail: 'example@mail.ru',
      });
  });

  it('unsuccessful authorization', () => {
    expect(checkAuth(
      initialState,
      requireAuthorization({
        status: AuthorizationStatus.NO_AUTH,
        email: '',
      })))
      .toEqual({
        ...initialState,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      });
  });

  it('sign out', () => {
    expect(checkAuth(
      {
        authorizationStatus: AuthorizationStatus.AUTH,
        accountEmail: 'example@mail.ru',
      },
      logout(),
    ))
      .toEqual({
        ...initialState,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      });
  });
});
