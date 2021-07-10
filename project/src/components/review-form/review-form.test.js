import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import ReviewForm from './review-form';
import userEvent from '@testing-library/user-event';
import {RequestStatus} from '../../constants';

const mockStore = configureStore();

let history;
let store;

describe('Component: ReviewForm', () => {

  beforeEach(() => {
    history = createMemoryHistory();
    store = mockStore({
      LOAD: {isReviewSendSuccessful: RequestStatus.SUCCESS},
    });
  });

  it('should render "ReviewForm" correctly', () => {

    render(
      <Provider store={store}>
        <Router history={history}>
          <ReviewForm offerId={1}/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/To submit review please make sure to set/i)).toBeInTheDocument();

    const [fiveStars, fourStars, threeStars, twoStars, oneStar] = screen.getAllByRole('radio');

    expect(oneStar).not.toBeChecked();
    expect(twoStars).not.toBeChecked();
    expect(threeStars).not.toBeChecked();
    expect(fourStars).not.toBeChecked();
    expect(fiveStars).not.toBeChecked();

    userEvent.click(fiveStars);
    expect(fiveStars).toBeChecked();
    expect(oneStar).not.toBeChecked();
    expect(twoStars).not.toBeChecked();
    expect(threeStars).not.toBeChecked();
    expect(fourStars).not.toBeChecked();

    userEvent.click(fourStars);
    expect(fourStars).toBeChecked();
    expect(oneStar).not.toBeChecked();
    expect(twoStars).not.toBeChecked();
    expect(threeStars).not.toBeChecked();
    expect(fiveStars).not.toBeChecked();

    userEvent.click(threeStars);
    expect(threeStars).toBeChecked();
    expect(oneStar).not.toBeChecked();
    expect(twoStars).not.toBeChecked();
    expect(fourStars).not.toBeChecked();
    expect(fiveStars).not.toBeChecked();

    userEvent.click(twoStars);
    expect(twoStars).toBeChecked();
    expect(oneStar).not.toBeChecked();
    expect(threeStars).not.toBeChecked();
    expect(fourStars).not.toBeChecked();
    expect(fiveStars).not.toBeChecked();

    userEvent.click(oneStar);
    expect(oneStar).toBeChecked();
    expect(twoStars).not.toBeChecked();
    expect(threeStars).not.toBeChecked();
    expect(fourStars).not.toBeChecked();
    expect(fiveStars).not.toBeChecked();

    userEvent.type(screen.getByTestId('comment'), 'Test comment');
    expect(screen.getByDisplayValue('Test comment')).toBeInTheDocument();
  });
});
