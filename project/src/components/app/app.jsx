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
import reviewProp from '../review/review.prop';

function App(props) {
  const {cardCount, offers, reviews} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main
            cardCount = {cardCount}
            offers = {offers}
          />
        </Route>
        <Route  exact path={AppRoute.FAVORITES}>
          <Favorites/>
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <Login/>
        </Route>
        <Route exact path={`${AppRoute.ROOM}/:id`}>
          <Room reviews = {reviews}/>
        </Route>
        <Route>
          <NoPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  cardCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(offerProp).isRequired,
  reviews: PropTypes.arrayOf(reviewProp).isRequired,
};

export default App;
