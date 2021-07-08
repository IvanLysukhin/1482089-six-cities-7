import React from 'react';
import {City} from '../../constants';
import {render, screen} from '@testing-library/react';
import Locations from './locations';
import userEvent from '@testing-library/user-event';

describe('Component: Locations', () => {
  it('should render "Locations" correctly' , () => {
    const onClickHandler = jest.fn();

    const {container} = render(
      <Locations
        city={'Paris'}
        onCityChangeHandler={onClickHandler}
      />,
    );

    expect(container.querySelectorAll('.locations__item').length).toBe(Object.values(City).length);
    userEvent.click(screen.getByText('Paris'));
    expect(onClickHandler).toBeCalled();
  });
});
