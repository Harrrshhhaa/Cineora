import { useMovies } from '@/hooks/useMovies';
import { FeaturedRow } from '@/components/home/FeaturedRow';

export function TVShows() {
  const { tvShows } = useMovies();

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 mb-8">
        <h1 className="text-3xl font-bold">TV Shows</h1>
      </div>

      <div className="space-y-12">
        <FeaturedRow
          title="Popular TV Shows"
          movies={tvShows.filter(show => show.type === 'series')}
        />
        <FeaturedRow
          title="New Releases"
          movies={tvShows.filter(show => 
            show.type === 'series' && 
            parseInt(show.year) >= new Date().getFullYear() - 1
          )}
        />
        <FeaturedRow
          title="Award-Winning Series"
          movies={tvShows.filter(show => 
            show.type === 'series' && 
            show.rating >= 90
          )}
        />
      </div>
    </div>
  );
}