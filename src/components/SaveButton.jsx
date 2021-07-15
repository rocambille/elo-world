import React from 'react';
import { useMovieList } from '../contexts';

function SaveButton() {
  const { saveMovies } = useMovieList();

  return (
    <button type="button" onClick={saveMovies}>
      Save
    </button>
  );
}

export default SaveButton;
