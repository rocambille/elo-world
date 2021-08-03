import React from 'react';

import Player from '../components/Player';
import { useMovieList } from '../contexts';

import elo from '../helpers/elo';

const player = elo();

const randomizer = () => Math.random() - 0.5;

function Play() {
  const { movies, updateMovies } = useMovieList();

  if (movies.length < 10) {
    return <p>you should start with searching movies ;)</p>;
  }

  const sortFunctions = [
    (a, b) => a.matchCount - b.matchCount,
    (a, b) =>
      new Date(a.lastPlayedAt).getTime() - new Date(b.lastPlayedAt).getTime(),
    randomizer,
  ].sort(randomizer);

  /* get the 1st and 3rd movies from the sorted list */
  /* 1st and 2nd may have been together in their last match */
  /* (same matchCount or lastPlayedAt) */
  let [movie1, , movie2] = movies.sort(sortFunctions[0]);

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
