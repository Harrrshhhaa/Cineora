import { useMovies } from '@/hooks/useMovies';
import { FeaturedRow } from '@/components/home/FeaturedRow';

export function Movies() {
  const { movies } = useMovies();

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 mb-8">
        <h1 className="text-3xl font-bold">Movies</h1>
      </div>

      <div className="space-y-12">
        <FeaturedRow
          title="Award-Winning Films"
          movies={movies.filter(movie => movie.rating >= 90)}
        />
        <FeaturedRow
          title="Latest Releases"
          movies={movies.filter(movie => 
            parseInt(movie.year) >= new Date().getFullYear() - 1
          )}
        />
        <FeaturedRow
          title="Indian Cinema"
          movies={movies.filter(movie => 
            ['Hindi', 'Telugu', 'Tamil', 'Kannada', 'Malayalam'].includes(movie.language || '')
          )}
        />
      </div>
    </div>
  );
}