import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className='pa2'>
            <input type='search'
                    className='pa2' 
                    placeholder='search robots'
                    onChange={searchChange} />
        </div>
        );
}

export default SearchBox;