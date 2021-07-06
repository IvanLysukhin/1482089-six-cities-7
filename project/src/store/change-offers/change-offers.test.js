import {
  changeOffers,
  initialState
} from './change-offers';
import {changeCity, changeSortType, showOffer} from '../action';
import {SortType} from '../../constants';

describe('Reducer: Change offers', () => {
  it('without parameters returns initial state', () => {
    expect(changeOffers(undefined, {})).toEqual(initialState);
  });

  it('should change city by a given city and refresh sort type for initial state', () => {
    const chosenCity = 'Cologne';

    expect(changeOffers(initialState, changeCity(chosenCity)))
      .toEqual({
        ...initialState,
        city: chosenCity,
      });

    expect(changeOffers({
      ...initialState,
      sortType: SortType.TOP_RATED,
    },
    changeCity(chosenCity),
    ),
    )
      .toEqual({
        ...initialState,
        city: chosenCity,
      });
  });

  it('should change offer ID by hovered card ID', () => {
    const hoveredCardId = 1;

    expect(changeOffers(initialState, showOffer(0))).toEqual(initialState);

    expect(changeOffers(initialState, showOffer(hoveredCardId)))
      .toEqual({
        ...initialState,
        hoveredCardId,
      });
  });

  it('should change sort typ by given sort type', () => {
    expect(changeOffers(initialState, changeSortType(SortType.TOP_RATED)))
      .toEqual({
        ...initialState,
        sortType: SortType.TOP_RATED,
      });
  });
});
