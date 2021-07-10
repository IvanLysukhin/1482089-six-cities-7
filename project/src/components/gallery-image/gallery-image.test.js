import React from 'react';
import {render, screen} from '@testing-library/react';
import GalleryImage from './gallery-image';

describe('Component: GalleryImage', () => {
  it('should render "GalleryImage" correctly', () => {
    render(
      <GalleryImage src={'img.jpg'}/>,
    );

    expect(screen.getByTestId('img.jpg')).toBeInTheDocument();
  });
});
