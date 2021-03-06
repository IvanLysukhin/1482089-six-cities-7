import React, {useCallback} from 'react';
import {
  useSelector,
  useDispatch
} from 'react-redux';
import LogoLink from '../logo-link/logo-link';
import MapCities from '../map-cities/map-cities';
import CardsList from '../cards-list/cards-list';
import Locations from '../locations/locations';
import {changeCity} from '../../store/action';
import Sorting from '../sorting/sorting';
import EmptyMain from '../empty-main/empty-main';
import {AuthorizationStatus} from '../../constants';
import SignOut from '../sign-out/sign-out';
import SignIn from '../sign-in/sign-in';
import {getCurrentCity} from '../../store/offers-data/selectors';
import {getFilterOffers, getSortedOffers} from '../../store/load-process/selectors';
import {getAuthorizationStatus} from '../../store/check-auth/selectors';


function Main() {

  const city = useSelector(getCurrentCity);

  const authorizationStatus = useSelector(getAuthorizationStatus);
  const filteredOffers = useSelector(getFilterOffers);
  const sortedOffers = useSelector(getSortedOffers);

  const dispatch = useDispatch();

  const onCityChangeHandler = useCallback((newCity) => dispatch(changeCity(newCity)), []);
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <LogoLink/>
            </div>
            {authorizationStatus === AuthorizationStatus.AUTH ? <SignOut/> : <SignIn/>}
          </div>
        </div>
      </header>

      <main className={`page__main page__main--index ${filteredOffers.length ? '' : 'page__main--index-empty'}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations city={city} onCityChangeHandler={onCityChangeHandler}/>
        </div>
        {filteredOffers.length ?
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{filteredOffers.length} places to stay in {city}</b>
                <Sorting/>
                <CardsList
                  offers={sortedOffers}
                />
              </section>
              <div className="cities__right-section">
                <MapCities offers={filteredOffers} city={filteredOffers[0].city}/>
              </div>
            </div>
          </div> :
          <EmptyMain/>}
      </main>
    </div>);
}

export default Main;
