import React from 'react';
import PropTypes from 'prop-types';

function HostUser({hostUser}) {
  const {avatarUrl, isPro, name} = hostUser;
  return (
    <div className="property__host-user user">
      <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
        <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar"/>
      </div>
      <span className="property__user-name">{name}</span>
      {isPro && <span className="property__user-status">Pro</span>}
    </div>
  );
}

HostUser.propTypes = {
  hostUser: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isPro: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  }),
};


export default React.memo(HostUser);
