import React from 'react';
import { Film } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-8 h-8" }) => {
  return (
    <div className="flex items-center gap-2">
      <Film className={`${className} text-red-600`} />
      <span className="text-2xl font-display font-bold tracking-wider">CINEORA</span>
    </div>
  );
};

export default Logo;