import { useState } from 'react';
import { useMovies } from '@/hooks/useMovies';
import { MovieCard } from '@/components/movies/MovieCard';
import { Filter } from 'lucide-react';

export function Browse() {
  const { allMovies } = useMovies();
  const [selectedGenre, setSelectedGenre] = useState<string>('all');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('all');

  const genres = [...new Set(allMovies.flatMap(movie => movie.genres))];
  const languages = [...new Set(allMovies.map(movie => movie.language))];

  const filteredMovies = allMovies.filter(movie => {
    const genreMatch = selectedGenre === 'all' || movie.genres.includes(selectedGenre);
    const languageMatch = selectedLanguage === 'all' || movie.language === selectedLanguage;
    return genreMatch && languageMatch;
  });

  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Browse</h1>
        <div className="flex items-center gap-4">
          <select
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
            className="bg-gray-800 text-white rounded-lg px-4 py-2"
          >
            <option value="all">All Genres</option>
            {genres.map(genre => (
              <option key={genre} value={genre}>{genre}</option>
            ))}
          </select>
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="bg-gray-800 text-white rounded-lg px-4 py-2"
          >
            <option value="all">All Languages</option>
            {languages.map(lang => (
              <option key={lang} value={lang}>{lang}</option>
            ))}
          </select>
          <button className="p-2 rounded-lg bg-gray-800">
            <Filter size={20} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {filteredMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}