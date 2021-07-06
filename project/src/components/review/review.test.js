import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Review from './review';

describe('Component: Review', () => {
  it('should render "Review" correctly', () => {
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
    render(
      <Router history={history}>
        <Review review={fakeReview}/>
      </Router>,
    );


    expect(screen.getByText('Corey')).toBeInTheDocument();
    expect(screen.getByText('I stayed here for one night and it was an unpleasant experience.')).toBeInTheDocument();
    expect(screen.getByText('July 1')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
  });
});
