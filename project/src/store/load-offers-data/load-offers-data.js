import {ActionType} from '../action';

const initialState = {
  offers: [],
  isDataLoaded: false,
  offerReviews: [],
  nearbyOffers: [],
};


const loadOffersData = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        isDataLoaded: true,
        offers: action.payload,
      };

    case ActionType.LOAD_OFFER_REVIEWS:
      return {
        ...state,
        offerReviews: action.payload,
      };

    case ActionType.LOAD_NEARBY_OFFERS:
      return {
        ...state,
        nearbyOffers: action.payload,
      };
    default:
      return state;
  }
};

export {loadOffersData};
