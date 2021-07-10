import React from 'react';
import PropTypes from 'prop-types';
import Review from '../review/review';
import reviewProp from '../review/review.prop';

function ReviewsList({reviews}) {
  const maxReviewsNumber = 10;
  // console.log(reviews.length);
  // if (reviews.length) {
  //   reviews = reviews.sort((a, b) => {
  //     const dateA = new Date(a.date);
  //     const dateB = new Date(b.date);
  //     console.log(dateA, dateB)
  //   })
  // }

  return (
    <ul className="reviews__list">
      {
        reviews
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
