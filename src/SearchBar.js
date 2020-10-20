import React, {useState} from 'react';

function SearchBar(props) {
const {handleChange, searchText} = props;

  return (
    <div className="container">
    <div className="row">
    <div className="col-sm-12 col-lg-12">
    <input
        id="search-bar"
        type="search"
        placeholder="Hunt superheroes here..."
        onChange={handleChange}
        value={searchText}
      />
    </div>

  </div>
  </div>




    
  );
}

export default SearchBar;