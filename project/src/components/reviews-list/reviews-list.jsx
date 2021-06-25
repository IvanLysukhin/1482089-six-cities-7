import React from 'react';
import PropTypes from 'prop-types';
import Review from '../review/review';
import reviewProp from '../review/review.prop';

function ReviewsList({reviews}) {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => <Review review={review} key={review.id}/>)}
    </ul>
  );
}

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(reviewProp),
};

export default ReviewsList;
