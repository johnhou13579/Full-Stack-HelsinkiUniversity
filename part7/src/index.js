import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Filter from './components/filter'
import Form from './components/form'
import Search from './components/search'
import noteService from './services/notes'
import './index.css'

const App = () => {


    const [persons, setPersons] = useState([{}])
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

            const changedPerson = persons.find(n => n.name === newName)
            const personId = changedPerson.id
            const updatePerson = { ...changedPerson, number: `${newNum}` }

            if (window.confirm(`${newName} is already added to phonebook, replace the older number with a new one?`)) {
                noteService.update(personId, updatePerson).then(response => {
                    setPersons(persons.map(p => p.id !== personId ? p : response.data))
                })
            }
        }
        setNewName('')
        setNewNum('')
        setNewSearch('')
    }

    useEffect(() => {
        noteService.getAll().then(
            response => {
                setPersons(response.data)
            })
    }, [])

    const deletePerson = (id) => {
        const result = window.confirm("Confirm?")
        if (result) {
            noteService.remove(id).then(
                response => {
                    setPersons(persons.filter(p => p.id !== id))
                }
            )
        }
    }

    return (

        <div>
            <h2>Phonebook</h2>

            <Search newSearch={newSearch} handleSearch={handleSearch} />

            <h3>Add a New</h3>

            <Form setNewName={setNewName} setNewNum={setNewNum} addNote={addNote} newName={newName} newNum={newNum} handleNameChange={handleNameChange} handleNumChange={handleNumChange} />

            <h2>Numbers</h2>

            <Filter persons={persons} newSearch={newSearch} deletePerson={deletePerson} />


        </div>
    )
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)

