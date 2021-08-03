import React from 'react';
import { useMovieList } from '../contexts';

function SaveButton() {
  const { hasSomethingToSave, saveMovies } = useMovieList();

  return (
    <button
      className="link"
      type="button"
      onClick={saveMovies}
      disabled={!hasSomethingToSave}>
      Save
    </button>
  );
}

export default SaveButton;
