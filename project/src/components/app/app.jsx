import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main';

function App(props) {
  const {cardCount} = props;
  return <Main cardCount = {cardCount}/>;
}

App.propTypes = {
  cardCount: PropTypes.number.isRequired,
};

export default App;
