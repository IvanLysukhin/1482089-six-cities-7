import {ActionType} from './action';
import {STATIC_OFFERS, creatOffers} from '../mocks/creatOffers';

const initialState = {
  city: 'Paris',
  offers: STATIC_OFFERS,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
        offers: creatOffers(),
      }
    default:
      return state;
  }
};

export {reducer};
