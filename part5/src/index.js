import React, { useState } from 'react'
import ReactDOM from 'react-dom'

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

    const Filter = () => {
        if (newSearch !== "") {
            console.log("Yes")
            return (
                <div>
                    {persons.map(p => newSearch === p.name ? <li key={p.name}>{p.name} {p.number}</li> : <div key={p.name}></div>)}
                </div>
            )
        } else {
            return (
                <div>
                    {persons.map(p => <li key={p.name}>{p.name} {p.number}</li>)}
                </div>
            )
        }
    }

    return (

        <div>
            <h2>Phonebook</h2>
            <div>
                filter shown with <input value={newSearch} onChange={handleSearch} />
            </div>
            <h2>Add a New</h2>
            <form onSubmit={addNote}>
                <div>
                    <div>name: <input value={newName} onChange={handleNameChange} /></div>
                    <div>number: <input value={newNum} onChange={handleNumChange} /></div>
                    <button type="submit" >add</button> </div>
            </form>
            <h2>Numbers</h2>
            {<Filter />}
        </div>
    )
}



ReactDOM.render(
    <App />,
    document.getElementById('root')
)

