import {loadNearbyOffers, loadOfferReviews, loadOffers, updateOffers} from '../action';
import {createReducer} from '@reduxjs/toolkit';

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
    })
    .addCase(updateOffers, (state, action) => {
      state.offers = state.offers.map((offer) => {
        if (offer.id === action.payload.id) {
          offer = action.payload;
        }
        return offer;
      });
    });
});

export {loadOffersData};
