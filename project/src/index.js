import React from 'react';
import ReactDOM from 'react-dom';
import {createAPI} from './services/api';
import {requireAuthorization} from './store/action';
import {fetchOffers, checkAuth} from './store/api-action';
import {AuthorizationStatus} from './constants';
import {Provider} from 'react-redux';
import App from './components/app/app';
import {reviews} from './mocks/reviews';
import {redirect} from './store/redirect';
import rootReducer from './store/root-reducer';
import {configureStore} from '@reduxjs/toolkit';

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)),
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

store.dispatch(checkAuth());
store.dispatch(fetchOffers());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        reviews = {reviews}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
