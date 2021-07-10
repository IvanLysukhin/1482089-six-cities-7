import {
  ActionType,
  changeCity,
  showOffer,
  changeSortType,
  loadOffers,
  requireAuthorization,
  logout,
  redirectToRoute,
  loadOfferReviews,
  loadNearbyOffers,
  updateOffers
} from './action';
import {AuthorizationStatus} from '../constants';
import {mockOffer, mockOffers, mockReviews} from '../mock/test-mocks';

// const offerTemplate = {
//   city: {
//     name: 'Cologne',
//     location: {
//       latitude: 50.938361,
//       longitude: 6.959974,
//       zoom: 13,
//     },
//   },
//   images: [
//     'https://7.react.pages.academy/static/hotel/20.jpg',
//     'https://7.react.pages.academy/static/hotel/15.jpg',
//   ],
//   title: 'Waterfront with extraordinary view',
//   rating: 2.9,
//   type: 'house',
//   price: 303,
//   goods: [
//     'Breakfast',
//     'Air conditioning',
//   ],
//   host: {
//     id: 25,
//     name: 'Angelina',
//     avatarUrl: 'img/avatar-angelina.jpg',
//     isPro: true,
//   },
//   description: 'This is a place for dreamers to reset, reflect, and create. Designed with a slow pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.',
//   location: {
//     latitude: 50.951361,
//     longitude: 6.944974,
//     zoom: 16,
//   },
//   id: 1,
//   previewImage: 'https://7.react.pages.academy/static/hotel/14.jpg',
//   isFavorite: false,
//   isPremium: false,
//   maxAdults: 6,
//   bedRooms: 2,
// };

describe('Actions', () => {
  it('Action creator for changing city returns correct action', () => {
    const chosenCity = 'City';

    const expectedAction = {
      type: ActionType.CHANGE_CITY,
      payload: chosenCity,
    };

    expect(changeCity(chosenCity)).toEqual(expectedAction);
  });

  it('Action creator for showing offer returns correct action', () => {
    const offerId = 0;

    const expectedAction = {
      type: ActionType.SHOW_OFFER,
      payload: offerId,
    };

    expect(showOffer(offerId)).toEqual(expectedAction);
  });

  it('Action creator for changing sort type returns correct action', () => {
    const sortType = 'Popular';

    const expectedAction = {
      type: ActionType.CHANGE_SORT_TYPE,
      payload: sortType,
    };

    expect(changeSortType(sortType)).toEqual(expectedAction);
  });

  it('Action creator for loading offers returns correct action', () => {

    const expectedAction = {
      type: ActionType.LOAD_OFFERS,
      payload: mockOffers,
    };

    expect(loadOffers(mockOffers)).toEqual(expectedAction);
  });

  it('Action creator for requiring authorization returns correct action', () => {
    const status = AuthorizationStatus.AUTH;

    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };

    expect(requireAuthorization(status)).toEqual(expectedAction);
  });

  it('Action creator for logging out returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOGOUT,
    };

    expect(logout()).toEqual(expectedAction);
  });

  it('Action creator for redirecting correct action', () => {
    const url = '/';

    const expectedAction = {
      type: ActionType.REDIRECT,
      payload: url,
    };

    expect(redirectToRoute(url)).toEqual(expectedAction);
  });

  it('Action creator for loading reviews correct action', () => {

    const expectedAction = {
      type: ActionType.LOAD_OFFER_REVIEWS,
      payload: mockReviews,
    };

    expect(loadOfferReviews(mockReviews)).toEqual(expectedAction);
  });


  it('Action creator for loading nearby offers correct action', () => {

    const expectedAction = {
      type: ActionType.LOAD_NEARBY_OFFERS,
      payload: mockOffers,
    };

    expect(loadNearbyOffers(mockOffers)).toEqual(expectedAction);
  });

  it('Action creator for updating offers correct action', () => {

    const expectedAction = {
      type: ActionType.UPDATE_OFFERS,
      payload: mockOffer,
    };

    expect(updateOffers(mockOffer)).toEqual(expectedAction);
  });
});
