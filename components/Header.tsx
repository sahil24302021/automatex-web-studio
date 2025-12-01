// 

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { WHATSAPP_LINK } from '../constants';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LEFT — Logo + Name */}
        <Link to="/" className="flex items-center gap-2 group">
          <Logo className="w-10 h-10 md:w-12 md:h-12 object-contain" />
          <div className="flex flex-col leading-tight">
            <span className="font-extrabold text-lg md:text-xl text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">
              AutomateX
            </span>
            <span className="text-[0.7rem] font-semibold text-slate-500 uppercase tracking-widest">
              Web Studio
            </span>
          </div>
        </Link>

        {/* CENTER — Nav */}
        <nav className="hidden md:flex items-center gap-8 mx-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive(link.path)
                  ? 'text-indigo-600 font-bold'
                  : 'text-slate-600 hover:text-indigo-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* RIGHT — WhatsApp + Mobile Menu */}
        <div className="flex items-center gap-4">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex bg-secondary hover:bg-emerald-600 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-sm"
          >
            WhatsApp Us
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-slate-700 hover:text-indigo-600 hover:bg-slate-50 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full left-0 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-indigo-600'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-2">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-secondary hover:bg-emerald-600 text-white px-4 py-3 rounded-xl text-base font-bold shadow-md"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
