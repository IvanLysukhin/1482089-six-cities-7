import FavoriteCard from '../favorite-card/favorite-card';
import React from 'react';


function FavoritesListItem({city}) {
  const isEmpty = city.offers.some((offer) => offer.isFavorite);

  if (isEmpty) {
    return (
      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>{city.name}</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">
          {city.offers.map((offer) => offer.isFavorite ? <FavoriteCard key={offer.id} offer = {offer}/> : '')}
        </div>
      </li>);
  } else {
    return '';
  }
}

export default FavoritesListItem;
