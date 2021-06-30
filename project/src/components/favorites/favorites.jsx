import React from 'react';
import LogoLink from '../logo-link/logo-link';
import FavoriteList from '../favorites-list/favorites-list';
import PropTypes from 'prop-types';
import offerProp from '../place-card/place-card.prop';
import SignOut from '../sign-out/sign-out';
import FavoritesEmpty from '../favorites-empty/favorites-empty';

function Favorites({offers}) {
  if (!offers.some((offer) => offer.isFavorite)) {
    return <FavoritesEmpty/>
  }

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <LogoLink/>
            </div>
            <SignOut/>
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoriteList offers={offers}/>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>);
}

Favorites.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
};

export default Favorites;
