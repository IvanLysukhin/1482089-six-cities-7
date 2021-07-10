import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import ReviewList from './reviews-list';
import {mockReviews} from '../../mock/test-mocks';

describe('Component: ReviewList', () => {
  it('should render "ReviewList" correctly', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <ReviewList reviews={mockReviews}/>
      </Router>,
    );

    screen.getAllByText('Corey').forEach((name) => expect(name).toBeInTheDocument());
    screen.getAllByText('I stayed here for one night and it was an unpleasant experience.').forEach((comment) => expect(comment).toBeInTheDocument());
    screen.getAllByText('July 1').forEach((date) => expect(date).toBeInTheDocument());
    screen.getAllByText('4').forEach((date) => expect(date).toBeInTheDocument());
  });
});
