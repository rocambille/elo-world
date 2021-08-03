import React, { createContext, useContext, useState } from 'react';
import { node } from 'prop-types';

import useFetch from '../hooks/useFetch';

const fetchOptions = {
  initialState: [],
  extractData: (body) => body.results,
};

const SearchContext = createContext();

function SearchProvider({ children }) {
  const [url, setUrl] = useState();

  const [results] = useFetch(url, fetchOptions);

  const setQuery = (query) => {
    setUrl(
      `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=b581f37ace71546447fa00eb1e80ab57`,
    );
  };

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
