import React, { useState} from 'react';
import Person from './components/Person';

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', phone: '0000000' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')

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

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          Name: <input
            value = {newName}
            onChange = {(event) => (setNewName(event.target.value))} 
          />
        </div>
        <div>
          Phone: <input
            value = {newPhone}
            onChange = {(event) => (setNewPhone(event.target.value))}
          />  
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        <ul>
        {persons.map(person => 
          <Person name={person.name} phone={person.phone} key={person.name} />
        )}
        </ul>
      </div>
    </div>
  )
}

export default App;
