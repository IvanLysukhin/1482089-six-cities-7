import PlaceCard from '../place-card/place-card';
import React from 'react';
import offerProp from '../place-card/place-card.prop';
import PropTypes from 'prop-types';

function CardsList({offers, isNearOffers  = false}) {
  return (
    <div className={isNearOffers ? 'near-places__list places__list' : 'cities__places-list places__list tabs__content'}>
      {offers.map((offerItem) => <PlaceCard isNearOffers={isNearOffers} key={offerItem.id} offer={offerItem}/>)}
    </div>
  );
}

CardsList.propTypes = {
  offers: PropTypes.arrayOf(offerProp),
  isNearOffers: PropTypes.bool,
};

export default CardsList;
