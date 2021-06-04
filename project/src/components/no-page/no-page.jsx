import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../constants';

function NoPage() {
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <b className="places__found">404. Page Not Found</b>
              <Link className ="login__submit form__submit button" to={AppRoute.MAIN}>Return to main</Link>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default NoPage;
