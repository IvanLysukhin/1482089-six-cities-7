import {ActionType} from '../action';
import {SortType} from "../../constants";

const initialState = {
  city: 'Paris',
  hoveredCardId: 0,
  sortType: SortType.POPULAR,
};

const changeOffers = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
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
}

export {changeOffers};
