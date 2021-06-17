import {useEffect} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

function useMapMarker(map, offers) {

  useEffect(() => {
    const icon = leaflet.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [30, 40],
    });

    if (map) {
      offers.forEach(({location}) => {
        leaflet
          .marker(
            [location.latitude, location.longitude],
            {icon},
          )
          .addTo(map);
      });
    }
  }, [map, offers]);
}

export default useMapMarker;
