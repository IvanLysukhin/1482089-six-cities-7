import {requireAuthorization, logout} from '../action';
import {AuthorizationStatus} from '../../constants';
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  accountEmail: '',
};

const checkAuth = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      if (action.payload.status === AuthorizationStatus.AUTH) {
        state.authorizationStatus = action.payload.status;
        state.accountEmail = action.payload.email;
        return;
      }

      state.authorizationStatus = action.payload.status;
      state.accountEmail = '';

    })
    .addCase(logout, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
      state.accountEmail = initialState.accountEmail;
    });
});

export {checkAuth, initialState};
