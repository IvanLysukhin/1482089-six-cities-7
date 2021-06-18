import React from 'react';
import {City} from '../../constants';
import LocationCity from '../location-city/location-city';

function Locations (props) {
const {city, changeCity} = props;
const cities = Object.values(City);
  console.log(cities);
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list" onClick={(evt)=>{
        if (evt.target.tagName === 'SPAN' || evt.target.tagName === 'A') {
          evt.preventDefault();
          changeCity(evt.target.textContent)
        }
      }}>
        {cities.map((cityName) => <LocationCity cityName={cityName} currentCity={city} key={cityName}/>)}
      </ul>
    </section>
  )
}

export default Locations;
