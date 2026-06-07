import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      id: 1,
      number: '076233',
    },
    {
      name: 'Barti Hallas',
      id: 2,
      number: '123525',
    },
    {
      name: 'Carter Dellas',
      id: 3,
      number: '276233',
    },
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const namesToShow = newFilter === '' ? persons : persons.filter(person => person.name.toLowerCase().startsWith(newFilter))

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }
  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }
  const handleNewFilter = (event) => {
    setNewFilter(event.target.value)

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
      number: newNumber,
    }

    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')

  }



  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter shown with <input onChange={handleNewFilter} value={newFilter} ></input></div>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNewNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        namesToShow.map(person =>
          <p key={person.id}>{person.name} {person.number}</p>
        )
      }
    </div >
  )
}

export default App