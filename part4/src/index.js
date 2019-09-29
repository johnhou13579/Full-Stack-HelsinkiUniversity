import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const course = [{
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  },
  {
    name: 'Half Stack application development 2',
    id: 2,
    parts: [
      {
        name: 'Fundamentals of React 2',
        exercises: 102,
        id: 1
      },
      {
        name: 'Using props to pass data 2',
        exercises: 72,
        id: 2
      },
      {
        name: 'State of a component 2',
        exercises: 142,
        id: 3
      }
    ]
  }]

ReactDOM.render(
  <App course={course} />,
  document.getElementById('root')
)