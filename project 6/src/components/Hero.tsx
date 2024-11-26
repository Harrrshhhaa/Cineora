import React from 'react';
import { motion } from 'framer-motion';
import { Play, Info } from 'lucide-react';
import { Movie } from '../types/movie';

interface HeroProps {
  movie: Movie;
}

const Hero: React.FC<HeroProps> = ({ movie }) => {
  return (
    <div className="relative h-screen">
      <img
        src={movie.image}
        alt={movie.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      
      <div className="absolute bottom-0 left-0 p-8 md:p-16 space-y-4 max-w-2xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-display font-bold"
        >
          {movie.title}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-300"
        >
          {movie.description}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex space-x-4"
        >
          <button className="flex items-center space-x-2 bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition">
            <Play className="w-5 h-5" />
            <span>Play</span>
          </button>
          <button className="flex items-center space-x-2 bg-gray-800/80 text-white px-6 py-2 rounded hover:bg-gray-700 transition">
            <Info className="w-5 h-5" />
            <span>More Info</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};