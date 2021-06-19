import {
  useEffect,
  useState
} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

function useMapMarker(map, offers) {
  const [markers, setMarkers] = useState({});
  const mapMarkers = [];

  useEffect(() => {
    const icon = leaflet.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [30, 40],
    });

    if (map) {

      if (markers.mapMarkers) {
        markers.mapMarkers.forEach((marker) => map.removeLayer(marker));
      }

      offers.forEach(({location}) => {
        const marker = leaflet
          .marker(
            [location.latitude, location.longitude],
            {icon},
          )
          .addTo(map);
        mapMarkers.push(marker);
      });

      setMarkers({
        mapMarkers,
      });
    }
  }, [map, offers]);
}

export default useMapMarker;
