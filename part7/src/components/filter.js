import React from 'react'

const Filter = ({ persons, newSearch }) => {
    if (newSearch !== "") {
        return (
            <div>
                {persons.map(p => newSearch.toLowerCase() === p.name.toLowerCase() ? <li key={p.id}>{p.name} {p.number}</li> : <div key={p.name}>  </div>)}
            </div>
        )
    } else {
        return (
            <div>
                {persons.map(p => <li key={p.id}>{p.name} {p.number} <button key={p.name}>Label</button></li>)}
            </div>
        )
    }
}

export default Filter