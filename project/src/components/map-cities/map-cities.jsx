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
import {connect} from 'react-redux';

function MapCities({offers, hoveredCardId, city, isNearbyMap= false}) {
  const mapRef = useRef(null);
  const mapCities = useMap(mapRef, city);

  const {location} = city;
  useMapMarker(mapCities, offers, hoveredCardId);

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
  hoveredCardId: PropTypes.number.isRequired,
  city:PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }).isRequired,
  }),
  isNearbyMap: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  hoveredCardId: state.hoveredCardId,
});

export {MapCities};
export default connect(mapStateToProps, null)(MapCities);
