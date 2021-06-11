import React from 'react';
import PropTypes from 'prop-types';

function GalleryImage({src}) {
  return (
    <div className="property__image-wrapper">
      <img className="property__image" src={src} alt="Photo studio"/>
    </div>
  );
}

GalleryImage.propTypes = {
  src: PropTypes.string.isRequired,
};

export default GalleryImage;
