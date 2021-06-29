import {ActionType} from '../action';
import {AuthorizationStatus} from '../../constants';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  accountEmail: '',
};

const checkAuth = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload.status,
        accountEmail: action.payload.email,
      };

    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        accountEmail: '',
      };

    default:
      return state;
  }
};

export {checkAuth};
