import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search as SearchIcon } from 'lucide-react';
import { MovieCard } from '@/components/movies/MovieCard';
import { useMovies } from '@/hooks/useMovies';

export function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const { allMovies } = useMovies();
  const [searchResults, setSearchResults] = useState(allMovies);

  useEffect(() => {
    const filtered = allMovies.filter(movie =>
      movie.title.toLowerCase().includes(query.toLowerCase()) ||
      movie.overview.toLowerCase().includes(query.toLowerCase()) ||
      movie.genres.some(g => g.toLowerCase().includes(query.toLowerCase())) ||
      movie.language?.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filtered);
  }, [query, allMovies]);

  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <div className="max-w-2xl mx-auto mb-12">
        <div className="relative">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            value={query}
            onChange={(e) => setSearchParams({ q: e.target.value })}
            placeholder="Search movies, TV shows, genres..."
            className="w-full pl-12 pr-4 py-3 bg-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {searchResults.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}