import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import EmptyMain from './empty-main';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();

describe('Component: EmptyMain', () => {

  it('should render "EmptyMain" correctly', () => {
    const history = createMemoryHistory();
    const city = 'Paris';

    render(
      <Provider store={mockStore({
        CHANGE: {city},
      })}
      >
        <Router history={history}>
          <EmptyMain/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText('No places to stay available')).toBeInTheDocument();
    expect(screen.getByText(`We could not find any property available at the moment in ${city}`)).toBeInTheDocument();
  });
});
