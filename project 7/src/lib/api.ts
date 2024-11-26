import axios from 'axios';
import type { Movie } from '@/types';
import { sampleMovies } from '@/data/sample-movies';

// In a real app, you would use environment variables for the API key and base URL
const API_KEY = 'your-api-key';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function fetchMovies(type: string): Promise<Movie[]> {
  // For demo purposes, return sample data
  // In production, uncomment the API call below
  return sampleMovies;

  // const response = await axios.get(
  //   `${BASE_URL}/movie/${type}?api_key=${API_KEY}&language=en-US&page=1`
  // );
  // return response.data.results.map(transformMovieData);
}

export async function fetchMovieDetails(id: string): Promise<Movie> {
  // For demo purposes, return sample data
  return sampleMovies.find((movie) => movie.id === id) || sampleMovies[0];

  // const response = await axios.get(
  //   `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
  // );
  // return transformMovieData(response.data);
}

function transformMovieData(data: any): Movie {
  return {
    id: data.id.toString(),
    title: data.title,
    overview: data.overview,
    posterUrl: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
    backdropUrl: `https://image.tmdb.org/t/p/original${data.backdrop_path}`,
    rating: Math.round(data.vote_average * 10),
    year: new Date(data.release_date).getFullYear().toString(),
    maturityRating: 'PG-13',
    duration: '2h 30m',
    genres: data.genres?.map((g: any) => g.name) || [],
  };
}