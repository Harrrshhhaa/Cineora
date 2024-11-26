export interface Movie {
  id: string;
  title: string;
  type?: 'movie' | 'series';
  overview: string;
  posterUrl: string;
  backdropUrl: string;
  rating: number;
  year: string;
  maturityRating: string;
  duration: string;
  genres: string[];
  trailerUrl: string;
  cast: string[];
  director?: string;
  creator?: string;
  language?: string;
}

// Rest of the types remain the same...