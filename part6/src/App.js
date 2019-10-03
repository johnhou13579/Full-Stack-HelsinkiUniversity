import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Input = ({ country, setCountry }) => {


  const handleSetCountry = (event) => {
    setCountry(event.target.value)
  }

  return (
    <div>
      find countries <input value={country} onChange={handleSetCountry} />
    </div>
  )
}

const Languages = ({ person }) => {
  return (
    <div>
      {person.map(p => <li key={p.name}> {p.name} </li>)}
    </div>
  )
}

const Result = ({ country, person }) => {

  if (country !== "") {
    var count = 0;
    (person.map(p => (p.name.toLowerCase()).includes(country.toLowerCase()) ? count++ : null))
    if (count <= 10) {
      if (count === 1) {
        return (
          person.map(p => (p.name.toLowerCase()).includes(country.toLowerCase()) ?
            <div key={p.name}>
              <h1>{p.name}</h1>
              <div>capital: {p.capital} </div>
              <div>population: {p.population} </div>
              <h2> Languages </h2>
              <div> <Languages person={p.languages} />  </div>
              <div><img src={p.flag} height="60" alt="" /> </div>
            </div>
            : <div key={p.name}></div>)
        )
      } else {
        return (
          person.map(p => (p.name.toLowerCase()).includes(country.toLowerCase()) ? <li key={p.name}>{p.name}</li> : <div key={p.name}></div>)
        )
      }

    } else {
      return (
        <div>
          search is too broad.
            </div>
      )
    }

  } else {
    return (
      <div>
        Enter search term
            </div>
    )
  }
}

const App = () => {
  const [person, setPerson] = useState([]);
  const [country, setCountry] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setPerson(response.data)
      })
  }, [])


  return (
    <div>
      <Input country={country} setCountry={setCountry} />
      <Result country={country} person={person} />
    </div>
  )
}


export default App
