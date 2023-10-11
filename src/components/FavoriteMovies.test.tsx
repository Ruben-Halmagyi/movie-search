import React from 'react';
import { render } from '@testing-library/react';
import { FavoriteMovies } from './FavoriteMovies';

test('it displays the titles of the favorite movies', () => {
  const movies = [
    { id: 1, title: 'Napoleaon' },
    { id: 2, title: 'The Gentlemen' },
    { id: 3, title: 'Snatch' }
  ];

  const { getByText } = render(<FavoriteMovies movies={movies} />);
  
  expect(getByText('Napoleaon')).toBeInTheDocument();
  expect(getByText('The Gentlemen')).toBeInTheDocument();
  expect(getByText('Snatch')).toBeInTheDocument();
});