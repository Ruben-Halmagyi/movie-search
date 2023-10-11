import React, { useEffect, useState } from 'react';
import { SearchInput } from '../components/SearchInput';
import { Spinner } from '../components/Spinner';
import { searchMovies } from '../api/search';
import { retrieveCache, storeCache } from '../utils/cache';
import { getFavorites, isFavorite, removeFavorite, addFavorite } from '../utils/favorites';
import { FavoriteMovies } from '../components/FavoriteMovies';


export const Home: React.FC = () => {
  
  const [favorites, setFavorites] = useState<number[]>(getFavorites());
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState(String);
  const [movies, setMovies] = useState<any[]>([]);
  
  const handleSearch = async (query: string) => {
    
    const cachedData = retrieveCache( query + '__page__' + currentPage );
    
    if (cachedData) {
      setMovies(cachedData);
      return;
    }
    
    setLoading(true);
    
    try {
      const data = await searchMovies(query, currentPage);
      
      setMovies(data.results);
      storeCache(query, data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
    
    setLoading(false);
  };
  
  useEffect(() => {
    handleSearch(query);
  }, [currentPage]);
  
  return (
    <div>
    <div>  
    <div>
    <SearchInput onChange={setQuery} onSearch={handleSearch} />
    {loading && <Spinner />}
    </div>
    
    <div>
    {movies.map(movie => (
  <div key={movie.id}>
    {movie.title}
    <button onClick={() => {
      if (isFavorite(movie.id)) {
        removeFavorite(movie.id);
        setFavorites(prev => prev.filter(id => id !== movie.id));
      } else {
        addFavorite(movie.id);
        setFavorites(prev => [...prev, movie.id]);
      }
    }}>
      {isFavorite(movie.id) ? 'Remove from Favorites' : 'Add to Favorites'}
    </button>
  </div>
))}
      </div>

      
      <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}>
      Previous
      </button>
      <button onClick={() => setCurrentPage(prev => prev + 1)}>
      Next
      </button>
      </div>
      <FavoriteMovies movies={movies} />
      </div>
      );
    };