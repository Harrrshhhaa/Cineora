import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Film, Search, Bell, User } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'TV Shows', path: '/tv-shows' },
    { name: 'Movies', path: '/movies' },
    { name: 'New & Popular', path: '/new-popular' },
    { name: 'My List', path: '/my-list' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-500',
        isScrolled ? 'bg-gray-900/95 backdrop-blur-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2">
              <Film size={32} className="text-red-500" />
              <span className="text-2xl font-bold">
                Cine<span className="text-red-500">ora</span>
              </span>
            </Link>
            
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-white/70',
                    location.pathname === link.path ? 'text-white' : 'text-white/50'
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-6">
            <Link
              to="/search"
              className="text-white/70 hover:text-white transition-colors"
            >
              <Search size={20} />
            </Link>
            <button className="text-white/70 hover:text-white transition-colors">
              <Bell size={20} />
            </button>
            <button className="text-white/70 hover:text-white transition-colors">
              <User size={20} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}