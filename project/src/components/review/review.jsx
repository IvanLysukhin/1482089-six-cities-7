import React from 'react';
import {calcRatingInPercent} from '../../utils';
import reviewProp from '../review/review.prop';

function Review({review}) {

  const {comment, user, rating, date} = review;

  const dateOptions = {
    month: 'long',
    day: 'numeric',
  };

  const reviewDate = new Date(date);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: calcRatingInPercent(rating)}}>
            </span>
            <span className="visually-hidden">{rating}</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={`${reviewDate.toISOString()}`}>{reviewDate.toLocaleString('en-US', dateOptions)}</time>
      </div>
    </li>
  );
}

Review.propTypes = {
  review: reviewProp,
};

export default Review;
