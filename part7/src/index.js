import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Filter from './components/filter'
import Form from './components/form'
import Search from './components/search'
import noteService from './services/notes'

const App = () => {


    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNum, setNewNum] = useState('')
    const [newSearch, setNewSearch] = useState('')
    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }
    const handleNumChange = (event) => {
        setNewNum(event.target.value)
    }
    const handleSearch = (event) => {
        setNewSearch(event.target.value)
    }

    const addNote = (event) => {
        event.preventDefault()
        if (!(persons.map(p => p.name).includes(newName))) {
            const personObject = {
                name: newName,
                number: newNum
            }

            noteService.create(personObject)
                .then(response => {
                    setPersons(persons.concat(personObject))
                    setNewName('')
                    setNewNum('')
                })


        }
        else {
            alert(`${newName} is already added to phonebook`)
        }
        setNewName('')
        setNewSearch('')
    }

    useEffect(() => {
        noteService.getAll().then(
            response => {
                setPersons(response.data)
            })
    }, [])

  

    return (

        <div>
            <h2>Phonebook</h2>

            <Search newSearch={newSearch} handleSearch={handleSearch} />

            <h3>Add a New</h3>

            <Form setNewName={setNewName} setNewNum={setNewNum} addNote={addNote} newName={newName} newNum={newNum} handleNameChange={handleNameChange} handleNumChange={handleNumChange} />

            <h2>Numbers</h2>

            <Filter persons={persons} newSearch={newSearch}/>


        </div>
    )
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)

