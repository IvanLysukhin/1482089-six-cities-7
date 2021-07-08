import React from 'react';
import {Router, Route} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import LogoLink from './logo-link';
import userEvent from '@testing-library/user-event';
import {createMemoryHistory} from "history";

describe('Component: LogoLink', () => {
  const history = createMemoryHistory();
  it('should render "LogoLink" correctly and redirect to Main', () => {
    history.push('/logolink');
    render(
      <Router history={history}>
        <Route exact path="/logolink">
          <LogoLink/>
        </Route>
        <Route exact path="/">
          <h1>Main screen</h1>
        </Route>
      </Router>
    );

    userEvent.click(screen.getByTestId('logo'));
    expect(screen.getByText('Main screen')).toBeInTheDocument();
  });
});
