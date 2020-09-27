import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Countries from './components/Countries';
import Filter from './components/Filter';


function App() {
  const [countries, setCountries] = useState([])
  const [searchCountry, setSearchCountry] = useState('')

  const getCountries = () => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        setCountries(response.data);
    });
  };

  useEffect(getCountries, [])
  
  const filteredCountries = countries.filter((country) =>{
    return country.name.toLowerCase().includes(searchCountry.toLowerCase());
  })

  const handleChange = (event) => {
    setSearchCountry(event.target.value);
  };

  const handleClick = (event) => {
    setSearchCountry(event.target.id)
  }


  return (
    <div>
      <h1>Country Info</h1>
      <Filter
        searchCountry={searchCountry}
        onChange={(event) => {handleChange(event)}}
      />
      <Countries
        countries={filteredCountries}
        handleClick={(event) => handleClick(event)}
      />
    </div>
  );
}

export default App;
