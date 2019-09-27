import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(Array(6).fill(0))

  let random = Math.floor(Math.random() * props.anecdotes.length)
  
  const giveVote = (selected) => {
    const copy = [...votes]
    copy[selected] += 1
    setVote(copy)
 }

  return (
    <div>
      <Label selected={selected} votes={votes}/>
      <Display selected={selected} votes={votes}/>
      <Button1 handleClick={() => giveVote(selected)}/>
      <Button handleClick={()=>setSelected(random)}/>

      <Most selected={selected} votes={votes}/>
    </div>
  )
  
}

const Most=({selected,votes})=>{
  let temp=0
  let i=0
  let max = "Each Anecdote"
  for(i=0; i<votes.length;i++){
    if(votes[i] >= temp){
      temp=votes[i]
    }
  }
  if(temp!==0)
  {
    max = anecdotes[temp]
  }

  return(
    <div>
      {max} has {temp} votes.
    </div>
  )
}

const Display=({selected,votes})=>{
    return(
        <div>
            Has {votes[selected]} votes
        </div>
    )
}

const Label = ({selected,votes}) => {
    return(
    <div>{anecdotes[selected]}</div>
    
    )
}

const Button=(props)=>{
    return(
        <div> 
            <button onClick={props.handleClick}>next anectode</button>
        </div>
    )
}

const Button1 = (props) => (
  <button onClick={props.handleClick}>vote</button>
)


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
