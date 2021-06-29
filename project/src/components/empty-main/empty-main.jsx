import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getCurrentCity} from '../../store/change-offers/selectors';

function EmptyMain({currentCity}) {
  return (
    <div className="cities">
      <div className="cities__places-container  cities__places-container--empty container">
        <section className="cities__no-places">
          <div className="cities__status-wrapper tabs__content">
            <b className="cities__status">No places to stay available</b>
            <p className="cities__status-description">We could not find any property available at the moment in {currentCity}</p>
          </div>
        </section>
        <div className="cities__right-section">
        </div>
      </div>
    </div>
  );
}

EmptyMain.propTypes = {
  currentCity: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  currentCity: getCurrentCity(state),
});

export {EmptyMain};
export default connect(mapStateToProps, null)(EmptyMain);
