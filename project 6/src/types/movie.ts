export interface Movie {
  id: number;
  title: string;
  year: number;
  rating: number;
  duration: string;
  description: string;
  image: string;
  trailer?: string;
  director?: string;
  cast?: string[];
  genres?: string[];
}