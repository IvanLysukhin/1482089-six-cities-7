import {NameSpace} from '../root-reducer';
import {createSelector} from 'reselect';
import {SortType} from '../../constants';
import {getCurrentCity, getCurrentSortType} from '../offers-data/selectors';
import {sortByDate} from '../../utils';

export const getOffers = (state) => state[NameSpace.LOAD].offers;
export const getDataLoadStatus = (state) => state[NameSpace.LOAD].isDataLoaded;
export const getReviews = (state) => state[NameSpace.LOAD].offerReviews;
export const getNearbyOffers = (state) => state[NameSpace.LOAD].nearbyOffers;
export const getReviewSendingStatus = (state) => state[NameSpace.LOAD].isReviewSendSuccessful;

export const getFilterOffers = createSelector(getOffers, getCurrentCity, (offers, city) =>
  offers.filter((offer) => offer.city.name === city),
);

export const getSortedOffers = createSelector(getFilterOffers, getOffers, getCurrentSortType, (filterOffers, offers, sortType) => {
  switch (sortType) {
    case SortType.PRICE_TO_HIGH:
      return [...filterOffers].sort((offerA, offerB) => offerA.price - offerB.price);
    case SortType.PRICE_TO_LOW:
      return [...filterOffers].sort((offerA, offerB) => offerB.price - offerA.price);
    case SortType.TOP_RATED:
      return [...filterOffers].sort((offerA, offerB) => offerB.rating - offerA.rating);
    default:
      return [...filterOffers];
  }
});

export const getSortedReviews = createSelector(getReviews, (reviews) =>
  [...reviews].sort(sortByDate),
);
