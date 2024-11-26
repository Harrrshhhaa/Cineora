import { useMovies } from '@/hooks/useMovies';
import { MovieCard } from '@/components/movies/MovieCard';

export function MyList() {
  const { myList } = useMovies();

  if (myList.length === 0) {
    return (
      <div className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-3xl font-bold mb-8">My List</h1>
        <div className="text-center text-gray-400">
          <p>Your list is empty. Add movies and TV shows to create your watchlist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <h1 className="text-3xl font-bold mb-8">My List</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {myList.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}