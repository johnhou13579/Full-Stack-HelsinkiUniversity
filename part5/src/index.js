import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'First Arto Hellas',
          number : '909-123-1234'
    }
    ])
    const [newName, setNewName] = useState('')

    const[newNum, setNewNum] = useState('')

    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)

    }

    const handleNumChange = (event) =>{
        console.log(event.target.value)
        setNewNum(event.target.value)
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
                name: newName,
                number: newNum
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
                    <div>name: <input value={newName} onChange={handleNameChange} /></div>
                    <div>number: <input value={newNum} onChange={handleNumChange}/></div>
                    <button type="submit" onClick={notification}>add</button> </div>
            </form>
            <h2>Numbers</h2>
            {persons.map(p => <li key={p.name}>{p.name} {p.number}</li>)}
        </div>
    )
}



ReactDOM.render(
    <App />,
    document.getElementById('root')
)

