import React, {useRef} from 'react';
import {connect} from 'react-redux';
import LogoLink from '../logo-link/logo-link';
import SignIn from '../sign-in/sign-in';
import {logIn} from '../../store/api-action';
import PropTypes from 'prop-types';

function Login({onSubmit}) {
  const emailRef = useRef();
  const passwordRef = useRef();

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <LogoLink/>
            </div>
            <SignIn/>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={(evt) => {
                evt.preventDefault();

                if (!emailRef.current.value.length
                  || passwordRef.current.value.length === 0
                  || !!passwordRef.current.value.match(/\W/)
                ) {
                  return;
                }

                onSubmit({
                  email: emailRef.current.value,
                  password: passwordRef.current.value,
                });
              }}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required=""
                  ref={emailRef}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required=""
                  ref={passwordRef}
                  onInput={({target}) => {
                    if (target.value.match(/\W/)) {
                      target.setCustomValidity('Incorrect password');
                    } else {
                      target.setCustomValidity('');
                    }

                    target.reportValidity();
                  }}
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>);
}

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(data) {
    dispatch(logIn(data));
  },
});

export {Login};
export default connect(null, mapDispatchToProps)(Login);
