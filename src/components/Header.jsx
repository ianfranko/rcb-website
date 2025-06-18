import { Link } from 'react-router-dom';
import { useState } from 'react';

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Events', to: '/events' },
  { name: 'Venues', to: '/venues' },
  { name: 'News & Blogs', to: '/news' },
  { name: 'Contact', to: '/contact' },
];

export default function Header() {
  const [lang, setLang] = useState('EN');
  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <img src="" alt="RCB Logo" className="h-10 w-10" />
          <span className="font-bold text-lg tracking-tight">Rwanda Convention Bureau</span>
        </div>
        <nav className="hidden md:flex gap-12 text-sm font-medium">
          {navLinks.map(link => (
            <Link key={link.name} to={link.to} className="hover:text-blue-700 transition-colors">{link.name}</Link>
          ))}
        </nav>
        <button
          onClick={() => setLang(lang === 'EN' ? 'FR' : 'EN')}
          className="ml-4 px-3 py-1 rounded border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white transition-colors text-xs font-semibold"
        >
          {lang} / {lang === 'EN' ? 'FR' : 'EN'}
        </button>
      </div>
    </header>
  );
} 