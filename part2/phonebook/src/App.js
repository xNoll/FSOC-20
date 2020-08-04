import React, { useState} from 'react';
import Person from './components/Person';

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const name = {
      name: newName
    }
    if(persons.find(element => element.name === name.name)){
      alert(`${name.name} is already on the list`)
    } else {
      setPersons(persons.concat(name))
      setNewName('')
    }
    
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          <input
            value = {newName}
            onChange={handleNameChange} 
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
          <Person name={person.name} key={person.name} />
        )}
        </ul>
      </div>
    </div>
  )
}

export default App;
