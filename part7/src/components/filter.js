import React from 'react'

const Button=({deletePerson, p})=>{
    return(
        <div>
            <button key={p.id} onClick={e=>deletePerson(p.id)}>delete</button>
        </div>
    )
}

const Filter = ({ persons, newSearch, deletePerson }) => {
    if (newSearch !== "") {
        return (
            <div>
                {persons.map(p => newSearch.toLowerCase() === p.name.toLowerCase() ? <li className='note' key={p.id}>{p.name} {p.number}</li> : <div key={p.name}>  </div>)}
            </div>
        )
    } else {
        
        return (
            <div>
                {persons.map(p => <li className='note' key={p.id}> {p.name} {p.number} <Button deletePerson={deletePerson} p={p}/></li>)}
            </div>
        )
    }
}

export default Filter