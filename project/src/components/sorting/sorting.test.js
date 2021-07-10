import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import Sorting from './sorting';

const mockStore = configureStore();

let history;
let store;

const defaultStore = {
  CHANGE: {
    city: 'Paris',
    sortType: 'Popular',
  },
};

describe('Component: Sorting', () => {
  beforeEach(() => {
    history = createMemoryHistory();
    store = mockStore(defaultStore);
  });

  it('should render "Sorting" correctly', () => {

    render(
      <Provider store={store}>
        <Router history={history}>
          <Sorting/>
        </Router>
      </Provider>,
    );

    const [sortTypeInlist,currentSortType] = screen.getAllByText('Popular');

    expect(screen.getByText('Sort by')).toBeInTheDocument();
    expect(currentSortType).toBeInTheDocument();
    expect(sortTypeInlist).toBeInTheDocument();
    expect(screen.getByText('Price: low to high')).toBeInTheDocument();
    expect(screen.getByText('Price: high to low')).toBeInTheDocument();
    expect(screen.getByText('Top rated first')).toBeInTheDocument();
  });
});
