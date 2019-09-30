import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'First Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNameChange=(event)=>{
    console.log(event.target.value)
    setNewName(event.target.value)

    
}



const addNote=(event)=>{
    event.preventDefault()
    const personObject={
        name: newName
    }
    setPersons(persons.concat(personObject))
    setNewName('')
}

  return (
      
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNote}>
          <div>
          name: <input value={newName} onChange={handleNameChange}/>
          <button type="submit">add</button> </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(p=><li key={p.name}>{p.name}</li>)}
    </div>
  )
}



ReactDOM.render(
    <App/>,
    document.getElementById('root')
  )

