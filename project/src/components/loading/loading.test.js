import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Loading from './loading';

describe('Component: Loading', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const {getByText} = render(
      <Router history={history}>
        <Loading />
      </Router>,
    );
    const text = getByText('Loading...');

    expect(text).toBeInTheDocument();
  });
});
