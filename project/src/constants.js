export const AppRoute = {
  MAIN: '/',
  LOGIN: '/login',
  LOGOUT: '/logout',
  FAVORITES: '/favorites',
  ROOM: '/offer',
};

export const City = {
  PARIS: 'Paris',
  COLOGNE: 'Cologne',
  BRUSSELS: 'Brussels',
  AMSTERDAM: 'Amsterdam',
  HAMBURG:'Hamburg',
  DUSSELDORF: 'Dusseldorf',
};

export const SortType = {
  POPULAR: 'Popular',
  PRICE_TO_HIGH: 'Price: low to high',
  PRICE_TO_LOW: 'Price: high to low',
  TOP_RATED: 'Top rated first',
};

export const APIRoute = {
  OFFERS: '/hotels',
  REVIEWS: '/comments',
  FAVORITE: '/favorite',
  LOGIN: '/login',
  LOGOUT: '/logout',
};

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export const MIN_REVIEW_LENGTH = 50;
export const MAX_REVIEW_LENGTH = 300;

export const RequestStatus = {
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  WAITING: 'WAITING',
};
