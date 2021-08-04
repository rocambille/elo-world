import React from 'react';

import MovieGrid from '../components/MovieGrid';
import { useMovieList } from '../contexts';

function Home() {
  const { movies } = useMovieList();

  return (
    <MovieGrid
      movies={movies.sort(
        (a, b) =>
          b.elo - a.elo ||
          b.matchCount - a.matchCount ||
          b.lastDelta - a.lastDelta,
      )}
    />
  );
}

export default Home;
