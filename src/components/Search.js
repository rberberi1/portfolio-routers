import React, { useState } from 'react';

function Search(props) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    props.onSearch(e.target.value); 
  };

  return (
    <input
      type="text"
      id="search-events"
      placeholder={props.placeholder}
      value={searchTerm}
      onChange={handleSearch} 
    />
  );
}

export default Search;
