import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-gradient-to-b from-black/80 to-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <Logo />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition">Home</Link>
            <Link to="/movies" className="text-gray-300 hover:text-white transition">Movies</Link>
            <Link to="/tv-shows" className="text-gray-300 hover:text-white transition">TV Shows</Link>
            <Link to="/watchlist" className="text-gray-300 hover:text-white transition">My List</Link>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search titles..."
                className="bg-gray-900 text-white pl-10 pr-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 absolute top-20 left-0 w-full py-4 px-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-300 hover:text-white transition">Home</Link>
              <Link to="/movies" className="text-gray-300 hover:text-white transition">Movies</Link>
              <Link to="/tv-shows" className="text-gray-300 hover:text-white transition">TV Shows</Link>
              <Link to="/watchlist" className="text-gray-300 hover:text-white transition">My List</Link>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search titles..."
                  className="w-full bg-gray-900 text-white pl-10 pr-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;