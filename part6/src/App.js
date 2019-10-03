import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Input = ({ country, setCountry }) => {


  const handleSetCountry = (event) => {
    console.log(event.target.value)
    setCountry(event.target.value)
  }

  return (
    <div>
      find countries <input value={country} onChange={handleSetCountry} />
    </div>
  )
}


const Result = ({ country, person }) => {

  if (country !== "") {
    console.log("Yes")
    var count = 0;
    (person.map(p => (p.name.toLowerCase()).includes(country.toLowerCase()) ? count++ : null))
    if (count <= 10) {
      return (
        person.map(p => (p.name.toLowerCase()).includes(country.toLowerCase()) ? <li key={p.name}>{p.name}</li> : <div key={p.name}></div>)
      )
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
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setPerson(response.data)
      })
  }, [])

  console.log('render', person.length, person)

  return (
    <div>
      <Input country={country} setCountry={setCountry} />
      <Result country={country} person={person} />
    </div>
  )
}


export default App
