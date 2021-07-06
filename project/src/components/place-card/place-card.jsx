import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import offerProp from '../place-card/place-card.prop';
import {calcRatingInPercent} from '../../utils';
import PropTypes from 'prop-types';
import {showOffer} from '../../store/action';
import {getAuthorizationStatus} from '../../store/check-auth/selectors';
import useFavorites from '../../hooks/useFavorites';
import {AppRoute} from '../../constants';
import {useHistory} from 'react-router-dom';


function PlaceCard({offer, isNearOffers}) {
  const dispatch = useDispatch();
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const clickFavoriteButtonHandler = useFavorites(authorizationStatus, offer, dispatch);
  const history = useHistory();

  const clickLinkHandler = (evt) => {
    evt.preventDefault();
    history.push(`${AppRoute.ROOM}/${offer.id}`);
  };

  return (
    <article
      className={`${isNearOffers ? 'near-places__card' : 'cities__place-card'} place-card`}

      onMouseEnter={() => {
        dispatch(showOffer(offer.id));
      }}
      onMouseLeave={() => {
        dispatch(showOffer(0));
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
          onClick={clickLinkHandler}
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
            onClick={clickFavoriteButtonHandler}
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
            onClick={clickLinkHandler}
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
};

export default PlaceCard;
