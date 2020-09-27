import React from 'react';

const Filter = (props) => {
    return (
        <div>
            Search for country: {' '}
            <input 
                value={props.searchCountry} 
                onChange={props.onChange}
            />
        </div>
    );
}

export default Filter;
