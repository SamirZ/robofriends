import React from 'react';

const SearchBox = ({ searchChange }) => (
  <div className='pa2 flex flex-column justify-center items-center'>
    <label htmlFor='search' className='pa2 b lightest-blue'>
      Search robots
    </label>
    <input
      id='search'
      onChange={searchChange}
      className='pa3 ba b--green bg-lightest-blue mw5'
      type='search'
      placeholder='Search robots'
    />
  </div>
);

export default SearchBox;
