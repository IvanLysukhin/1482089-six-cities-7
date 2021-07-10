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

import {mockOffer, mockOffers, mockReviews} from '../../mock/test-mocks';

describe('Reducer: Check auth', () => {
  it('without parameters returns initial state', () => {
    expect(loadOffersData(undefined, {})).toEqual(initialState);
  });

  it('should load all offers', () => {

    expect(loadOffersData(initialState, loadOffers(mockOffers)))
      .toEqual({
        ...initialState,
        isDataLoaded: true,
        offers: mockOffers,
      });
  });

  it('should load reviews for chosen card', () => {
    const offerReviews = mockReviews;

    expect(loadOffersData(initialState, loadOfferReviews(mockReviews)))
      .toEqual({
        ...initialState,
        offerReviews,
      });
  });

  it('should load neraby offers for chosen card', () => {
    const nearbyOffers = mockOffers;

    expect(loadOffersData(initialState, loadNearbyOffers(mockOffers)))
      .toEqual({
        ...initialState,
        nearbyOffers,
      });
  });

  it('should replaced card by the same favorite card', () => {
    const favoriteMockOffer = {
      ...mockOffer,
      id: 5,
      isFavorite: true,
    };

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
