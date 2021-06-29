import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {AuthorizationStatus, AppRoute} from '../../constants';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getAuthorizationStatus} from '../../store/check-auth/selectors';

function PrivateRoute({exact, path, render, authorizationStatus}) {
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
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

export {PrivateRoute};
export default connect(mapStateToProps, null)(PrivateRoute);
