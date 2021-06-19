import
React,
{
  useRef,
  useEffect
} from 'react';
import {PropTypes} from 'prop-types';
import offerProp from '../place-card/place-card.prop';
import useMap from '../../hooks/useMap';
import useMapMarker from '../../hooks/useMapMarker';

function MapCities({offers}) {
  const mapRef = useRef(null);
  const mapCities = useMap(mapRef, offers[0].city);

  const {location} = offers[0].city;
  useMapMarker(mapCities, offers);

  useEffect(() => {
    if (mapCities) {
      mapCities.setView([location.latitude, location.longitude]);
    }

  }, [offers]);

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
