import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'First Arto Hellas' }
    ])
    const [newName, setNewName] = useState('')

    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)

    }

    const notification = (props) => {
        return (
            <div>
                alert()
        </div>
        )
    }


    const addNote = (event) => {
        event.preventDefault()
        if (!(persons.map(p => p.name).includes(newName))) {
            const personObject = {
                name: newName
            }
            setPersons(persons.concat(personObject))
        }
        else {
            alert(`${newName} is already added to phonebook`)
        }

        setNewName('')

    }

    return (

        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addNote}>
                <div>
                    name: <input value={newName} onChange={handleNameChange} />
                    <button type="submit" onClick={notification}>add</button> </div>
            </form>
            <h2>Numbers</h2>
            {persons.map(p => <li key={p.name}>{p.name}</li>)}
        </div>
    )
}



ReactDOM.render(
    <App />,
    document.getElementById('root')
)

