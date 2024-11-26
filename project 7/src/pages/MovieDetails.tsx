import { useParams } from 'react-router-dom';
import { useMovies } from '@/hooks/useMovies';
import { Play, Plus, ThumbsUp } from 'lucide-react';
import { TrailerModal } from '@/components/movies/TrailerModal';
import { useState } from 'react';

export function MovieDetails() {
  const { id } = useParams();
  const { getMovieById } = useMovies();
  const [showTrailer, setShowTrailer] = useState(false);

  const movie = getMovieById(id || '');

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[70vh]">
        <img
          src={movie.backdropUrl}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <h1 className="text-5xl font-bold mb-4">{movie.title}</h1>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-medium px-2 py-1 bg-red-500 rounded">
                {movie.maturityRating}
              </span>
              <span>{movie.year}</span>
              <span>{movie.duration}</span>
              <span className="flex items-center gap-1">
                <ThumbsUp size={16} className="text-yellow-400" />
                {movie.rating}%
              </span>
            </div>
            
            <div className="flex gap-4">
              <button
                onClick={() => setShowTrailer(true)}
                className="flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-white/90 transition-colors"
              >
                <Play size={20} />
                Play Trailer
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-gray-600/80 text-white rounded-lg font-semibold hover:bg-gray-600 transition-colors">
                <Plus size={20} />
                Add to My List
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl">
          <p className="text-lg text-white/80 mb-8">{movie.overview}</p>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-medium text-white/60 mb-2">Cast</h3>
              <p className="text-white/80">{movie.cast.join(', ')}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-white/60 mb-2">Genres</h3>
              <p className="text-white/80">{movie.genres.join(', ')}</p>
            </div>
            {movie.director && (
              <div>
                <h3 className="text-sm font-medium text-white/60 mb-2">Director</h3>
                <p className="text-white/80">{movie.director}</p>
              </div>
            )}
            {movie.language && (
              <div>
                <h3 className="text-sm font-medium text-white/60 mb-2">Language</h3>
                <p className="text-white/80">{movie.language}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <TrailerModal
        isOpen={showTrailer}
        onClose={() => setShowTrailer(false)}
        trailerUrl={movie.trailerUrl}
        title={movie.title}
      />
    </div>
  );
}