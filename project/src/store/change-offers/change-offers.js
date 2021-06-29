import {
  changeCity,
  showOffer,
  changeSortType
} from '../action';
import {SortType} from '../../constants';
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  city: 'Paris',
  hoveredCardId: 0,
  sortType: SortType.POPULAR,
};

const changeOffers = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
      state.sortType = initialState.sortType;
    })
    .addCase(showOffer, (state, action) => {
      state.hoveredCardId = action.payload;
    })
    .addCase(changeSortType, (state, action) => {
      state.sortType = action.payload;
    });
})

export {changeOffers};
