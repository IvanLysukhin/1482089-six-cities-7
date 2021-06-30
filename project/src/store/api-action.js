import {APIRoute, AppRoute} from '../constants';
import {
  loadOffers,
  loadOfferReviews,
  loadNearbyOffers,
  redirectToRoute,
  requireAuthorization,
  logout,
  updateOffers
} from './action';
import {AuthorizationStatus} from '../constants';
import {adaptToClient, adaptReviewToClient} from '../utils';

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => {
      dispatch(loadOffers(data.map(adaptToClient)));
    })
);

export const fetchOfferOptions = (offerId) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.REVIEWS}/${offerId}`)
    .then(({data}) => {
      dispatch(loadOfferReviews(data.map(adaptReviewToClient)));
    })
    .then(() => {
      api.get(`${APIRoute.OFFERS}/${offerId}/nearby`)
        .then(({data}) => {
          dispatch(loadNearbyOffers(data.map(adaptToClient)));
        });
    })
    .then(() => dispatch(redirectToRoute(`${AppRoute.ROOM}/${offerId}`)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => dispatch(requireAuthorization({
      status: AuthorizationStatus.AUTH,
      email: data.email,
    })))
    .catch(() => {
    })
);

export const logIn = ({email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => localStorage.setItem('token', data.token))
    .then(() => dispatch(requireAuthorization({
      status: AuthorizationStatus.AUTH,
      email,
    })))
    .then(() => dispatch(redirectToRoute(AppRoute.MAIN)))
);

export const logOut = () => (dispatch, _getState, api) => (
  api.delete(AppRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(logout()))
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
      dispatch(loadOfferReviews(data.map(adaptReviewToClient)));
    })
);

export const addToFavorites = (offerId, status) => (dispatch, _getState, api) => (
  api.post(
    `${APIRoute.FAVORITE}/${offerId}/${status}`, {},
    {
      headers: {
        'x-token': localStorage.getItem('token'),
      },
    },
  )
    .then(({data}) => {
      dispatch(updateOffers(adaptToClient(data)));
    })
);
