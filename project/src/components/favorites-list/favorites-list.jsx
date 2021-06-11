import React from 'react';
import FavoritesListItem from '../favorites-list-item/favorites-list-item';
import PropTypes from 'prop-types';
import offerProp from '../place-card/place-card.prop';
import {groupCities} from '../../utils';

function FavoritesList({offers}) {
  const allCities = Array.from(new Set(offers.map((offer) => offer.city.name)));

  return (
    <ul className="favorites__list">
      {groupCities(allCities, offers).map((city) => city.offers.length ? <FavoritesListItem key={city.name} city={city}/> : '')}
    </ul>
  );
}

FavoritesList.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
};

export default FavoritesList;
