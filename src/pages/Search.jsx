import React from 'react';

import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';
import { SearchProvider } from '../contexts';

function Search() {
  return (
    <SearchProvider>
      <SearchBar />
      <SearchResults />
    </SearchProvider>
  );
}

export default Search;
