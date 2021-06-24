import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logOut} from '../../store/api-action';
import PropTypes from 'prop-types';
import {AppRoute} from '../../constants';

function SignOut({signOut, accountEmail}) {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link to={AppRoute.FAVORITES} className="header__nav-link header__nav-link--profile" href="#">
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__user-name user__name">{accountEmail}</span>
          </Link>
        </li>
        <li className="header__nav-item">
          <a
            className="header__nav-link"
            href="#"
            onClick={() => signOut()}
          >
            <span className="header__signout">Sign out</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

SignOut.propTypes = {
  signOut: PropTypes.func.isRequired,
  accountEmail: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  accountEmail: state.accountEmail,
});

const mapDispatchToProps = (dispatch) => ({
  signOut() {
    dispatch(logOut());
  },
});

export {SignOut};
export default connect(mapStateToProps, mapDispatchToProps)(SignOut);
