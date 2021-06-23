import PropTypes from 'prop-types';
import reviewProp from '../review/review.prop';

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  reviewsArr: PropTypes.arrayOf(reviewProp),
});
