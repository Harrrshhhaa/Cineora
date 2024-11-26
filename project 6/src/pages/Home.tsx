import React from 'react';
import { motion } from 'framer-motion';
import { Play, Info } from 'lucide-react';
import MovieRow from '../components/MovieRow';

const Home = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative h-screen">
        <img
          src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80"
          alt="Oppenheimer"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        
        <div className="absolute bottom-0 left-0 p-8 md:p-16 space-y-4 max-w-2xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Oppenheimer
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-300"
          >
            The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.
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

      {/* Content Sections */}
      <div className="relative z-10 -mt-32 pb-20 px-4 md:px-8">
        <MovieRow 
          title="Trending Now" 
          movies={[
            {
              id: 1,
              title: "Inception",
              image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&q=80"
            },
            {
              id: 2,
              title: "The Dark Knight",
              image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80"
            },
            // Add more movies
          ]}
        />
        
        <MovieRow 
          title="Award-Winning Films" 
          movies={[
            {
              id: 3,
              title: "The Godfather",
              image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80"
            },
            {
              id: 4,
              title: "Pulp Fiction",
              image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80"
            },
            // Add more movies
          ]}
        />
        
        <MovieRow 
          title="Must-Watch Series" 
          movies={[
            {
              id: 5,
              title: "Breaking Bad",
              image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&q=80"
            },
            {
              id: 6,
              title: "Stranger Things",
              image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80"
            },
            // Add more movies
          ]}
        />
      </div>
    </div>
  );
};

export default Home;