import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import Login from './login';

const mockStore = configureStore({});

describe('Component: Login', () => {
  it('should render "Login" when user navigate to "login" url', () => {
    const history = createMemoryHistory();
    history.push('/login');

    render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <Login />
        </Router>
      </Provider>,
    );
    screen.getAllByText(/Sign in/i).forEach((elem) => expect(elem).toBeInTheDocument());
    expect(screen.getByText(/E-mail/i)).toBeInTheDocument();

    userEvent.type(screen.getByTestId('email'), 'example@example.com');
    userEvent.type(screen.getByTestId('password'), '123456');

    expect(screen.getByDisplayValue('example@example.com')).toBeInTheDocument();
    expect(screen.getByDisplayValue('123456')).toBeInTheDocument();
  });
});
