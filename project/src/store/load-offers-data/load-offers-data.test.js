import {
  initialState,
  loadOffersData
} from './load-offers-data';
import {
  loadNearbyOffers,
  loadOfferReviews,
  loadOffers,
  updateOffers
} from '../action';

const offerTemplate = {
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

const offersCount = 10;

describe('Reducer: Check auth', () => {
  it('without parameters returns initial state', () => {
    expect(loadOffersData(undefined, {})).toEqual(initialState);
  });

  it('should load all offers', () => {
    const mockOffers = new Array(offersCount).fill(offerTemplate);
    expect(loadOffersData(initialState, loadOffers(mockOffers)))
      .toEqual({
        ...initialState,
        isDataLoaded: true,
        offers: mockOffers,
      });
  });

  it('should load reviews for chosen card', () => {
    const offerReviews = new Array(offersCount).fill({
      id: 1,
      user: {
        id: 16,
        name: 'Mollie',
        isPro: true,
        avatarUrl: 'https://7.react.pages.academy/static/avatar/7.jpg',
      },
      rating: 5,
      comment: 'Home is amazing. It\'s like staying in a museum. The rooms, furnishings and artworks are incredible. The views of My Vesuvius',
      date: '2021-06-24T07:37:31.578Z',
    });
    expect(loadOffersData(initialState, loadOfferReviews(offerReviews)))
      .toEqual({
        ...initialState,
        offerReviews,
      });
  });

  it('should load neraby offers for chosen card', () => {
    const nearbyOffers = new Array(offersCount).fill(offerTemplate);

    expect(loadOffersData(initialState, loadNearbyOffers(nearbyOffers)))
      .toEqual({
        ...initialState,
        nearbyOffers,
      });
  });

  it('should replaced card by the same favorite card', () => {
    const favoriteMockOffer = {
      ...offerTemplate,
      id: 5,
      isFavorite: true,
    };

    const mockOffers = new Array(offersCount).fill(offerTemplate).map((offer, i) => (
      {
        ...offer,
        id: i + 1,
      }
    ));

    expect(loadOffersData({
      ...initialState,
      offers: mockOffers,
    }, updateOffers(favoriteMockOffer)))
      .toEqual({
        ...initialState,
        offers: mockOffers.map((offer) => {
          if (offer.id === favoriteMockOffer.id) {
            offer = favoriteMockOffer;
            return offer;
          }
          return offer;
        }),
      });
  });
});
