import React from 'react'


const Form = ({ setNewName, setNewNum, addNote, newName, newNum, handleNameChange, handleNumChange }) => {
    return (
        <form onSubmit={addNote}>
            <div>
                <div>name: <input value={newName} onChange={handleNameChange} /></div>
                <div>number: <input value={newNum} onChange={handleNumChange} /></div>
                <button type="submit" >add</button> </div>
        </form>
    )
}

export default Form