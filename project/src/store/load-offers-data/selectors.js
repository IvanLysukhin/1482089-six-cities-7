import {NameSpace} from '../root-reducer';

export const getOffers = (state) => state[NameSpace.LOAD].offers;
export const getDataLoadStatus = (state) => state[NameSpace.LOAD].isDataLoaded;
export const getReviews = (state) => state[NameSpace.LOAD].offerReviews;
export const getNearbyOffers = (state) => state[NameSpace.LOAD].nearbyOffers;
export const getReviewSendingStatus = (state) => state[NameSpace.LOAD].isReviewSendSuccessful;
