import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import CardsList from './cards-list';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus} from '../../constants';
import {mockOffers, offersNumber} from '../../mock/test-mocks';

const mockStore = configureStore();

describe('Component: CardsList', () => {
  const history = createMemoryHistory();
  const store = mockStore({
    AUTH: {authorizationStatus: AuthorizationStatus.AUTH},
  });

  it('should render correct number of cards', () => {
    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <CardsList offers={mockOffers}/>
        </Router>
      </Provider>,
    );

    expect(container.querySelectorAll('.place-card').length).toBe(offersNumber);
  });
});
