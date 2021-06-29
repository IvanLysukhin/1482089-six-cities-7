import React from 'react';
import {useSelector} from 'react-redux';
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
import {
  AppRoute,
  AuthorizationStatus
} from '../../constants';
import offerProp from '../place-card/place-card.prop';
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../browser-history';
import Loading from '../loading/loading';
import {getDataLoadStatus, getOffers} from '../../store/load-offers-data/selectors';
import {getAuthorizationStatus} from "../../store/check-auth/selectors";

function App() {

  const offers = useSelector(getOffers);
  const isDataLoaded = useSelector(getDataLoadStatus);
  const authorizationStatus = useSelector(getAuthorizationStatus);

  if (!isDataLoaded || authorizationStatus === AuthorizationStatus.UNKNOWN) {
    return <Loading/>;
  }

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

export default App;
