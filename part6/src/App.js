import React, {useState, useEffect} from 'react'
import axios from 'axios'


const App=()=>{
  const [person, setPerson] = useState([]);

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPerson(response.data)
      })
  }, [])

  console.log('render', person.length,person)

    return(
      <div>

      </div>
    )
}

export default App
