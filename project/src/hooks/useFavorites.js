import {AppRoute, AuthorizationStatus} from '../constants';
import browserHistory from '../browser-history';
import {addToFavorites} from '../store/api-action';

function useFavorites(authorizationStatus, offer, dispatch) {
  return () => {
    if (authorizationStatus !== AuthorizationStatus.AUTH) {
      browserHistory.push(AppRoute.LOGIN);
      return;
    }

    if (offer.isFavorite) {
      dispatch(addToFavorites(offer.id, 0));
      return;
    }

    dispatch(addToFavorites(offer.id, 1));
  }
}

export default useFavorites;
