import  {ActionType} from '../action';
import browserHistory from '../../browser-history';

export const redirect = (_store) => (next) => (action) => {
  if (action.type === ActionType.REDIRECT) {
    browserHistory.push(action.payload);
  }

  return next(action);
};
