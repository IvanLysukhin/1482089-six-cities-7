import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Review from './review';
import {mockReview} from '../../mock/test-mocks';

describe('Component: Review', () => {
  it('should render "Review" correctly', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <Review review={mockReview}/>
      </Router>,
    );


    expect(screen.getByText('Corey')).toBeInTheDocument();
    expect(screen.getByText('I stayed here for one night and it was an unpleasant experience.')).toBeInTheDocument();
    expect(screen.getByText('July 1')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
  });
});
