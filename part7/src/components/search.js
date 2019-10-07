import React from 'react'

const searchStyle = {
    color: 'grey',
    fontStyle: 'italic',
    fontSize: 16
}

const Search = ({ newSearch, handleSearch }) => {
    return (
        <div style = {searchStyle}>
            filter shown with <input value={newSearch} onChange={handleSearch} />
        </div>
    )
}

export default Search