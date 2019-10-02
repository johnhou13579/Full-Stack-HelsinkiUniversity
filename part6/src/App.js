import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Input=()=>{
  const [country, setCountry] = useState('')

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

const App=()=>{
  const [person, setPerson] = useState([]); 

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
        <Input/>
      </div>
    )
}


export default App
