import {SortType} from './constants';

export const calcRatingInPercent = (rating) => `${rating / 5 * 100}%`;

export const groupCities = (citiesArr, citiesOffers) =>
  citiesArr.map((city) => ({
    name: city,
    offers: citiesOffers.filter((offer) => offer.city.name === city),
  }));

export const sortOffers = (offers, sortType) => {
  switch(sortType) {
    case SortType.PRICE_TO_HIGH:
      return offers.sort((offerA, offerB)=> offerA.price - offerB.price);
    case SortType.PRICE_TO_LOW:
      return offers.sort((offerA, offerB)=> offerB.price - offerA.price);
    case SortType.TOP_RATED:
      return offers.sort((offerA, offerB)=> offerB.rating - offerA.rating);
    default: return offers;
  }
};
