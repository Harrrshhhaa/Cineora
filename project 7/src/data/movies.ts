export const movies = [
  {
    id: '1',
    title: 'Inception',
    year: '2010',
    rating: '8.8',
    poster: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=800',
    description:
      'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    trailerUrl: 'https://www.youtube.com/watch?v=YoHD9XEInc0',
    genre: ['Action', 'Sci-Fi', 'Thriller'],
  },
  {
    id: '2',
    title: 'The Grand Budapest Hotel',
    year: '2014',
    rating: '8.1',
    poster: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=800',
    description:
      'A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel\'s glorious years under an exceptional concierge.',
    trailerUrl: 'https://www.youtube.com/watch?v=1Fg5iWmQjwk',
    genre: ['Adventure', 'Comedy', 'Drama'],
  },
  {
    id: '3',
    title: 'Blade Runner 2049',
    year: '2017',
    rating: '8.0',
    poster: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800',
    description:
      'Young Blade Runner K\'s discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who\'s been missing for thirty years.',
    trailerUrl: 'https://www.youtube.com/watch?v=gCcx85zbxz4',
    genre: ['Action', 'Drama', 'Sci-Fi'],
  },
] as const;