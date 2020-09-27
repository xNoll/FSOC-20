import React from 'react';
import Country from './Country';

const Countries = ({countries, handleClick}) => {
    const tooManyCountries = countries.length >= 10
    const lessThanTenCountries = countries.length >= 2 && countries.length <= 9;
    const oneCountry = countries.length === 1;

    const countriesList = countries.map((country) => {
        return (
          <div key={country.alpha3Code}>
            {country.name}
            <button onClick={handleClick} id={country.name}>
              Show
            </button>
          </div>
        );
      });

    return (
        <div>
            {tooManyCountries && <p>Be more precise with your search, please</p>}
            {lessThanTenCountries && <div>{countriesList}</div>}
            {oneCountry && <Country country={countries[0]} />} 
        </div>
    )
  }


export default Countries;
