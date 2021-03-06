import React, {
  useState,
  useRef,
  useEffect,
  useCallback
} from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import {changeSortType} from '../../store/action';
import {
  getCurrentCity,
  getCurrentSortType
} from '../../store/offers-data/selectors';

function Sorting() {

  const dispatch = useDispatch();

  const sortType = useSelector(getCurrentSortType);
  const city = useSelector(getCurrentCity);

  const [view, setView] = useState(false);
  const activeSort = useRef(null);


  const onSortingClickHandler = useCallback(({target}) => {
    if (target.tagName === 'SPAN') {
      setView(true);
    }
  }, []);

  const onSortTypeChangeHandler = ({target}) => {
    if (target.tagName === 'LI') {
      dispatch(changeSortType(target.textContent));
      setView(false);
    }
  };


  useEffect(() => {
    [...activeSort.current.children].forEach((child) => {
      if (sortType === child.textContent) {
        child.classList.add('places__option--active');
      } else {
        child.classList.remove('places__option--active');
      }
    });
    setView(false);
  }, [city, sortType]);

  return (
    <form
      className="places__sorting"
      action="#"
      method="get"
      onClick={onSortingClickHandler}
    >
      <span
        className="places__sorting-caption"
      >
        Sort by
      </span>
      <span className="places__sorting-type" tabIndex="0">
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select">

          </use>
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${view ? 'places__options--opened' : 'places__options--closed'}`}
        ref={activeSort}
        onClick={onSortTypeChangeHandler}
      >
        <li className="places__option" tabIndex="0">Popular</li>
        <li className="places__option" tabIndex="0">Price: low to high</li>
        <li className="places__option" tabIndex="0">Price: high to low</li>
        <li className="places__option" tabIndex="0">Top rated first</li>
      </ul>
    </form>
  );
}

export default Sorting;
