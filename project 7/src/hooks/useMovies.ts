import { useState, useEffect } from 'react';
import { fetchMovies } from '@/lib/api';
import type { Movie } from '@/types';

export function useMovies() {
  const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const [trending, topRated, popular] = await Promise.all([
          fetchMovies('trending'),
          fetchMovies('top_rated'),
          fetchMovies('popular'),
        ]);

        setTrendingMovies(trending);
        setTopRatedMovies(topRated);
        setPopularMovies(popular);
      } catch (err) {
        setError('Failed to load movies');
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, []);

  return {
    trendingMovies,
    topRatedMovies,
    popularMovies,
    loading,
    error,
  };
}