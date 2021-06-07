import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../constants';
import LogoLink from '../logo-link/logo-link';

function NoPage() {
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <LogoLink/>
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
