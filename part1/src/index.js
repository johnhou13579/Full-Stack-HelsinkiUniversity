import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props)=>{
	return(
		<div>
			<p>Hello {props.name}, you are {props.age} years old!</p>
		</div>
	)
}

//needs one root element <div> or <> or arr of components or will error message to console
const App = () => {
	const name = "Peter"
	const age = 10
	return (
		<div> 
			<h1>Greetings</h1>
			<Hello name = "George" age = "13"/>
			<Hello name = {name} age = {age}/>
		</div>
	)
}
ReactDOM.render(<App />, document.getElementById('root'))