import React from 'react';
import {connect} from 'react-redux';
import {
  Switch,
  Route,
  Router as BrowserRouter
} from 'react-router-dom';
import PropTypes from 'prop-types';
import Main from '../main/main';
import Favorites from '../favorites/favorites';
import Login from '../login/login';
import Room from '../room/room';
import NoPage from '../no-page/no-page';
import {AppRoute} from '../../constants';
import offerProp from '../place-card/place-card.prop';
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../browser-history';

function App(props) {
  const {offers} = props;
  return (
    <BrowserRouter
      history={browserHistory}
    >
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main/>
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          render={() => <Favorites offers={offers}/>}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.LOGIN}>
          <Login/>
        </Route>
        {offers.map((offer) =>
          (
            <Route exact key={offer.id} path={`${AppRoute.ROOM}/${offer.id}`}>
              <Room key={offer.id} offer={offer}/>
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
};

const mapStateToProps = (state) => ({
  city: state.city,
  offers: state.offers,
});

export {App};
export default connect(mapStateToProps, null)(App);
