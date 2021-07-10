import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_CITY: 'CITY_CHANGE',
  RENDER_OFFERS: 'RENDER_OFFERS',
  SHOW_OFFER: 'SHOW_OFFER',
  CHANGE_SORT_TYPE: 'CHANGE_SORT_TYPE',
  LOAD_OFFERS: 'LOAD_OFFERS',
  REQUIRED_AUTHORIZATION: 'REQUIRED_AUTHORIZATION',
  LOGOUT: 'LOGOUT',
  REDIRECT: 'REDIRECT',
  LOAD_OFFER_REVIEWS: 'LOAD_OFFER_REVIEWS',
  LOAD_NEARBY_OFFERS: 'LOAD_NEARBY_OFFERS',
  UPDATE_OFFERS: 'UPDATE_OFFERS',
  SEND_REVIEW: 'SEND_REVIEW',
};

export const changeCity = createAction(ActionType.CHANGE_CITY,(city) => ({
  payload: city,
}));

export const showOffer = createAction(ActionType.SHOW_OFFER,(id) => ({
  payload: id,
}));

export const changeSortType =  createAction(ActionType.CHANGE_SORT_TYPE,(sortType) => ({
  payload: sortType,
}));

export const loadOffers = createAction(ActionType.LOAD_OFFERS, (offers) => ({
  payload: offers,
}));

export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION,(status) => ({
  payload: status,
}));

export const logout = createAction(ActionType.LOGOUT);

export const redirectToRoute = createAction(ActionType.REDIRECT,(url) => ({
  payload: url,
}));

export const loadOfferReviews = createAction(ActionType.LOAD_OFFER_REVIEWS, (reviews) => ({
  payload: reviews,
}));

export const loadNearbyOffers = createAction(ActionType.LOAD_NEARBY_OFFERS, (offers) => ({
  payload: offers,
}));

export const updateOffers = createAction(ActionType.UPDATE_OFFERS, (updatedOffer) => ({
  payload: updatedOffer,
}));

export const sendReview = createAction(ActionType.SEND_REVIEW, (status) => ({
  payload: status,
}));
