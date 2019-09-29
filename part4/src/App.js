import React from 'react'
//import Course from './components/Course'

const App = ({course}) => {
  
    return (
      <div>
        {Course(course)}
      </div>
    )
  }

const Course=(props)=> {
  return(
    <div>
      <Header course = {props}/>
    </div>
  )
}

const Header=(props)=>{
  return(
    <div>
      {props.course.map(p=><h1 key={p.id}>{p.name}</h1>)}
    </div>
  )
}

export default App