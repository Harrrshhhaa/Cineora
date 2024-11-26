import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Movie {
  id: number;
  title: string;
  image: string;
}

interface MovieRowProps {
  title: string;
  movies: Movie[];
}

const MovieRow: React.FC<MovieRowProps> = ({ title, movies }) => {
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const rowRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      
      rowRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth',
      });
      
      setScrollPosition(scrollTo);
    }
  };

  return (
    <div className="space-y-4 mb-8">
      <h2 className="text-2xl font-bold px-4">{title}</h2>
      
      <div className="group relative">
        <ChevronLeft
          className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition group-hover:opacity-100 hover:scale-125 ${
            scrollPosition <= 0 ? 'hidden' : ''
          }`}
          onClick={() => handleScroll('left')}
        />
        
        <div
          ref={rowRef}
          className="flex space-x-4 overflow-x-scroll scrollbar-hide scroll-smooth px-4"
        >
          {movies.map((movie) => (
            <motion.div
              key={movie.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative min-w-[180px] cursor-pointer transition duration-200 ease-out md:min-w-[260px] md:hover:scale-105"
            >
              <img
                src={movie.image}
                alt={movie.title}
                className="rounded-sm object-cover md:rounded"
                style={{ width: '260px', height: '145px' }}
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-sm md:text-lg font-semibold">{movie.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
        
        <ChevronRight
          className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition group-hover:opacity-100 hover:scale-125"
          onClick={() => handleScroll('right')}
        />
      </div>
    </div>
  );
};

export default MovieRow;