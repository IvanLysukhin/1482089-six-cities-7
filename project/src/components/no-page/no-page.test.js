import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import NoPage from './no-page';

describe('Component: NoPage', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const {getByText} = render(
      <Router history={history}>
        <NoPage />
      </Router>,
    );
    const errorMessage = getByText('404. Page Not Found');
    const returnToMainButton = getByText('Return to main');

    expect(errorMessage).toBeInTheDocument();
    expect(returnToMainButton).toBeInTheDocument();
  });
});
