import
React,
{
  useRef,
  useEffect
} from 'react';
import {PropTypes} from 'prop-types';
import offerProp from '../place-card/place-card.prop';
import useMap from '../../hooks/use-map';
import useMapMarker from '../../hooks/use-map-marker';
import {useSelector} from 'react-redux';
import {getHoveredCardId} from '../../store/change-offers/selectors';

function MapCities({offers, city, isNearbyMap = false}) {

  const hoveredCardId = useSelector(getHoveredCardId);

  const mapRef = useRef(null);
  const mapCities = useMap(mapRef, city);

  const {location} = city;
  useMapMarker(mapCities, offers, hoveredCardId, isNearbyMap);

  useEffect(() => {
    if (mapCities) {
      mapCities.setView([location.latitude, location.longitude]);
    }

  }, [offers]);

  return (
    <section
      id="map"
      className={`${isNearbyMap ? 'property__map' : 'cities__map'} map`}
      ref={mapRef}
    />
  );
}

MapCities.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }).isRequired,
  }),
  isNearbyMap: PropTypes.bool,
};

export default MapCities;
