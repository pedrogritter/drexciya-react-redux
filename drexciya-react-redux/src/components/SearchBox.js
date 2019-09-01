import React from 'react';

const SearchBox = ({ searchField, searchChange }) => {
    return (
        <div className='f2 pa2'>
            <input 
                className='pa3 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='Search an album by name...'
                onChange={searchChange}>
            </input>

        </div>
    )
}

export default SearchBox;