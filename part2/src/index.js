import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <Titles text="give feedback" />
            <Rating handleClick={() => setGood(good + 1)} rate="good" />
            <Rating handleClick={() => setNeutral(neutral + 1)} rate="neutral" />
            <Rating handleClick={() => setBad(bad + 1)} rate="bad" />
            <Titles text="statistics" />
            <Display text="good" value={good}/>
            <Display text="neutral" value={neutral}/>
            <Display text="bad" value={bad}/>
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

ReactDOM.render(<App />,
    document.getElementById('root')
)