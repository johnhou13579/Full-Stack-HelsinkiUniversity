import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Input=({country, setCountry})=>{
  

  const handleSetCountry=(event)=>{
        console.log(event.target.value)
        setCountry(event.target.value)
  }

  return(
    <div>
      find countries <input value={country} onChange={handleSetCountry}/>
    </div>
  )
}


const Result=({country, person})=>{

if (country !== "") {
        console.log("Yes")
        return (
            <div>
                {person.map(p => (p.name.toLowerCase()).includes(country.toLowerCase()) ? <li key={p.name}>{p.name}</li> : <div key={p.name}></div>)}
            </div>
        )
    } else {
        return (
            <div>
                {person.map(p => <li key={p.name}>{p.name} </li>)}
            </div>
        )
    }
}

const App=()=>{
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

  console.log('render', person.length,person)

    return(
      <div>
        <Input country={country} setCountry={setCountry}/>
        <Result country={country} person={person}/>
      </div>
    )
}


export default App
