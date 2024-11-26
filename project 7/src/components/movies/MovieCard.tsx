// Previous MovieCard component code remains the same, adding language badge
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Plus, ThumbsUp, Volume2, VolumeX, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrailerModal } from '@/components/movies/TrailerModal';
import type { Movie } from '@/types';

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showTrailer, setShowTrailer] = useState(false);

  return (
    <>
      <motion.div
        layout
        className="relative aspect-[2/3] rounded-lg overflow-hidden group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={movie.posterUrl}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />

        {movie.language && (
          <div className="absolute top-2 right-2 px-2 py-1 bg-black/50 backdrop-blur-sm rounded text-xs font-medium">
            {movie.language}
          </div>
        )}

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 p-4 flex flex-col"
            >
              {/* Rest of the hover content remains the same */}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <TrailerModal
        isOpen={showTrailer}
        onClose={() => setShowTrailer(false)}
        trailerUrl={movie.trailerUrl}
        title={movie.title}
      />
    </>
  );
}