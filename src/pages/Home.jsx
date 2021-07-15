import React from 'react';

import Movie from '../components/Movie';
import { useMovieList } from '../contexts';

function Home() {
  const { movies } = useMovieList();

  return movies
    .sort((a, b) => b.elo - a.elo || b.matchCount - a.matchCount || b.lastDelta - a.lastDelta)
    .map((movie) => <Movie key={movie.id} data={movie} />);
}

export default Home;
