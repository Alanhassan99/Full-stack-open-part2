import { useState, useEffect } from 'react'
import guys from './guys'
import Filter from './Filter'
import Changed from './Changed'
import Wrong from './Wrong'
import Persons from './Persons'
import PersonForm from './PersonForm'

const App = () => {
  const [persons, setPersons] = useState([])


  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [message, setMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    guys.getAll().then(setPersons)

  }, [])

  const handleDelete = (event) => {
    if (window.confirm(`Delete ${event.name} ?`)) {
      guys.elDelete(event.id)
      setPersons(persons.filter(person => person.id !== event.id))
    }

  }
  const handleNewName = (event) => {
    setNewName(event.target.value)
  }
  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }
  const handleNewFilter = (event) => {
    setNewFilter(event.target.value)
  }

  const showMessage = (text) => {
    setMessage(text)

    setTimeout(() => {
      setMessage('')
    }, 5000)

  }
  const showError = (text) => {
    setErrorMessage(text)

    setTimeout(() => {
      setErrorMessage('')
    }, 5000)

  }

  const addPerson = (event) => {
    event.preventDefault()

    const findIt = persons.find(
      person => person.name === newName
    )

    const personObject = {
      name: newName,
      id: String(persons.length + 1),
      number: newNumber,
    }

    if (findIt) {
      if (
        window.confirm(
          `${newName} is already added to the phonebook, replace the old number with a new one?`
        )
      ) {
        guys
          .update(findIt.id, personObject)
          .then(updatedPerson => {
            setPersons(
              persons.map(person =>
                person.id === findIt.id
                  ? updatedPerson
                  : person
              )
            )

            showMessage(`Changed ${newName}`)
          })
          .catch(() => {
            showError(
              `Information of ${newName} has already been removed from server`
            )
          })
      }
    } else {
      guys.create(personObject).then(returned => {
        setPersons(persons.concat(returned))
        showMessage(`Added ${returned.name}`)
      })
    }

    setNewName('')
    setNewNumber('')
  }

  const namesToShow = newFilter === '' ? persons : persons.filter(person => person.name.toLowerCase().startsWith(newFilter.toLowerCase()))
  return (
    <div>
      <h2>Phonebook</h2>
      <Changed message={message} />
      <Wrong errorMessage={errorMessage} />
      <Filter handleNewFilter={handleNewFilter} newFilter={newFilter} persons={persons} />
      <h2>add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} handleNewName={handleNewName} newNumber={newNumber} handleNewNumber={handleNewNumber} />
      <h2>Numbers</h2>
      <Persons handleDelete={handleDelete} namesToShow={namesToShow} />
    </div >
  )
}

export default App