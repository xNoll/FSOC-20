import React from 'react';
import Weather from './Weather';

const Country = ({country}) => {

    const languageList = country.languages.map((language) => {
        return(
            <li key={language.iso639_2}>
                {language.name}
            </li>
        )
    })

    return (
        <div>
            <h1>
                {country.name} 
            </h1>
            <div>
                <span>
                    Capital: {country.capital}
                </span>
            </div>
            <div>
                <span>
                    Population: {country.population}
                </span>
            </div>
            <br/>
            <div>
                <span>
                    Languages: 
                    <ul>
                        {languageList}  
                    </ul>
                </span> 
            </div>
            <br/>
            <div>
                <img alt={"Country Flag"} width={"200px"} src={country.flag}></img>
            </div>
            <div>
                <Weather query={country.capital + ","+ country.name} />    
            </div>   
        </div>
    )
}

export default Country;
