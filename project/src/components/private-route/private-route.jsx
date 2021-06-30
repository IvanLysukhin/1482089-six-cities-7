import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {AuthorizationStatus, AppRoute} from '../../constants';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {getAuthorizationStatus} from '../../store/check-auth/selectors';

function PrivateRoute({exact, path, render}) {

  const authorizationStatus = useSelector(getAuthorizationStatus);

  return (
    <Route
      exact={exact}
      path={path}
      render={(props) => (
        (authorizationStatus === AuthorizationStatus.AUTH) ?
          render(props) :
          <Redirect to={AppRoute.LOGIN}/>
      )}
    />
  );
}

PrivateRoute.propTypes = {
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

export default PrivateRoute;
