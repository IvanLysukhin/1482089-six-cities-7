import React, {useEffect, useRef, useState} from 'react';
import {PropTypes} from 'prop-types';
import offerProp from '../place-card/place-card.prop';
import useMap from '../../hooks/useMap';
import leaflet from 'leaflet';

function MapCities({offers}) {
  const mapRef = useRef(null);
  const mapCities = useMap(mapRef, offers[0].city);

  const icon = leaflet.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [30, 40],
  });

  useEffect(() => {
    if (mapCities) {
      offers.forEach(({location}) => {
        leaflet
          .marker(
            [location.latitude, location.longitude],
            {icon},
          )
          .addTo(mapCities);
      });
    }
  }, [mapCities, offers]);

  return (
    <section
      id="map"
      className="cities__map map"
      ref={mapRef}
    />
  );
}

MapCities.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
};

export default MapCities;
