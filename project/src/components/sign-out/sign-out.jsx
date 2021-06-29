import React from 'react';
import {Link} from 'react-router-dom';
import {
  useSelector,
  useDispatch
} from 'react-redux';
import {logOut} from '../../store/api-action';
import {AppRoute} from '../../constants';
import {getAuthorizationEmail} from '../../store/check-auth/selectors';

function SignOut() {

  const dispatch = useDispatch();

  const accountEmail = useSelector(getAuthorizationEmail);

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
              dispatch(logOut());
            }}
          >
            <span className="header__signout">Sign out</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default SignOut;
