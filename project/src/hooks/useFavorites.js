import {AppRoute, AuthorizationStatus} from '../constants';
import {addToFavorites} from '../store/api-action';
import {useHistory} from 'react-router-dom';

function useFavorites(authorizationStatus, offer, dispatch) {
  const history = useHistory();
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
