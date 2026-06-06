import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      id: 1,
    }
  ])
  const [newName, setNewName] = useState('')
  const handleNewName = (event) => {
    setNewName(event.target.value)
  }
  const addPerson = (event) => {
    event.preventDefault()

    const findIt = persons.find(person => person.name === newName
    )
    if (findIt) {
      return (
        alert(`${newName} is already added to phonebook`)
      )
    }
    const personObject = {
      name: newName,
      id: String(persons.length + 1),
    }

    setPersons(persons.concat(personObject))
    setNewName('')

  }




  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons.map(person =>
          <p key={person.id}>{person.name}</p>
        )
      }
    </div >
  )
}

export default App