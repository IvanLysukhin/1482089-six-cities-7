import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import Main from '../main/main';
import Favorites from '../favorites/favorites';
import Login from '../login/login';
import Room from '../room/room';
import NoPage from '../no-page/no-page';
import {AppRoute} from '../../constants';
import offerProp from '../place-card/place-card.prop';
import reviewListProp from '../reviews-list/review-list.prop';

function App(props) {
  const {offers, reviews} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main
            offers={offers}
          />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <Favorites offers={offers}/>
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <Login/>
        </Route>
        {offers.map((offer) =>
          (
            <Route exact key={offer.id} path={`${AppRoute.ROOM}/${offer.id}`}>
              <Room key={offer.id} offer={offer} offers={offers} reviews={reviews[offer.id]}/>
            </Route>
          ))}
        <Route>
          <NoPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
  reviews: PropTypes.arrayOf(reviewListProp),
};

export default App;
