import {ActionType} from './action';
import {STATIC_OFFERS} from '../mocks/creatOffers';

const initialState = {
  city: 'Paris',
  offers: STATIC_OFFERS.filter((offer) => offer.city.name === 'Paris'),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
        offers: STATIC_OFFERS.filter((offer) => offer.city.name === action.payload),
      };
    default:
      return state;
  }
};

export {reducer};
