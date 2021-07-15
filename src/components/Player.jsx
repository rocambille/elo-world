import React from 'react';
import { func } from 'prop-types';

import Movie from './Movie';

function Player({ data, onWin }) {
  return (
    <Movie data={data}>
      <button type="button" onClick={onWin}>
        WIN
      </button>
    </Movie>
  );
}

Player.propTypes = {
  ...Movie.propTypes,
  onWin: func.isRequired,
};

export default Player;
