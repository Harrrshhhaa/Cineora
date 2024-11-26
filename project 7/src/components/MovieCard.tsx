import React from 'react';
import { Film, Star } from 'lucide-react';
import type { Movie } from '../types';
import TrailerModal from './TrailerModal';

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const [showTrailer, setShowTrailer] = React.useState(false);

  return (
    <>
      <div className="group relative bg-white/10 rounded-lg overflow-hidden backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
        <div className="aspect-[2/3] relative overflow-hidden">
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={() => setShowTrailer(true)}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full flex items-center gap-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
            >
              <Film size={18} />
              <span>Watch Trailer</span>
            </button>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-lg font-semibold text-white/90 line-clamp-1">
              {movie.title}
            </h3>
            <div className="flex items-center gap-1 text-yellow-400">
              <Star size={16} fill="currentColor" />
              <span className="text-sm">{movie.rating}</span>
            </div>
          </div>
          <p className="text-sm text-white/60 mt-1">{movie.year}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {movie.genre.map((g) => (
              <span
                key={g}
                className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/70"
              >
                {g}
              </span>
            ))}
          </div>
          <p className="mt-3 text-sm text-white/70 line-clamp-2">
            {movie.description}
          </p>
        </div>
      </div>
      <TrailerModal
        isOpen={showTrailer}
        onClose={() => setShowTrailer(false)}
        trailerUrl={movie.trailerUrl}
        title={movie.title}
      />
    </>
  );
}