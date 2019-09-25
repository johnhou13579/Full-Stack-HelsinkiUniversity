import React from 'react'
import ReactDOM from 'react-dom'
//https://fullstackopen.com/en/part1/a_more_complex_state_debugging_react_apps

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header course = {course}/>
      <Content course={course}/>
      <Total course = {course}/>
    </div>
  )
}

//rendering name of the course
const Header=(props)=>{

  return(
    <div>
        <h1>{props.course.name}</h1>
    </div>
  )
}

//renders the parts and their number of exercises
const Content=(props)=>{
  console.log("Content " , props)
  return(
    <div>
      <Part part={props.course.parts[0]}/>
      <Part part={props.course.parts[1]}/>
      <Part part={props.course.parts[2]}/>
    </div>
  )
}

//Part component for Content component
const Part=(props)=>{
  console.log("Part ", props)
  return(
    <div>
      <p>
        {props.part.name}
      </p>
    </div>
  )
}

//renders the total amount of exercises
const Total=(props)=>{
  console.log("Total ", props)
  return(
    <div>
      <p>Number of exercises {props.course.parts[0].exercises+props.course.parts[1].exercises+props.course.parts[2].exercises}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))