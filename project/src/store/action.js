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

export const changeCity = (city) => ({
  type: ActionType.CHANGE_CITY,
  payload: city,
})

export const showOffer = (id) => ({
  type: ActionType.SHOW_OFFER,
  payload: id,
})

export const changeSortType = (sortType) => ({
  type: ActionType.CHANGE_SORT_TYPE,
  payload: sortType,
})

export const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers,
})

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
})

export const logout = () => ({
  type: ActionType.LOGOUT,
})

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT,
  payload: url,
})

export const loadOfferReviews = (reviews) => ({
  type: ActionType.LOAD_OFFER_REVIEWS,
  payload: reviews,
})

export const loadNearbyOffers = (offers) => ({
  type: ActionType.LOAD_NEARBY_OFFERS,
  payload: offers,
})
