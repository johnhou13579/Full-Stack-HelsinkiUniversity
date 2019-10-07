import React from 'react'



const Filter = ({ persons, newSearch, deletePerson }) => {
    if (newSearch !== "") {
        console.log(persons)
        console.log(newSearch)
        return (
            <div>
                {persons.map(p => newSearch.name.toLowerCase() === p.name.toLowerCase() ? <li key={p.id}>{p.name} {p.number}</li> : <div key={p.name}>  </div>)}
            </div>
        )
    } else {
        
        return (
            <div>
                {persons.map(p => <li key={p.id}>{p.name} {p.number} <button onClick={e=>deletePerson(p.id)}>delete</button></li>)}
            </div>
        )
    }
}

export default Filter