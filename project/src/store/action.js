export const ActionType = {
  CHANGE_CITY: 'CITY_CHANGE',
  RENDER_OFFERS: 'RENDER_OFFERS',
  SHOW_OFFER: 'SHOW_OFFER',
  CHANGE_SORT_TYPE: 'CHANGE_SORT_TYPE',
  LOAD_OFFERS: 'LOAD_OFFERS',
  REQUIRED_AUTHORIZATION: 'REQUIRED_AUTHORIZATION',
  LOGOUT: 'LOGOUT',
  REDIRECT: 'REDIRECT',
  LOAD_OFFER_REVIEWS: 'LOAD_OFFER_REVIEWS',
  LOAD_NEARBY_OFFERS: 'LOAD_NEARBY_OFFERS',
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),

  showOffer: (id) => ({
    type: ActionType.SHOW_OFFER,
    payload: id,
  }),

  changeSortType:(sortType) => ({
    type: ActionType.CHANGE_SORT_TYPE,
    payload: sortType,
  }),

  loadOffers:(offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),

  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),

  logout: () => ({
    type: ActionType.LOGOUT,
  }),

  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT,
    payload: url,
  }),

  loadOfferReviews: (reviews) => ({
    type: ActionType.LOAD_OFFER_REVIEWS,
    payload: reviews,
  }),

  loadNearbyOffers: (offers) => ({
    type: ActionType.LOAD_NEARBY_OFFERS,
    payload: offers,
  }),
};
