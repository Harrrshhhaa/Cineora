import { Film, Github, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const footerLinks = [
    {
      title: 'Navigation',
      links: [
        { name: 'Home', path: '/' },
        { name: 'TV Shows', path: '/tv-shows' },
        { name: 'Movies', path: '/movies' },
        { name: 'New & Popular', path: '/new-popular' },
        { name: 'My List', path: '/my-list' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', path: '#' },
        { name: 'Terms of Service', path: '#' },
        { name: 'Cookie Preferences', path: '#' },
        { name: 'Corporate Information', path: '#' },
      ],
    },
    {
      title: 'Help',
      links: [
        { name: 'Help Center', path: '#' },
        { name: 'Contact Us', path: '#' },
        { name: 'Media Center', path: '#' },
        { name: 'Investor Relations', path: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900/50 border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Film size={32} className="text-red-500" />
              <span className="text-2xl font-bold">
                Cine<span className="text-red-500">ora</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm mb-6">
              Experience the magic of cinema with Cineora - your vintage-themed movie
              streaming platform. Discover classic and contemporary films in a unique,
              retro-inspired environment.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Cineora. The Aura of Cinema</p>
        </div>
      </div>
    </footer>
  );
}