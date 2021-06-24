import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import LogoLink from '../logo-link/logo-link';
import offerProp from '../place-card/place-card.prop';
import MapCities from '../map-cities/map-cities';
import CardsList from '../cards-list/cards-list';
import Locations from '../locations/locations';
import {ActionCreator} from '../../store/action';
import Sorting from '../sorting/sorting';
import {sortOffers} from '../../utils';
import EmptyMain from '../empty-main/empty-main';
import Loading from '../loading/loading';
import {AuthorizationStatus} from "../../constants";
import SignOut from '../sign-out/sign-out';
import SignIn from '../sign-in/sign-in';


function Main(props) {
  const {offers, city, changeCity, sortType, isDataLoaded, authorizationStatus} = props;
  const filteredOffers = offers.filter((offer)=> offer.city.name === city);

  if (!isDataLoaded) {
    return <Loading/>;
  }

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
          <Locations city={city} changeCity={changeCity}/>
        </div>
        {filteredOffers.length ?
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{filteredOffers.length} places to stay in {city}</b>
                <Sorting/>
                <CardsList
                  offers = {sortOffers(filteredOffers, sortType)}
                />
              </section>
              <div className="cities__right-section">
                <MapCities offers={filteredOffers}/>
              </div>
            </div>
          </div> :
          <EmptyMain/>}
      </main>
    </div>);
}

Main.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
  city: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired,
  sortType: PropTypes.string.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
  offers: state.offers,
  sortType: state.sortType,
  isDataLoaded: state.isDataLoaded,
  authorizationStatus: state.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
});


export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
