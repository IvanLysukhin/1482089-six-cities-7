import React from 'react';
import PropTypes from 'prop-types';

function GoodsItem({goodsItem}) {
  return (
    <li className="property__inside-item">
      {goodsItem}
    </li>
  );
}

GoodsItem.propTypes = {
  goodsItem: PropTypes.string.isRequired,
};

export default GoodsItem;
