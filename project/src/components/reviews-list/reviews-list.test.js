import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import ReviewList from './reviews-list';

describe('Component: ReviewList', () => {
  it('should render "ReviewList" correctly', () => {
    const history = createMemoryHistory();
    const fakeReview = {
      id: 1,
      user: {
        id: 14,
        isPro: true,
        name: 'Corey',
        avatarUrl: 'https://7.react.pages.academy/static/avatar/5.jpg',
      },
      rating: 4,
      comment: 'I stayed here for one night and it was an unpleasant experience.',
      date: '2021-07-01T13:04:25.833Z',
    };
    const reviewCount = 5;
    const fakeReviews = new Array(reviewCount).fill('').map((review, i) => {
      return {
        ...fakeReview,
        id: i,
      };
    })

    render(
      <Router history={history}>
        <ReviewList reviews={fakeReviews}/>
      </Router>
    );
    
    screen.getAllByText('Corey').forEach((name) => expect(name).toBeInTheDocument());
    screen.getAllByText('I stayed here for one night and it was an unpleasant experience.').forEach((comment) => expect(comment).toBeInTheDocument());
    screen.getAllByText('July 1').forEach((date) => expect(date).toBeInTheDocument());
    screen.getAllByText('4').forEach((date) => expect(date).toBeInTheDocument());
  });
});
