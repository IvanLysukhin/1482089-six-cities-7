import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../constants';
import offerProp from '../place-card/place-card.prop';
import {calcRatingInPercent} from '../../utils';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../store/action';

function PlaceCard({offer, isNearOffers, showOffer}) {

  return (
    <article className={`${isNearOffers ? 'near-places__card' : 'cities__place-card'} place-card`}
      onMouseEnter={() => {
        showOffer(offer.id);
      }}
      onMouseLeave={() => {
        showOffer(0);
      }}
    >
      {offer.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className={`${isNearOffers ? 'near-places__image-wrapper' : 'cities__image-wrapper'} place-card__image-wrapper`}>
        <Link to={`${AppRoute.ROOM}/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${offer.isFavorite && 'place-card__bookmark-button--active'} button`} type="button">
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
          <Link to={`${AppRoute.ROOM}/${offer.id}`}>
            {offer.title}
          </Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

PlaceCard.propTypes = {
  offer: offerProp,
  isNearOffers: PropTypes.bool,
  showOffer: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  showOffer(offer) {
    dispatch(ActionCreator.showOffer(offer));
  },
});

export {PlaceCard};
export default connect(null, mapDispatchToProps)(PlaceCard);
