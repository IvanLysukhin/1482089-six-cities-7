import React from 'react';
import {render, screen} from '@testing-library/react';
import HostUser from './host-user';

describe('Component: HostUser', () => {
  it('should render "HostUser" correctly', () => {
    render(
      <HostUser hostUser={{
        avatarUrl: 'img/img.jpg',
        isPro: true,
        name: 'John',
      }}
      />,
    );

    expect(screen.getByTestId('img/img.jpg')).toBeInTheDocument();
    expect(screen.getByText('John')).toBeInTheDocument();
    expect(screen.getByText('Pro')).toBeInTheDocument();
  });
});
