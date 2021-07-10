import React, {useRef, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {postReview} from '../../store/api-action';
import PropTypes from 'prop-types';
import {
  MIN_REVIEW_LENGTH,
  MAX_REVIEW_LENGTH,
  RequestStatus
} from '../../constants';
import {getReviewSendingStatus} from '../../store/load-offers-data/selectors';

function ReviewForm({offerId}) {
  const dispatch = useDispatch();
  const submitButton = useRef(null);
  const radios = useRef(null);
  const commentArea = useRef(null);
  const form = useRef(null);

  const isReviewSendSuccessful = useSelector(getReviewSendingStatus);

  const onCommentSubmitHandler = (evt) => {
    evt.preventDefault();
    const inputs = Array.from(evt.target);
    const checkedIndex = inputs.findIndex((input) => input.checked);
    const textInputIndex = inputs.findIndex((input) => input.tagName === 'TEXTAREA');

    dispatch(postReview(offerId, {
      comment: inputs[textInputIndex].value,
      rating: Number(inputs[checkedIndex].value),
    }));
  };

  const formChangeHandler = () => {
    const rateStars = new Array(...radios.current.children);
    const commentLength = commentArea.current.value.length;

    if (
      rateStars.some((radio) => radio.checked) &&
      commentLength >= MIN_REVIEW_LENGTH &&
      commentLength < MAX_REVIEW_LENGTH
    ) {
      submitButton.current.disabled = false;
    }
  };

  const onInputCommentHandler = ({target}) => {

    if (!target.value.length || target.value.length < MIN_REVIEW_LENGTH) {
      target.setCustomValidity(`Describe your stay with at least ${MIN_REVIEW_LENGTH - target.value.length} characters.`);
    } else {
      target.setCustomValidity('');
    }

    if (target.value.length > MAX_REVIEW_LENGTH) {
      target.setCustomValidity(`Maximum symbols. ${target.value.length - MAX_REVIEW_LENGTH}`);
    } else {
      target.setCustomValidity('');
    }

    target.reportValidity();
  };

  const sendingHandler = (status) => {
    switch (status) {
      case RequestStatus.SUCCESS:
        return 'Submit';
      case RequestStatus.ERROR:
        return 'Try again';
      case RequestStatus.WAITING:
        return 'Sending...';
      default:
        return 'Submit';
    }
  };

  const showErrorMessage = (status) => {
    if (status === RequestStatus.ERROR) {
      return (
        <div
          style={{
            background: 'red',
            color: 'white',
            height: '20px',
            textAlign: 'center',
          }}
        >
          Something go wrong. Please try later
        </div>);
    }
    return '';
  };

  useEffect(() => {
    if (isReviewSendSuccessful === RequestStatus.SUCCESS) {
      form.current.reset();
      submitButton.current.disabled = true;
    }

    if (isReviewSendSuccessful === RequestStatus.WAITING) {
      submitButton.current.disabled = true;
    }
  });

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={onCommentSubmitHandler}
      onChange={formChangeHandler}
      ref={form}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div
        className="reviews__rating-form form__rating"
        ref={radios}
      >
        <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio"/>
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star">
            </use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio"/>
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star">
            </use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio"/>
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star">
            </use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio"/>
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star">
            </use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio"/>
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star">
            </use>
          </svg>
        </label>
      </div>
      {showErrorMessage(isReviewSendSuccessful)}
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onInput={onInputCommentHandler}
        data-testid={'comment'}
        ref={commentArea}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          ref={submitButton}
        >
          {sendingHandler(isReviewSendSuccessful)}
        </button>
      </div>
    </form>
  );
}

ReviewForm.propTypes = {
  offerId: PropTypes.number.isRequired,
};


export default ReviewForm;
