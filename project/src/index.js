import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {reducer} from './store/reducer';
import App from './components/app/app';
import {STATIC_OFFERS} from './mocks/creatOffers';
import {reviews} from './mocks/reviews';

const Setting = {
  CARD_COUNT: 5,
};

const store = createStore(
  reducer,
  composeWithDevTools()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        reviews = {reviews}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
