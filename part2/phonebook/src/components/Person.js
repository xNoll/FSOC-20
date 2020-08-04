import React from 'react';

const Person = (prop) =>{

    return (
        <div>
          <p>
              {prop.name}: {prop.phone}
          </p>
        </div>
      );
}

export default Person;
