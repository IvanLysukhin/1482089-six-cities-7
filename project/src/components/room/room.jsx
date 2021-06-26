import React from 'react';
import {connect} from 'react-redux';
import LogoLink from '../logo-link/logo-link';
import ReviewsList from '../reviews-list/reviews-list';
import GalleryImage from '../gallery-image/gallery-image';
import {calcRatingInPercent} from '../../utils';
import GoodsItem from '../goods-item/goods-item';
import HostUser from '../host-user/host-user';
import PropTypes from 'prop-types';
import reviewProp from '../review/review.prop';
import offerProp from '../place-card/place-card.prop';
import ReviewForm from '../review-form/review-form';
import {AuthorizationStatus} from '../../constants';
import CardsList from '../cards-list/cards-list';
import SignIn from '../sign-in/sign-in';
import SignOut from '../sign-out/sign-out';
import MapCities from '../map-cities/map-cities';
import {fetchOfferOptions} from '../../store/api-action';

function Room(props) {
  const {offer, reviews, authorizationStatus, nearbyOffers} = props;

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
                <button className={`property__bookmark-button ${offer.isFavorite && 'property__bookmark-button--active'} button`} type="button">
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
                  {offer.goods.map((goodsItem) => <GoodsItem goodsItem = {goodsItem} key={goodsItem}/>)}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <HostUser hostUser = {offer.host}/>
                <div className="property__description">
                  <p className="property__text">
                    {offer.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ReviewsList reviews = {reviews}/>
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
  reviews: PropTypes.arrayOf(reviewProp),
  authorizationStatus: PropTypes.string,
  nearbyOffers: PropTypes.arrayOf(offerProp),
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  reviews: state.offerReviews,
  nearbyOffers: state.nearbyOffers,
});

const mapDispatchToProps = (dispatch) => ({
  loadOfferOptions(offerId) {
    dispatch(fetchOfferOptions(offerId));
  },
});

export {Room};
export default connect(mapStateToProps, mapDispatchToProps)(Room);
