import {ActionType} from './action';
import {STATIC_OFFERS} from '../mocks/creatOffers';

const initialState = {
  city: 'Paris',
  offers: STATIC_OFFERS,
  hoveredCardId: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
        offers: STATIC_OFFERS,
      };
    case ActionType.SHOW_OFFER:
      return {
        ...state,
        hoveredCardId: action.payload,
      };
    default:
      return state;
  }
};

export {reducer};
