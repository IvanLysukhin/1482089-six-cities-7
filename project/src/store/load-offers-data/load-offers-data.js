import {ActionType, loadNearbyOffers, loadOfferReviews, loadOffers} from '../action';
import {createReducer} from "@reduxjs/toolkit";

const initialState = {
  offers: [],
  isDataLoaded: false,
  offerReviews: [],
  nearbyOffers: [],
};


const loadOffersData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadOfferReviews, (state, action) => {
      state.offerReviews = action.payload;
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    } )
});

export {loadOffersData};
