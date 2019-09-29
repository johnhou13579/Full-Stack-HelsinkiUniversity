import React from 'react'
import Course from './components/Course'

const App = ({course}) => {
  
    return (
      <div>
        {Course(course)}
      </div>
    )
  }

export default App