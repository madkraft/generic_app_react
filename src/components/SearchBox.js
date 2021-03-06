import React from 'react'

const SearchBox = () =>
  <div id='search-box'>
    <form className='form-inline form-no-labels'>
      <div className='form-element'>
        <input id='search_input' className='form-input' type='text' placeholder='Find product' name='q' />
      </div>
      <button id='search_button' type='submit' className='button button-primary'>Search</button>
      <button id='quit_search' className='button button-primary'>Reset</button>
    </form>
  </div>

export default SearchBox
