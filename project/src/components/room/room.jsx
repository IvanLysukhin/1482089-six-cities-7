import React,
{useEffect} from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import LogoLink from '../logo-link/logo-link';
import ReviewsList from '../reviews-list/reviews-list';
import GalleryImage from '../gallery-image/gallery-image';
import {calcRatingInPercent} from '../../utils';
import GoodsItem from '../goods-item/goods-item';
import HostUser from '../host-user/host-user';
import offerProp from '../place-card/place-card.prop';
import ReviewForm from '../review-form/review-form';
import {AuthorizationStatus} from '../../constants';
import CardsList from '../cards-list/cards-list';
import SignIn from '../sign-in/sign-in';
import SignOut from '../sign-out/sign-out';
import MapCities from '../map-cities/map-cities';
import {fetchNearbyOffers, fetchOfferReviews} from '../../store/api-action';
import {getAuthorizationStatus} from '../../store/check-auth/selectors';
import {
  getNearbyOffers,
  getReviews
} from '../../store/load-offers-data/selectors';
import useFavorites from '../../hooks/useFavorites';

function Room(props) {
  const {offer} = props;

  const dispatch = useDispatch();

  const reviews = useSelector(getReviews);
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const nearbyOffers = useSelector(getNearbyOffers);

  const clickFavoriteButtonHandler = useFavorites(authorizationStatus, offer, dispatch);

  useEffect(() => {
    dispatch(fetchOfferReviews(offer.id));
    dispatch(fetchNearbyOffers(offer.id));
  }, []);


  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <LogoLink/>
            </div>
            {authorizationStatus === AuthorizationStatus.AUTH ? <SignOut/> : <SignIn/>}
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {offer.images.map((image) => <GalleryImage src={image} key={image}/>)}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {offer.isPremium &&
              <div className="property__mark">
                <span>Premium</span>
              </div>}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer.title}
                </h1>
                <button
                  className={`property__bookmark-button ${offer.isFavorite && 'property__bookmark-button--active'} button`}
                  type="button"
                  onClick={clickFavoriteButtonHandler}
                >
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark">
                    </use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: calcRatingInPercent(offer.rating)}}>
                  </span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer.bedRooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {offer.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {offer.goods.map((goodsItem) => <GoodsItem goodsItem={goodsItem} key={goodsItem}/>)}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <HostUser hostUser={offer.host}/>
                <div className="property__description">
                  <p className="property__text">
                    {offer.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot;
                  <span
                    className="reviews__amount"
                  >{reviews.length}
                  </span>
                </h2>
                <ReviewsList reviews={reviews}/>
                {authorizationStatus === AuthorizationStatus.AUTH ? <ReviewForm offerId={offer.id}/> : ''}
              </section>
            </div>
          </div>
          <MapCities offers={nearbyOffers} city={offer.city} isNearbyMap/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <CardsList offers={nearbyOffers} isNearOffers/>
          </section>
        </div>
      </main>
    </div>);
}

Room.propTypes = {
  offer: offerProp,
};

export default Room;
