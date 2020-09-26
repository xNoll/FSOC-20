import React from 'react';


const Persons = ({persons, searchName, deletePerson}) => {

  return (
    persons.length ?
    <ul>
        {
            persons.filter(person => person.name.toLowerCase().includes(searchName.toLowerCase()))
            .map(person => (
                <li key={person.name}>
                    {person.name}: {person.number} &nbsp;
                    <button onClick={() => deletePerson(person.id, person.name)}>Delete</button>
                </li>
            ))
        }
    </ul>
    :
    <p>No contacts found</p>
);
}

export default Persons;
