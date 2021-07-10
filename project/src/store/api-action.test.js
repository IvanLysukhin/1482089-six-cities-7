import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../services/api';
import {ActionType} from './action';
import {
  checkAuth,
  fetchOffers,
  fetchOfferReviews,
  logIn,
  logOut,
  fetchNearbyOffers,
  postReview,
  addToFavorites
} from './api-action';
import {
  APIRoute,
  AuthorizationStatus,
  AppRoute
} from '../constants';
import {adaptReviewToClient, adaptToClient} from '../utils';
import {
  fakeData,
  fakeOfferResponse,
  fakeReviewsData
} from '../mock/test-mocks';

let api = null;

describe('Async operations', () => {
  beforeAll(() => {
    api = createAPI(() => {
    });
  });

  it('should make a correct API call to GET /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, [{fake: true}]);

    return checkAuthLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: {status: AuthorizationStatus.AUTH},
        });
      });
  });


  it('should make a correct API call to POST /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {email: 'example@example.com', password: '123'};
    const loginLoader = logIn(fakeUser);

    apiMock
      .onPost(APIRoute.LOGIN)
      .reply(200, [{fake: true}]);

    return loginLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: {status: AuthorizationStatus.AUTH, email: fakeUser.email},
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REDIRECT,
          payload: AppRoute.MAIN,
        });
      });
  });

  it('should make a correct API call to delete /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const logout = logOut();

    Storage.prototype.removeItem = jest.fn();

    apiMock
      .onDelete(APIRoute.LOGOUT)
      .reply(200, [{fake: true}]);

    return logout(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOGOUT,
        });

        expect(Storage.prototype.removeItem).toBeCalledTimes(1);
        expect(Storage.prototype.removeItem).nthCalledWith(1, 'token');
      });
  });


  it('should make a correct API call to GET /offers', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = fetchOffers();

    apiMock
      .onGet(APIRoute.OFFERS)
      .reply(200, fakeData);

    return offersLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: fakeData.map(adaptToClient),
        });
      });
  });

  it('should make a correct API call to GET /comments/:id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersOptionsLoader = fetchOfferReviews(1);

    apiMock
      .onGet(`${APIRoute.REVIEWS}/1`)
      .reply(200, fakeReviewsData);

    apiMock
      .onGet(`${APIRoute.OFFERS}/1/nearby`)
      .reply(200, fakeReviewsData);

    return offersOptionsLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFER_REVIEWS,
          payload: fakeReviewsData.map(adaptReviewToClient),
        });
      });
  });

  it('should make a correct API call to GET /offers/:id/nearby', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersOptionsLoader = fetchNearbyOffers(1);

    apiMock
      .onGet(`${APIRoute.REVIEWS}/1`)
      .reply(200, fakeData);

    apiMock
      .onGet(`${APIRoute.OFFERS}/1/nearby`)
      .reply(200, fakeData);

    return offersOptionsLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_NEARBY_OFFERS,
          payload: fakeData.map(adaptToClient),
        });
      });
  });


  it('should make a correct API call to POST /comments/:id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const reviewUploader = postReview(5, {comment: 'test comment', rating: 5});


    fakeReviewsData.push({
      id: 5,
      user: {
        id: 14,
        'is_pro': true,
        name: 'Corey',
        'avatar_url': 'https://7.react.pages.academy/static/avatar/5.jpg',
      },
      rating: 5,
      comment: 'test comment',
      date: '2021-07-01T13:04:25.833Z',
    });

    apiMock
      .onPost(`${APIRoute.REVIEWS}/5`)
      .reply(200, fakeReviewsData);

    return reviewUploader(dispatch, () => {
    }, api)
      .then(() => {
        const action = {
          type: ActionType.LOAD_OFFER_REVIEWS,
          payload: fakeReviewsData.map(adaptReviewToClient),
        };

        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, action);
        expect(action.payload.some((review) => review.comment === 'test comment')).toBeTruthy();
      });
  });

  it('should make a correct API call to POST /favorites/:id/ and add to favorites', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const reviewUploader = addToFavorites(5, 1);

    const fakeFavoriteOffer = {
      ...fakeOfferResponse,
      'is_favorite': true,
    };

    apiMock
      .onPost(`${APIRoute.FAVORITE}/5/1`)
      .reply(200, fakeFavoriteOffer);

    return reviewUploader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_OFFERS,
          payload: adaptToClient(fakeFavoriteOffer),
        });
      });
  });
});
