import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const App = (props) => {
  const [selected, setSelected] = useState(0)

  const copy = Array.apply(null, new Array(10)).map(Number.prototype.valueOf,0);

  
  let random = Math.floor(Math.random() * props.anecdotes.length)
  
  console.log(random)
  console.log("random" , copy[random])
  console.log(copy)
  
  return (
    <div>
      {props.anecdotes[selected]}
      <Display copy = {copy[random]}/>
      <Vote handleClick2={()=>copy[random]+=1}/> 
      <Button handleClick={()=>setSelected(random)}/>
    </div>
  )
}

const Display=(props)=>{
    return(
        <div>
            has {props.copy} votes
        </div>
    )
}

const Button=(props)=>{
    return(
        <div> 
            <button onClick={props.handleClick2}>next anectode</button>
        </div>
    )
}

const Vote=(props)=>{
    return(
        <div>
            <button onClick={props.handleClick}>vote</button>
        </div>
    )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
