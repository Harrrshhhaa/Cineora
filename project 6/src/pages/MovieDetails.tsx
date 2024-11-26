import React from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Star, Clock, Calendar, ThumbsUp } from 'lucide-react';

const MovieDetails = () => {
  const { id } = useParams();
  
  // In a real app, fetch movie details based on id
  const movie = {
    title: "Oppenheimer",
    year: 2023,
    duration: "180 min",
    rating: 8.9,
    description: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
    trailer: "https://www.youtube.com/watch?v=uYPbbksJxIg",
    director: "Christopher Nolan",
    cast: ["Cillian Murphy", "Emily Blunt", "Matt Damon", "Robert Downey Jr."],
    genres: ["Biography", "Drama", "History"],
    image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80"
  };

  return (
    <div className="pt-20">
      <div className="relative h-[70vh]">
        <ReactPlayer
          url={movie.trailer}
          width="100%"
          height="100%"
          playing
          muted
          loop
          className="absolute top-0 left-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 -mt-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">{movie.title}</h1>
            
            <div className="flex flex-wrap gap-4 text-sm text-gray-300">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>{movie.rating}/10</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{movie.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{movie.year}</span>
              </div>
            </div>

            <p className="text-lg text-gray-300">{movie.description}</p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Cast</h3>
              <div className="flex flex-wrap gap-2">
                {movie.cast.map((actor) => (
                  <span key={actor} className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                    {actor}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Genres</h3>
              <div className="flex flex-wrap gap-2">
                {movie.genres.map((genre) => (
                  <span key={genre} className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Movie Info</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-gray-400">Director</span>
                  <p>{movie.director}</p>
                </div>
                <div>
                  <span className="text-gray-400">Release Year</span>
                  <p>{movie.year}</p>
                </div>
                <div>
                  <span className="text-gray-400">Duration</span>
                  <p>{movie.duration}</p>
                </div>
              </div>
            </div>

            <button className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition flex items-center justify-center gap-2">
              <ThumbsUp className="w-5 h-5" />
              Add to Watchlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;