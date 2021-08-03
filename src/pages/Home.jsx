import React from 'react';

import Movie from '../components/Movie';
import { useMovieList } from '../contexts';

function Home() {
  const { movies } = useMovieList();

  return (
    <ol className="grid grid-cols-1 sm:grid-cols-auto-fit gap-y-4 justify-items-center">
      {movies
        .sort(
          (a, b) =>
            b.elo - a.elo ||
            b.matchCount - a.matchCount ||
            b.lastDelta - a.lastDelta,
        )
        .map((movie) => (
          <li key={movie.id} className="inline-block">
            <Movie data={movie} />
          </li>
        ))}
    </ol>
  );
}

export default Home;
