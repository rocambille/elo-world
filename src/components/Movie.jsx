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
  const {
    backdrop_path,
    elo,
    lastDelta,
    overview,
    poster_path,
    release_date,
    title,
  } = data;

  const imgPath = poster_path ?? backdrop_path;

  return (
    <figure className="sm:inline-flex shadow overflow-hidden rounded-xl sm:p-0 sm:h-72">
      {imgPath && (
        <img
          loading="lazy"
          src={`https://image.tmdb.org/t/p/w500${imgPath}`}
          alt={title}
          className="block sm:w-48 h-auto"
        />
      )}
      <figcaption className="flex flex-col sm:w-96 p-4 sm:p-8 text-center sm:text-left space-y-2">
        <p className="font-semibold">{title}</p>
        <time className="mb-2 text-gray-500">
          {new Date(release_date).getFullYear()}
        </time>
        {elo && lastDelta && (
          <p>
            {formatElo(elo)}
            {formatLastDelta(lastDelta)}
          </p>
        )}
        <div className="hidden sm:block">
          <p className="line-clamp-6 overflow-ellipsis">{overview}</p>
        </div>
        {children}
      </figcaption>
    </figure>
  );
}

Movie.propTypes = {
  children: node,
  data: shape({
    backdrop_path: string,
    elo: number,
    id: number.isRequired,
    lastDelta: number,
    overview: string,
    poster_path: string,
    release_date: string.isRequired,
    title: string.isRequired,
  }).isRequired,
};

export default Movie;
