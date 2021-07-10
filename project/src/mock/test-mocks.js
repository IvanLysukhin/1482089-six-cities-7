import {creatMockArray} from '../utils';

export const mockOffer = {
  city: {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13,
    },
  },
  images: [
    'https://7.react.pages.academy/static/hotel/20.jpg',
    'https://7.react.pages.academy/static/hotel/15.jpg',
  ],
  title: 'Waterfront with extraordinary view',
  rating: 2.9,
  type: 'house',
  price: 303,
  goods: [
    'Breakfast',
    'Air conditioning',
  ],
  host: {
    id: 25,
    name: 'Angelina',
    avatarUrl: 'img/avatar-angelina.jpg',
    isPro: true,
  },
  description: 'This is a place for dreamers to reset, reflect, and create. Designed with a slow pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.',
  location: {
    latitude: 50.951361,
    longitude: 6.944974,
    zoom: 16,
  },
  id: 1,
  previewImage: 'https://7.react.pages.academy/static/hotel/14.jpg',
  isFavorite: false,
  isPremium: false,
  maxAdults: 6,
  bedRooms: 2,
};

export const mockReview = {
  id: 1,
  user: {
    id: 14,
    isPro: true,
    name: 'Corey',
    avatarUrl: 'https://7.react.pages.academy/static/avatar/5.jpg',
  },
  rating: 4,
  comment: 'I stayed here for one night and it was an unpleasant experience.',
  date: '2021-07-01T13:04:25.833Z',
};

export const offersNumber = 10;

export const mockOffers = creatMockArray(mockOffer, offersNumber);

export const reviewNumber = 5;

export const mockReviews = creatMockArray(mockReview, reviewNumber);

export const fakeOfferResponse = {
  city: {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13,
    },
  },
  'preview_image': 'https://7.react.pages.academy/static/hotel/3.jpg',
  images: [
    'https://7.react.pages.academy/static/hotel/14.jpg',
    'https://7.react.pages.academy/static/hotel/18.jpg',
  ],
  title: 'Perfectly located Castro',
  'is_favorite': false,
  'is_premium': true,
  rating: 4.2,
  type: 'apartment',
  bedrooms: 4,
  'max_adults': 5,
  price: 215,
  goods: [
    'Coffee machine',
  ],
  host: {
    id: 25,
    name: 'Angelina',
    'is_pro': true,
    'avatar_url': 'img/avatar-angelina.jpg',
  },
  description: 'Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.',
  location: {
    latitude: 50.932361,
    longitude: 6.960974,
    zoom: 16,
  },
  id: 1,
};

export const fakeData = creatMockArray(fakeOfferResponse, offersNumber);

export const fakeReviewResponse = {
  id: 1,
  user: {
    id: 14,
    'is_pro': true,
    name: 'Corey',
    'avatar_url': 'https://7.react.pages.academy/static/avatar/5.jpg',
  },
  rating: 4,
  comment: 'I stayed here for one night and it was an unpleasant experience.',
  date: '2021-07-01T13:04:25.833Z',
};

export const fakeReviewsData = creatMockArray(fakeReviewResponse, reviewNumber);
