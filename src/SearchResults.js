import React from 'react';
import SearchResultItem from './SearchResultItem';

function SearchResults(props) {
  const {superheroData = []} = props;

  console.log('superheroData', superheroData);
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-lg-4">
        {superheroData.map(superhero =>
        <SearchResultItem data={superhero} />
      )}
      
        </div>
      </div>
    </div>
  );

}

export default SearchResults;