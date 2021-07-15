import React from 'react';
import { node, number, shape, string } from 'prop-types';

const formatElo = (elo) => elo?.toFixed(1);

const formatLastDelta = (lastDelta) => {
  if (lastDelta == null) {
    return null;
  }

  lastDelta = lastDelta.toFixed(1);

  if (lastDelta > 0) {
    lastDelta = `+${lastDelta}`;
  }

  return ` (${lastDelta})`;
};

function Movie({ children, data }) {
  const { backdrop_path, elo, lastDelta, poster_path, title } = data;

  const imgPath = poster_path ?? backdrop_path;

  return (
    <section>
      <h1>{title}</h1>
      {elo && lastDelta && (
        <span>
          {formatElo(elo)}
          {formatLastDelta(lastDelta)}
        </span>
      )}
      {imgPath && <img loading="lazy" src={`https://image.tmdb.org/t/p/w500${imgPath}`} alt={title} />}
      {children}
    </section>
  );
}

Movie.propTypes = {
  children: node,
  data: shape({
    backdrop_path: string,
    elo: number,
    id: number.isRequired,
    lastDelta: number,
    poster_path: string,
    title: string.isRequired,
  }).isRequired,
};

export default Movie;
