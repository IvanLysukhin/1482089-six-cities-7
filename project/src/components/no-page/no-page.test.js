import React from 'react';
import {render, screen} from '@testing-library/react';
import {Route, Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import NoPage from './no-page';
import userEvent from '@testing-library/user-event';

describe('Component: NoPage', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    history.push('/incorrect');
    const {getByText} = render(
      <Router history={history}>
        <Route exact path="/incorrect">
          <NoPage/>
        </Route>
        <Route exact path="/">
          <h1>Main page</h1>
        </Route>
      </Router>,
    );
    const errorMessage = getByText('404. Page Not Found');
    const returnToMainButton = getByText('Return to main');

    expect(errorMessage).toBeInTheDocument();
    expect(returnToMainButton).toBeInTheDocument();

    userEvent.click(screen.getByText('Return to main'));
    expect(screen.getByText(/Main page/i)).toBeInTheDocument();
  });
});
