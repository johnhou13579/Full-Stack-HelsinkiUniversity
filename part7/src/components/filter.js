import React from 'react'

const singleShow = (props) => {
    console.log(props.target.value)
    return (
        <div>
        </div>
    )
}

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
                {persons.map(p => <li key={p.id}>{p.name} {p.number} <button onClick={singleShow} value={p.name} newsearch={newSearch} persons={persons}>delete</button></li>)}
            </div>
        )
    }
}

export default Filter