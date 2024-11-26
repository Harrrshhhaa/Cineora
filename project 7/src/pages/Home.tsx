import { Hero } from '@/components/home/Hero';
import { FeaturedRow } from '@/components/home/FeaturedRow';
import { useMovies } from '@/hooks/useMovies';

export function Home() {
  const { 
    trendingMovies,
    topRatedMovies,
    popularMovies,
    loading,
    error 
  } = useMovies();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="pb-20">
      <Hero movie={trendingMovies[0]} />
      
      <div className="space-y-12 mt-12">
        <FeaturedRow
          title="Trending Now"
          movies={trendingMovies}
        />
        <FeaturedRow
          title="Top Rated"
          movies={topRatedMovies}
        />
        <FeaturedRow
          title="Popular on Cineora"
          movies={popularMovies}
        />
      </div>
    </div>
  );
}