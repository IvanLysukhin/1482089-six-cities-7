import {APIRoute, AppRoute} from '../constants';
import {ActionCreator} from './action';
import {AuthorizationStatus} from '../constants';
import {adaptToClient, adaptReviewToClient} from '../utils';

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => {
      dispatch(ActionCreator.loadOffers(data.map(adaptToClient)));
    })
);

export const fetchOfferOptions = (offerId) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.REVIEWS}/${offerId}`)
    .then(({data}) => {
      dispatch(ActionCreator.loadOfferReviews(data.map(adaptReviewToClient)));
    })
    .then(() => {
      api.get(`${APIRoute.OFFERS}/${offerId}/nearby`)
        .then(({data}) => {
          dispatch(ActionCreator.loadNearbyOffers(data.map(adaptToClient)));
        });
    })
    .then(() => dispatch(ActionCreator.redirectToRoute(`${AppRoute.ROOM}/${offerId}`)))
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
    .then(() => dispatch(ActionCreator.requireAuthorization({
      status: AuthorizationStatus.AUTH,
      email,
    })))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.MAIN)))
);

export const logOut = () => (dispatch, _getState, api) => (
  api.delete(AppRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()))
);

export const postReview = (offerId, {comment, rating}) => (dispatch, _getState, api) => (
  api.post(
    `${APIRoute.REVIEWS}/${offerId}`,
    {comment, rating},
    {
      headers: {
        'x-token': localStorage.getItem('token'),
      },
    })
    .then(({data}) => {
      dispatch(ActionCreator.loadOfferReviews(data.map(adaptReviewToClient)));
    })
);
