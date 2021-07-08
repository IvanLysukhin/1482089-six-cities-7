import React from 'react';
import {useDispatch} from 'react-redux';
import {postReview} from '../../store/api-action';
import PropTypes from 'prop-types';

function ReviewForm({offerId}) {
  const dispatch = useDispatch();

  const onCommentSubmitHandler =(evt) => {
    evt.preventDefault();

    const inputs = Array.from(evt.target);
    const checkedIndex = inputs.findIndex((input) => input.checked);
    const textInputIndex = inputs.findIndex((input) => input.tagName === 'TEXTAREA');
    const textAreaValue = inputs[textInputIndex].value;

    if (checkedIndex === -1 || textAreaValue.length < 50 || !textAreaValue.length) {
      return;
    }

    dispatch(postReview(offerId, {
      comment: inputs[textInputIndex].value,
      rating: Number(inputs[checkedIndex].value),
    }));

    evt.target.reset();
  };

  const onInputCommentHandler = ({target}) => {
    if (!target.value.length || target.value.length < 50) {
      target.setCustomValidity(`Describe your stay with at least ${50 - target.value.length} characters.`);
    } else {
      target.setCustomValidity('');
    }
    target.reportValidity();
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={onCommentSubmitHandler}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
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
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onInput={onInputCommentHandler}
        data-testid={'comment'}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
      </div>
    </form>
  );
}

ReviewForm.propTypes = {
  offerId: PropTypes.number.isRequired,
};


export default ReviewForm;
