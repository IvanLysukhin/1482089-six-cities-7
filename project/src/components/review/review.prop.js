import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  reviewsArr: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string,
      rating: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ),
}).isRequired;
