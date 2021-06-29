import {combineReducers} from 'redux';
import {changeOffers} from './change-offers/change-offers';
import {loadOffersData} from './load-offers-data/load-offers-data';
import {checkAuth} from './check-auth/check-auth';

export const NameSpace = {
  CHANGE: 'CHANGE',
  LOAD: 'LOAD',
  AUTH: 'AUTH',
};

export default combineReducers({
  [NameSpace.CHANGE]: changeOffers,
  [NameSpace.LOAD]: loadOffersData,
  [NameSpace.AUTH]: checkAuth,
});


