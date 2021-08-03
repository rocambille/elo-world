import React, { createContext, useContext } from 'react';
import { node } from 'prop-types';

import { useLoginData } from './LoginDataContext';
import useGitHubContent from '../hooks/useGitHubContent';

const initialContent = [];

const MovieListContext = createContext();

function MovieListProvider({ children }) {
  const { loginData } = useLoginData();

  const [movies, setMovies, git] = useGitHubContent(
    loginData?.username,
    'elo-world',
    'data.json',
    {
      token: loginData?.pat,
      initialContent,
      branch: 'data',
    },
  );

  const hasSomethingToSave = !git.isUpToDate;

  const addMovie = (data) => {
    setMovies([...movies, { ...data, elo: 1500, matchCount: 0 }]);
  };

  const removeMovie = ({ id }) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  const saveMovies = () => {
    git.push();
  };

  const updateMovies = (...newData) => {
    setMovies(
      movies.map((movie) => newData.find(({ id }) => id === movie.id) ?? movie),
    );
  };

  return (
    <MovieListContext.Provider
      value={{
        movies,
        addMovie,
        hasSomethingToSave,
        removeMovie,
        saveMovies,
        updateMovies,
      }}>
      {children}
    </MovieListContext.Provider>
  );
}

MovieListProvider.propTypes = {
  children: node.isRequired,
};

const useMovieList = () => useContext(MovieListContext);

export { MovieListProvider, useMovieList };
