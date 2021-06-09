import PlaceCard from '../components/place-card/place-card';
import React from 'react';
import PropTypes from 'prop-types';
import offerProp from '../components/place-card/place-card.prop';

function OffersList({offers, cardCount}) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.slice(0, cardCount).map((offer) => <PlaceCard key={offer.id} offer={offer}/>)}
    </div>
  );
}

OffersList.propTypes = {
  cardCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(offerProp).isRequired,
};

export default OffersList;
