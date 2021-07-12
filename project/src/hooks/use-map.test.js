import React from 'react';
import {renderHook} from '@testing-library/react-hooks';
import {render, screen} from '@testing-library/react';
import useMap from './use-map';

const city = {
  name: 'Cologne',
  location: {
    latitude: 50.938361,
    longitude: 6.959974,
    zoom: 13,
  },
};

describe('Hook, useMap', () => {
  it('should return render map', () => {

    const fakeMap = <section data-testid="map"/>;

    const {container} = render(fakeMap);

    const ref = {
      current: container.querySelector('section'),
    };

    renderHook(() => {
      useMap(ref, city);
    });

    expect(screen.getByTestId('map')).toBeInTheDocument();
    expect(screen.getByText('CARTO')).toBeInTheDocument();
    expect(screen.getByText('Leaflet')).toBeInTheDocument();
    expect(container.querySelector('.leaflet-container')).toBeInTheDocument();
  });
});
