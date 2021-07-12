import {
  useEffect,
  useState
} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

function useMapMarker(map, offers, hoveredCardId, isNearbyMap) {
  const [markers, setMarkers] = useState({});
  const mapMarkers = [];

  useEffect(() => {
    const icon = leaflet.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [30, 40],
    });

    const activeIcon = leaflet.icon({
      iconUrl: 'img/pin-active.svg',
      iconSize: [30, 40],
    });

    if (map) {

      if (markers.mapMarkers) {
        markers.mapMarkers.forEach((marker) => map.removeLayer(marker));
      }

      offers.forEach(({location, id}) => {
        if (isNearbyMap) {
          hoveredCardId = offers[offers.length - 1].id;
        }
        const marker = leaflet
          .marker(
            [location.latitude, location.longitude],
            {icon: (hoveredCardId === id) ? activeIcon : icon},
          )
          .addTo(map);
        mapMarkers.push(marker);
      });

      setMarkers({
        mapMarkers,
      });
    }
  }, [map, offers, hoveredCardId]);
}

export default useMapMarker;
