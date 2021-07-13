import {loadNearbyOffers, loadOfferReviews, loadOffers, sendReview, updateOffers, updateReviews} from '../action';
import {createReducer} from '@reduxjs/toolkit';
import {RequestStatus} from '../../constants';

const initialState = {
  offers: [],
  isDataLoaded: false,
  offerReviews: [],
  nearbyOffers: [],
  favoritesOffers: [],
  isReviewSendSuccessful: RequestStatus.SUCCESS,
};

const loadProcess = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadOfferReviews, (state, action) => {
      state.offerReviews = action.payload;
    })
    .addCase(updateReviews, (state, action) => {
      state.offerReviews = action.payload;
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(updateOffers, (state, action) => {
      state.offers = state.offers.map((offer) => {
        if (offer.id === action.payload.id) {
          offer = action.payload;
        }
        return offer;
      });
    })
    .addCase(sendReview, (state, action) => {
      state.isReviewSendSuccessful = action.payload;
    });
});

export {loadProcess, initialState};
