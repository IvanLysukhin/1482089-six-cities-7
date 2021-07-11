import {combineReducers} from 'redux';
import {offersData} from './offers-data/offers-data';
import {loadOffersData} from './load-offers-data/load-offers-data';
import {checkAuth} from './check-auth/check-auth';

export const NameSpace = {
  CHANGE: 'CHANGE',
  LOAD: 'LOAD',
  AUTH: 'AUTH',
};

export default combineReducers({
  [NameSpace.CHANGE]: offersData,
  [NameSpace.LOAD]: loadOffersData,
  [NameSpace.AUTH]: checkAuth,
});


