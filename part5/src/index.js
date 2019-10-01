import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Filter from './components/filter'
import Form from './components/form'
import Search from './components/search'

const App = () => {
    const [persons, setPersons] = useState([
        {
            name: 'First Arto Hellas',
            number: '909-123-1234'
        }
    ])
    const [newName, setNewName] = useState('')
    const [newNum, setNewNum] = useState('')
    const [newSearch, setNewSearch] = useState('')
    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }
    const handleNumChange = (event) => {
        console.log(event.target.value)
        setNewNum(event.target.value)
    }
    const handleSearch = (event) => {
        console.log(event.target.value)
        setNewSearch(event.target.value)
    }
    const addNote = (event) => {
        event.preventDefault()
        if (!(persons.map(p => p.name).includes(newName))) {
            const personObject = {
                name: newName,
                number: newNum
            }
            setPersons(persons.concat(personObject))
        }
        else {
            alert(`${newName} is already added to phonebook`)
        }
        setNewName('')
        setNewSearch('')
    }


    return (

        <div>
            <h2>Phonebook</h2>

            <Search newSearch={newSearch} handleSearch={handleSearch} />

            <h3>Add a New</h3>

            <Form setNewName={setNewName} setNewNum={setNewNum} addNote={addNote} newName={newName} newNum={newNum} handleNameChange={handleNameChange} handleNumChange={handleNumChange} />
            
            <h2>Numbers</h2>

            
            <Filter persons={persons} newSearch={newSearch} />
        </div>
    )
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)

