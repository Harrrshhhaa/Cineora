import { Play, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { Movie } from '@/types';

interface HeroProps {
  movie: Movie;
}

export function Hero({ movie }: HeroProps) {
  return (
    <div className="relative h-[85vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={movie.backdropUrl}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50" />
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl font-bold mb-4">{movie.title}</h1>
          <p className="text-lg text-white/80 mb-8">{movie.overview}</p>
          
          <div className="flex gap-4">
            <Link
              to={`/movie/${movie.id}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              <Play size={20} />
              Play
            </Link>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-gray-600/80 text-white rounded-lg font-semibold hover:bg-gray-600 transition-colors">
              <Info size={20} />
              More Info
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}