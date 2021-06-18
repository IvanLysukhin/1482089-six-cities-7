export const ActionType = {
  CHANGE_CITY: 'CITY_CHANGE',
  RENDER_OFFERS: 'RENDER_OFFERS',
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  })
};
