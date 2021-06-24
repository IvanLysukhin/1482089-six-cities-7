import {ActionType} from './action';
import {SortType} from '../constants';
import {AuthorizationStatus} from '../constants';

const initialState = {
  city: 'Paris',
  offers: [],
  hoveredCardId: 0,
  sortType: SortType.POPULAR,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  isDataLoaded: false,
};

const reducer = (state = initialState, action) => {
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

    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        isDataLoaded: true,
        offers: action.payload,
      };

    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };

    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    default:
      return state;
  }
};

export {reducer};
