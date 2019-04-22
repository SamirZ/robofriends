import React from 'react';

const SearchBox = ({ searchChange }) => (
  <div className='pa2'>
    <input
      onChange={searchChange}
      className='pa3 ba b--green bg-lightest-blue'
      type='search'
      placeholder='Search robots'
    />
  </div>
);

export default SearchBox;
