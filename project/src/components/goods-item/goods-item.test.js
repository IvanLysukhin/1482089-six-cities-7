import React from 'react';
import {render, screen} from '@testing-library/react';
import GoodsItem from './goods-item';

describe('Component: GoodsItem', () => {
  it('should render "GoodsItem" correctly', () => {
    render(
      <GoodsItem goodsItem={'Conditioner'}/>,
    );

    expect(screen.getByText('Conditioner')).toBeInTheDocument();
  });
});
