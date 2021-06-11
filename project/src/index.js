import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {STATIC_OFFERS} from './mocks/offers';
import {reviews} from './mocks/reviews';

const Setting = {
  CARD_COUNT: 5,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      cardCount = {Setting.CARD_COUNT}
      offers = {STATIC_OFFERS}
      reviews = {reviews}
    />
  </React.StrictMode>,
  document.getElementById('root'));
