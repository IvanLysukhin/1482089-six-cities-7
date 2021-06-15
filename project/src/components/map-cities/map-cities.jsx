import React, {useEffect, useRef} from 'react';
import {PropTypes} from 'prop-types';
import offerProp from '../place-card/place-card.prop';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

const AMSTERDAM = [52.38333, 4.9];
const ZOOM = 12;

function MapCities ({offers}) {
  const mapRef = useRef(null);

  useEffect(() => {
    mapRef.current = leaflet.map('map', {
      center: AMSTERDAM,
      zoom: ZOOM,
      zoomControl: false,
      marker: true,
    });

    const icon = leaflet.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [30, 40],
    });

    leaflet
      .tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      })
      .addTo(mapRef.current);

    offers.forEach(({location}) => {
      leaflet
        .marker(
          [location.latitude, location.longitude],
          {icon},
        )
        .addTo(mapRef.current);
    });

    return ()=> mapRef.current.remove();

  }, []);

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
