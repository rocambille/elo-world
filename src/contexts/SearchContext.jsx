import React, { createContext, useContext } from 'react';
import { node } from 'prop-types';

import useFetch from '../hooks/useFetch';

const fetchOptions = {
  initialState: [],
  onBody: (body) => body.results,
};

const SearchContext = createContext();

function SearchProvider({ children }) {
  const { body: results, fetch: setQuery } = useFetch(
    (query) =>
      `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=b581f37ace71546447fa00eb1e80ab57`,
    null,
    fetchOptions,
  );

  return (
    <SearchContext.Provider value={{ results, setQuery }}>
      {children}
    </SearchContext.Provider>
  );
}

SearchProvider.propTypes = {
  children: node.isRequired,
};

const useSearch = () => useContext(SearchContext);

export { SearchProvider, useSearch };
