import {APIRoute} from '../constants';
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
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);
