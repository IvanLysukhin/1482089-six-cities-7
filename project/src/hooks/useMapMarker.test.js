import React from 'react';
import {renderHook} from '@testing-library/react-hooks';
import {render} from '@testing-library/react';
import useMap from './use-map';
import useMapMarker from './useMapMarker';
import {creatMockArray} from '../utils';

const offer = {
  id: 0,
  location: {
    latitude: 50.938361,
    longitude: 6.959974,
    zoom: 13,
  },
};

const offersNumber = 5;
const offers = creatMockArray(offer, offersNumber);

const city = {
  name: 'Cologne',
  location: {
    latitude: 50.938361,
    longitude: 6.959974,
    zoom: 13,
  },
};

const hoveredCardId = 0;

describe('Hook, useMapMarkers', () => {
  it('should add markers to map', () => {

    const fakeMap = <section data-testid="map"/>;

    const {container} = render(fakeMap);

    const ref = {
      current: container.querySelector('section'),
    };

    renderHook(() => {
      const map = useMap(ref, city);
      useMapMarker(map, offers, hoveredCardId);
    });

    expect(container.querySelector('.leaflet-marker-pane')).toBeInTheDocument();
    expect(container.querySelectorAll('.leaflet-marker-icon').length).toBe(offersNumber);
  });
});
