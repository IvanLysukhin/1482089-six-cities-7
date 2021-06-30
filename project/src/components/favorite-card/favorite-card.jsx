import React from 'react';
import {calcRatingInPercent} from '../../utils';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../constants';
import offerProp from '../place-card/place-card.prop';
import useFavorites from '../../hooks/useFavorites';
import {useDispatch, useSelector} from 'react-redux';
import {getAuthorizationStatus} from '../../store/check-auth/selectors';

function FavoriteCard({offer}) {

  const dispatch = useDispatch();
  const authorizationStatus = useSelector(getAuthorizationStatus);

  const clickFavoriteButtonHandler = useFavorites(authorizationStatus, offer, dispatch);

  const {price, title, type, previewImage, rating} = offer;
  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.ROOM}/${offer.id}`}>
          <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place image"/>
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className="place-card__bookmark-button place-card__bookmark-button--active button"
            type="button"
            onClick={clickFavoriteButtonHandler}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: calcRatingInPercent(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.ROOM}/${offer.id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

FavoriteCard.propTypes = {
  offer: offerProp,
};

export default FavoriteCard;
