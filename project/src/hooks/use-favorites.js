import {AppRoute, AuthorizationStatus} from '../constants';
import {addToFavorites} from '../store/api-action';

function useFavorites(authorizationStatus, offer, dispatch, history) {
  return () => {
    if (authorizationStatus !== AuthorizationStatus.AUTH) {
      history.push(AppRoute.LOGIN);
      return;
    }

    if (offer.isFavorite) {
      dispatch(addToFavorites(offer.id, 0));
      return;
    }

    dispatch(addToFavorites(offer.id, 1));
  };
}

export default useFavorites;
