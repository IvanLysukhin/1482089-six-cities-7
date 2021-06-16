import PlaceCard from '../place-card/place-card';
import React from 'react';
import offerProp from '../place-card/place-card.prop';
import PropTypes from 'prop-types';

function NearPlaces({offers}) {
  return (
    <div className="near-places__list places__list">
      {offers.map((offerItem) => <PlaceCard key={offerItem.id} offer={offerItem}/>)}
    </div>
  );
}

NearPlaces.propTypes = {
  offers: PropTypes.arrayOf(offerProp),
};

export default NearPlaces;
