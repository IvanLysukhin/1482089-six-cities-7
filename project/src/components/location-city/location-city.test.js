import React from 'react';
import {render, screen} from '@testing-library/react';
import LocationCity from './location-city';

describe('Component: LocationCity', () => {
  it('should render "LocationCity" correctly with active class' , () => {
    const {container} = render(
      <LocationCity
        cityName={'Paris'}
        currentCity={'Paris'}
      />,
    );

    expect(screen.getByText('Paris')).toBeInTheDocument();
    expect(container.querySelector('.tabs__item--active')).toBeInTheDocument();
  });

  it('should render "HostUser" correctly with active class' , () => {
    const {container} = render(
      <LocationCity
        cityName={'Paris'}
        currentCity={'Cologne'}
      />,
    );

    expect(screen.getByText('Paris')).toBeInTheDocument();
    expect(container.querySelector('.tabs__item--active')).not.toBeInTheDocument();
  });
});
