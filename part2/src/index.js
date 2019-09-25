import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    
    const Statistics = ({good, neutral, bad}) => {
        if(good + neutral + bad > 0)
        {
        return(
            <div>
            <table><tbody>
                <Statistic  text="good" value={good}/>
                <Statistic  text="neutral" value={neutral}/>
                <Statistic  text="bad" value={bad}/>
            
                <All good={good} neutral={neutral} bad={bad}/>
                <Average good={good} neutral={neutral} bad={bad}/>
                <Positive good={good} neutral={neutral} bad={bad}/>
            </tbody></table>
            </div>
        )
        }
        return(<div></div>)
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

const Statistic =(props)=>{
    return(     
            <tr>
                    <td>{props.text}</td>
                    <td>{props.value}</td>
            </tr>   
    )
}


const All=({good, neutral, bad})=>{
    return(
        <tr>
            <td>all </td>
            <td>{good+neutral+bad} </td>
        </tr>
    )
}

const Average=({good, neutral, bad})=>{
    return(
        <tr>
            <td>average </td>
            <td>{((good*1 + bad*(-1)) / (good+neutral+bad)).toFixed(1)}</td> 
        </tr>
    )
}

const Positive=({good, neutral, bad})=>{
    return(
        <tr>
           <td>positive </td>
           <td> {(good/(good+neutral+bad)*100).toFixed(1)}%</td>
        </tr>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)