import React from 'react';

import Movie from './Movie';
import { useMovieList, useSearch } from '../contexts';
import MovieGrid from './MovieGrid';

function SearchResult({ data }) {
  const { id } = data;

  const { movies, addMovie, removeMovie } = useMovieList();

  const when = {
    [true]: {
      onClick: () => removeMovie(data),
      text: '-',
    },
    [false]: {
      onClick: () => addMovie(data),
      text: '+',
    },
  };

  const hasSeen = movies.find((movie) => movie.id === id) != null;

  return (
    <Movie data={data}>
      <button type="button" onClick={when[hasSeen].onClick}>
        {when[hasSeen].text}
      </button>
    </Movie>
  );
}

SearchResult.propTypes = {
  ...Movie.propTypes,
};

function SearchResults() {
  const { results } = useSearch();

  return <MovieGrid movies={results} movieComponentType={SearchResult} />;
}

export default SearchResults;
