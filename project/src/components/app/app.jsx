import React from 'react';
import {useSelector} from 'react-redux';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Main from '../main/main';
import Favorites from '../favorites/favorites';
import Login from '../login/login';
import Room from '../room/room';
import NoPage from '../no-page/no-page';
import {
  AppRoute,
  AuthorizationStatus
} from '../../constants';
import PrivateRoute from '../private-route/private-route';
import Loading from '../loading/loading';
import {getDataLoadStatus, getOffers} from '../../store/load-offers-data/selectors';
import {getAuthorizationStatus} from '../../store/check-auth/selectors';

function App() {

  const offers = useSelector(getOffers);
  const isDataLoaded = useSelector(getDataLoadStatus);
  const authorizationStatus = useSelector(getAuthorizationStatus);

  if (!isDataLoaded || authorizationStatus === AuthorizationStatus.UNKNOWN) {
    return <Loading/>;
  }

  return (
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
        {authorizationStatus === AuthorizationStatus.AUTH ? <Redirect to={AppRoute.MAIN}/> : <Login/>}
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
  );
}

export default App;
