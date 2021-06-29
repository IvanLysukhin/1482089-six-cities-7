import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logOut} from '../../store/api-action';
import PropTypes from 'prop-types';
import {AppRoute} from '../../constants';

function SignOut({onSignOut, accountEmail}) {
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
            onClick={(evt) => {
              evt.preventDefault();
              onSignOut();
            }}
          >
            <span className="header__signout">Sign out</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

SignOut.propTypes = {
  onSignOut: PropTypes.func.isRequired,
  accountEmail: PropTypes.string.isRequired,
};

const mapStateToProps = ({AUTH}) => ({
  accountEmail: AUTH.accountEmail,
});

const mapDispatchToProps = (dispatch) => ({
  onSignOut() {
    dispatch(logOut());
  },
});

export {SignOut};
export default connect(mapStateToProps, mapDispatchToProps)(SignOut);
