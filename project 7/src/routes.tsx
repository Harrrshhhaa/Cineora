import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Browse } from './pages/Browse';
import { MovieDetails } from './pages/MovieDetails';
import { Search } from './pages/Search';
import { MyList } from './pages/MyList';
import { TVShows } from './pages/TVShows';
import { Movies } from './pages/Movies';
import { NewPopular } from './pages/NewPopular';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/browse" element={<Browse />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/search" element={<Search />} />
      <Route path="/my-list" element={<MyList />} />
      <Route path="/tv-shows" element={<TVShows />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/new-popular" element={<NewPopular />} />
    </Routes>
  );
}