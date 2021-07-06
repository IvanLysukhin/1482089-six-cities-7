import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../services/api';
import {ActionType} from './action';
import {
  checkAuth,
  fetchOffers,
  fetchOfferReviews,
  logIn,
  logOut, fetchNearbyOffers
} from './api-action';
import {APIRoute, AuthorizationStatus, AppRoute} from '../constants';
import {adaptReviewToClient, adaptToClient} from '../utils';

const fakeResponse = {
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
const mockDataLength = 10;
const mockData = new Array(mockDataLength).fill(fakeResponse);


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
      });
  });


  it('should make a correct API call to GET /offers', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = fetchOffers();

    apiMock
      .onGet(APIRoute.OFFERS)
      .reply(200, mockData);

    return offersLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: mockData.map(adaptToClient),
        });
      });
  });

  it('should make a correct API call to GET /comments/:id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersOptionsLoader = fetchOfferReviews(1);
    const mockReviews = new Array(3)
      .fill({
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
      });

    apiMock
      .onGet(`${APIRoute.REVIEWS}/1`)
      .reply(200, mockReviews);

    apiMock
      .onGet(`${APIRoute.OFFERS}/1/nearby`)
      .reply(200, mockData);

    return offersOptionsLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFER_REVIEWS,
          payload: mockReviews.map(adaptReviewToClient),
        });
      });
  });

  it('should make a correct API call to GET /offers/:id/nearby', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersOptionsLoader = fetchNearbyOffers(1);

    apiMock
      .onGet(`${APIRoute.REVIEWS}/1`)
      .reply(200, mockData);

    apiMock
      .onGet(`${APIRoute.OFFERS}/1/nearby`)
      .reply(200, mockData);

    return offersOptionsLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_NEARBY_OFFERS,
          payload: mockData.map(adaptToClient),
        });
      });
  });
});
