import {
  initialState,
  loadProcess
} from './load-process';
import {
  loadNearbyOffers,
  loadOfferReviews,
  loadOffers,
  updateOffers,
  sendReview,
  updateReviews
} from '../action';

import {mockOffer, mockOffers, mockReviews} from '../../mock/test-mocks';
import {RequestStatus} from '../../constants';

describe('Reducer: Load offers', () => {
  it('without parameters returns initial state', () => {
    expect(loadProcess(undefined, {})).toEqual(initialState);
  });

  it('should change sending status to SUCCESS', () => {

    expect(loadProcess(initialState, sendReview(RequestStatus.SUCCESS)))
      .toEqual({
        ...initialState,
      });
  });

  it('should change sending status to WAITING', () => {

    expect(loadProcess(initialState, sendReview(RequestStatus.WAITING)))
      .toEqual({
        ...initialState,
        isReviewSendSuccessful: RequestStatus.WAITING,
      });
  });

  it('should change sending status to ERROR', () => {

    expect(loadProcess(initialState, sendReview(RequestStatus.ERROR)))
      .toEqual({
        ...initialState,
        isReviewSendSuccessful: RequestStatus.ERROR,
      });
  });

  it('should load all offers', () => {

    expect(loadProcess(initialState, loadOffers(mockOffers)))
      .toEqual({
        ...initialState,
        isDataLoaded: true,
        offers: mockOffers,
      });
  });

  it('should load reviews for chosen card', () => {
    const offerReviews = mockReviews;

    expect(loadProcess(initialState, loadOfferReviews(mockReviews)))
      .toEqual({
        ...initialState,
        offerReviews,
      });
  });

  it('should return updated reviews', () => {
    const offerReviews = mockReviews;

    expect(loadProcess(initialState, updateReviews(mockReviews)))
      .toEqual({
        ...initialState,
        updatedReviews: offerReviews,
      });
  });

  it('should load neraby offers for chosen card', () => {
    const nearbyOffers = mockOffers;

    expect(loadProcess(initialState, loadNearbyOffers(mockOffers)))
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

    expect(loadProcess({
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
