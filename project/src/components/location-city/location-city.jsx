import React from 'react';
import {PropTypes} from 'prop-types';

function LocationCity({cityName, currentCity}) {
  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${currentCity === cityName ? 'tabs__item--active' : ''}`} href="#">
        <span>{cityName}</span>
      </a>
    </li>
  );
}

LocationCity.propTypes = {
  cityName: PropTypes.string.isRequired,
  currentCity: PropTypes.string.isRequired,
};

export default React.memo(LocationCity);
