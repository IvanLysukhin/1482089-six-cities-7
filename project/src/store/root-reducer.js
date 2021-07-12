import {combineReducers} from 'redux';
import {offersData} from './offers-data/offers-data';
import {loadProcess} from './load-process/load-process';
import {checkAuth} from './check-auth/check-auth';

export const NameSpace = {
  CHANGE: 'CHANGE',
  LOAD: 'LOAD',
  AUTH: 'AUTH',
};

export default combineReducers({
  [NameSpace.CHANGE]: offersData,
  [NameSpace.LOAD]: loadProcess,
  [NameSpace.AUTH]: checkAuth,
});


