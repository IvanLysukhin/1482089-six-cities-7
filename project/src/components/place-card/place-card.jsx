import React from 'react';
import {connect} from 'react-redux';
import offerProp from '../place-card/place-card.prop';
import {calcRatingInPercent} from '../../utils';
import PropTypes from 'prop-types';
import {showOffer} from '../../store/action';
import {fetchOfferOptions} from '../../store/api-action';

function PlaceCard({offer, isNearOffers, onHoverCardHandler, onOfferCardClickHandler}) {
  return (
    <article
      className={`${isNearOffers ? 'near-places__card' : 'cities__place-card'} place-card`}

      onMouseEnter={() => {
        onHoverCardHandler(offer.id);
      }}
      onMouseLeave={() => {
        onHoverCardHandler(0);
      }}
    >
      {offer.isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div
        className={`${isNearOffers ? 'near-places__image-wrapper' : 'cities__image-wrapper'} place-card__image-wrapper`}
      >
        <a
          onClick={(evt) => {
            evt.preventDefault();
            onOfferCardClickHandler(offer.id);
          }}
        >
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button ${offer.isFavorite && 'place-card__bookmark-button--active'} button`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark">
              </use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: calcRatingInPercent(offer.rating)}}>
            </span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a
            onClick={(evt) => {
              evt.preventDefault();
              loadOfferOptions(offer.id);
            }}
          >
            {offer.title}
          </a>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

PlaceCard.propTypes = {
  offer: offerProp,
  isNearOffers: PropTypes.bool.isRequired,
  onHoverCardHandler: PropTypes.func.isRequired,
  onOfferCardClickHandler: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onHoverCardHandler(offerId) {
    dispatch(showOffer(offerId));
  },

  onOfferCardClickHandler(offerId) {
    dispatch(fetchOfferOptions(offerId));
  },
});

export {PlaceCard};
export default connect(null, mapDispatchToProps)(PlaceCard);
