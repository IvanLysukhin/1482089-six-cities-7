import {APIRoute, AppRoute} from '../constants';
import {ActionCreator} from './action';
import {AuthorizationStatus} from '../constants';
import {adaptToClient} from '../utils';

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => {
      dispatch(ActionCreator.loadOffers(data.map(adaptToClient)));
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => dispatch(ActionCreator.requireAuthorization({
      status: AuthorizationStatus.AUTH,
      email: data.email,
    })))
    .catch(() => {
    })
);

export const logIn = ({email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => localStorage.setItem('token', data.token))
    .then(() => dispatch(ActionCreator.requireAuthorization({status: AuthorizationStatus.AUTH, email})))
);

export const logOut = () => (dispatch, _getState, api) => (
  api.delete(AppRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()))
);
