import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import SignOut from './sign-out';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();

describe('Component: SignOut', () => {

  it('should render "SignOut" correctly', () => {
    const history = createMemoryHistory();


    render(
      <Provider store={mockStore({
        AUTH:{accountEmail: 'example@example.com'},
      })}>
        <Router history={history}>
          <SignOut/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText('example@example.com')).toBeInTheDocument();
    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
  });
});
