import React from 'react';
import PropTypes from 'prop-types';
import Review from '../review/review';
import reviewProp from '../review/review.prop';

function ReviewsList({reviews}) {
  const maxReviewsNumber = 10;

  const sortedReviews = [...reviews].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.valueOf() - dateA.valueOf();
  });
  
  return (
    <ul className="reviews__list">
      {
        sortedReviews
          .slice(0, maxReviewsNumber)
          .map((review) => <Review review={review} key={review.id}/>)
      }
    </ul>
  );
}

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(reviewProp),
};

export default ReviewsList;
