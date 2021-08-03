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
    <li>
      <Movie data={data}>
        <button type="button" onClick={buttonData.onClick}>
          {buttonData.text}
        </button>
      </Movie>
    </li>
  );
}

SearchResult.propTypes = {
  ...Movie.propTypes,
};

function SearchResults() {
  const { results } = useSearch();

  return (
    <ol className="grid grid-cols-1 sm:grid-cols-auto-fit gap-y-4 justify-items-center">
      {results.map((result) => (
        <SearchResult key={result.id} data={result} />
      ))}
    </ol>
  );
}

export default SearchResults;
