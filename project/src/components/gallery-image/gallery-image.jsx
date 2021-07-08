import React from 'react';
import PropTypes from 'prop-types';

function GalleryImage({src}) {
  return (
    <div className="property__image-wrapper">
      <img className="property__image" src={src} alt="Photo studio" data-testid={src}/>
    </div>
  );
}

GalleryImage.propTypes = {
  src: PropTypes.string.isRequired,
};

export default React.memo(GalleryImage);
