import React from 'react';

import Player from '../components/Player';
import { useMovieList } from '../contexts';

import elo from '../helpers/elo';

const player = elo();

function Play() {
  const { movies, updateMovies } = useMovieList();

  let [movie1, movie2] = movies.sort((a, b) => a.matchCount - b.matchCount);

  if (movie1 == null || movie2 == null) {
    return <p>you should start with searching movies ;)</p>;
  }

  return (
    <>
      <Player
        data={movie1}
        onWin={() => {
          [movie1, movie2] = player(movie1).wins(movie2);
          updateMovies(movie1, movie2);
        }}
      />
      vs
      <Player
        data={movie2}
        onWin={() => {
          [movie2, movie1] = player(movie2).wins(movie1);
          updateMovies(movie1, movie2);
        }}
      />
      <button
        type="button"
        onClick={() => {
          [movie1, movie2] = player(movie1).ties(movie2);
          updateMovies(movie1, movie2);
        }}>
        ==
      </button>
    </>
  );
}

export default Play;
