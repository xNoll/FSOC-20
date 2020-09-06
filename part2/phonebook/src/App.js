import React, { useState} from 'react';
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';

const App = () => {
  const [ persons, setPersons ] = useState([
    { id:'Arto Hellas', name: 'Arto Hellas', phone: '040-123456' },
    { id:'Ada Lovelace',name: 'Ada Lovelace', phone: '39-44-5323523' },
    { id:'Dan Abramov', name: 'Dan Abramov', phone: '12-43-234345' },
    { id:'Mary Poppendieck', name: 'Mary Poppendieck', phone: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ searchName, setSearchName ] = useState('')

  //Add a single person
  const addPerson = (event) => {
    event.preventDefault()
    const person = {
      name: newName,
      phone: newPhone
    }

    if(persons.find(element => element.name === person.name)){
      alert(`${person.name} is already on the list`)
    } else {
      setPersons(persons.concat(person))
      setNewName('')
      setNewPhone('')
    }
  }

  //Handles the events
  const handleChange = (event, type) => {
    switch(type) {
      case "name":
        setNewName(event.target.value)
        break;
      case "phone":
        setNewPhone(event.target.value)
        break;
      default:
        break;
    }
  }

  //Deletes a person from the phonebook
  const deletePerson = (id, person) => {
    
  }

  //Main App
  return (
    <div>
      <h1>Phonebook</h1>
      <Filter
        searchName={searchName} setSearchName={setSearchName}
      />
      <PersonForm
        nameValue={newName}
        phoneValue={newPhone}
        addPerson={(event) => addPerson(event)}
        handleNameChange={(event) => handleChange(event, "name")}
        handlePhoneChange={(event) => handleChange(event, "phone")}
      />
      <Persons 
        persons={persons}
        searchName={searchName}
        deletePerson={deletePerson}
      />
    </div>
  )
}

export default App;
