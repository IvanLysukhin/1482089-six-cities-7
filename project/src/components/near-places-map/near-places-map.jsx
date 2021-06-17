import React, {useRef} from 'react';
import useMap from '../../hooks/useMap';
import useMapMarker from '../../hooks/useMapMarker';
import PropTypes from 'prop-types';
import offerProp from '../place-card/place-card.prop';

function NearPlacesMap({offers, city}) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useMapMarker(map, offers);

  return (
    <section
      id="map"
      className="property__map map"
      ref={mapRef}
    >
    </section>
  );
}

NearPlacesMap.propTypes = {
  offers: PropTypes.arrayOf(offerProp),
  city: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number,
      longitude:PropTypes.number,
      zoom: PropTypes.number,
    }),
    name: PropTypes.string,
  }),
};


export default NearPlacesMap;
