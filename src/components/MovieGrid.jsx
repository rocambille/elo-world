import React from 'react';
import { arrayOf, elementType } from 'prop-types';

import Movie from './Movie';

function MovieGrid({ movies, movieComponentType: MovieComponentType }) {
  return (
    <ol className="grid grid-cols-1 sm:grid-cols-auto-fit gap-y-4 justify-items-center">
      {movies.map((movie) => (
        <li key={movie.id}>
          <MovieComponentType data={movie} />
        </li>
      ))}
    </ol>
  );
}

MovieGrid.propTypes = {
  movies: arrayOf(Movie.propTypes.data).isRequired,
  movieComponentType: elementType,
};

MovieGrid.defaultProps = {
  movieComponentType: Movie,
};

export default MovieGrid;
