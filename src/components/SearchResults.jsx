import React from 'react';

import Movie from './Movie';
import { useMovieList, useSearch } from '../contexts';

function SearchResult({ data }) {
  const { id } = data;

  const { movies, addMovie, removeMovie } = useMovieList();

  const hasSeen = movies.find((movie) => movie.id === id);

  const buttonData = { onClick: () => addMovie(data), text: '+' };

  if (hasSeen) {
    buttonData.onClick = () => removeMovie(data);
    buttonData.text = '-';
  }

  return (
    <Movie data={data}>
      <button type="button" onClick={buttonData.onClick}>
        {buttonData.text}
      </button>
    </Movie>
  );
}

SearchResult.propTypes = {
  ...Movie.propTypes,
};

function SearchResults() {
  const { results } = useSearch();

  return results.map((result) => <SearchResult key={result.id} data={result} />);
}

export default SearchResults;
