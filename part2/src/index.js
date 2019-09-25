import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    
    const Statistics = ({good, neutral, bad}) => {
        return(
            <div>
                <Display text="good" value={good}/>
                <Display text="neutral" value={neutral}/>
                <Display text="bad" value={bad}/>

                <All good={good} neutral={neutral} bad={bad}/>
                <Average good={good} neutral={neutral} bad={bad}/>
                <Positive good={good} neutral={neutral} bad={bad}/>
            </div>
        )
      }
    
    
    return (
        <div>
            <Titles text="give feedback" />
            <Rating handleClick={() => setGood(good + 1)} rate="good" />
            <Rating handleClick={() => setNeutral(neutral + 1)} rate="neutral" />
            <Rating handleClick={() => setBad(bad + 1)} rate="bad" />
            
            <Titles text="statistics" />
            <Statistics good={good} neutral={neutral} bad={bad}/>

        </div>
    )
}

const Titles = (props) => {
    return (
        <div>
            <h1>{props.text}</h1>
        </div>
    )
}

const Rating = (props) => {
    return (
        <div>
            <button onClick={props.handleClick}>
                {props.rate}
            </button>
        </div>
    )
}

const Display=(props)=>{
    return(
        <div>
            {props.text} {props.value}
        </div>
    )
}


const All=({good, neutral, bad})=>{
    return(
        <div>
            all {good+neutral+bad} 
        </div>
    )
}

const Average=({good, neutral, bad})=>{
    return(
        <div>
            average {(good*1 + bad*(-1)) / (good+neutral+bad)} 
        </div>
    )
}

const Positive=({good, neutral, bad})=>{
    return(
        <div>
           positive {good/(good+neutral+bad)*100}%
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)