import {ActionType} from './action';
import {STATIC_OFFERS} from '../mocks/creatOffers';
import {SortType} from '../constants';

const initialState = {
  city: 'Amsterdam',
  offers: STATIC_OFFERS,
  hoveredCardId: 0,
  sortType: SortType.POPULAR,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
        offers: STATIC_OFFERS,
        sortType: initialState.sortType,
      };

    case ActionType.SHOW_OFFER:
      return {
        ...state,
        hoveredCardId: action.payload,
      };

    case ActionType.CHANGE_SORT_TYPE:
      return {
        ...state,
        sortType: action.payload,
      };
    default:
      return state;
  }
};

export {reducer};
