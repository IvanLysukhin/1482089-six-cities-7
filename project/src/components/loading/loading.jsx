import React from 'react';

function Loading() {
  return (
    <div className="cities">
      <div className="cities__places-container  cities__places-container--empty container">
        <section className="cities__no-places">
          <p className="cities__status">Loading...</p>
        </section>
      </div>
    </div>
  );
}

export default Loading;
