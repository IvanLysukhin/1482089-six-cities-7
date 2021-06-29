import {SortType} from './constants';

export const calcRatingInPercent = (rating) => `${rating / 5 * 100}%`;

export const groupCities = (citiesArr, citiesOffers) =>
  citiesArr.map((city) => ({
    name: city,
    offers: citiesOffers.filter((offer) => offer.city.name === city),
  }));

export const sortOffers = (offers, sortType) => {
  console.log(sortType)
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

export const adaptToClient = (offer) => {

  const adaptedOffer = {
    ...offer,
    previewImage: offer.preview_image,
    isFavorite: offer.is_favorite,
    isPremium: offer.is_premium,
    maxAdults: offer.max_adults,
    bedRooms: offer.bedrooms,
    host: {
      ...offer.host,
      avatarUrl: offer.host.avatar_url,
      isPro: offer.host.is_pro,
    },
  };

  delete adaptedOffer.preview_image;
  delete adaptedOffer.is_favorite;
  delete adaptedOffer.is_premium;
  delete adaptedOffer.max_adults;
  delete adaptedOffer.bedrooms;
  delete adaptedOffer.host.avatar_url;
  delete adaptedOffer.host.is_pro;

  return adaptedOffer;
};

export const adaptReviewToClient = (review) => {
  const adaptedReview = {
    ...review,
    user:{
      ...review.user,
      isPro: review.user.is_pro,
      avatarUrl: review.user.avatar_url,
    },
  };

  delete adaptedReview.user.is_pro;
  delete adaptedReview.user.avatar_url;

  return adaptedReview;
};
