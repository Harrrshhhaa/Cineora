import { useMovies } from '@/hooks/useMovies';
import { FeaturedRow } from '@/components/home/FeaturedRow';

export function NewPopular() {
  const { allMovies } = useMovies();

  const newReleases = allMovies.filter(
    movie => parseInt(movie.year) >= new Date().getFullYear() - 1
  );

  const trending = allMovies.filter(movie => movie.rating >= 85);

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 mb-8">
        <h1 className="text-3xl font-bold">New & Popular</h1>
      </div>

      <div className="space-y-12">
        <FeaturedRow
          title="New Releases"
          movies={newReleases}
        />
        <FeaturedRow
          title="Trending Now"
          movies={trending}
        />
      </div>
    </div>
  );
}