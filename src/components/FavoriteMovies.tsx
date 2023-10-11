import React from 'react';
import { getFavorites } from '../utils/favorites';

type Movie = {
  id: number;
  title: string;
};

type Props = {
  movies: Movie[];
};

export const FavoriteMovies: React.FC<Props> = ({ movies }) => {
  const favoriteIds = getFavorites();
  const favoriteMovies = movies.filter(movie => favoriteIds.includes(movie.id));

  return (
    <div>
      <h2>Favorite Movies</h2>
      {favoriteMovies.length === 0 && <p>No favorite movies selected.</p>}
      <ul>
        {favoriteMovies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};