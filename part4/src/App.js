import React from 'react'
//import Course from './components/Course'

const App = ({course}) => {
  
    return (
      <div>
        {Course(course)}
      </div>
    )
  }

const Course=(props)=>{
  return(
    <div>
      {props.map(p=><div key={p.id}>
          <EachCourse prop={p}/>
        </div>)}
    </div>
  )
}

const EachCourse=(props)=> {
  return(
    <div>
       <Header course={props.prop}/>
       <Content course={props.prop.parts}/>
    </div>
  )
}

const Header=(props)=>{
  return(
    <h1>
      {props.course.name}
    </h1>
  )
}

const Content=(props)=>{
  return(
    <div>
      {props.course.map(p=><div key={p.id}>{p.name} : {p.exercises}</div>)}
    </div>
  )
} 


export default App