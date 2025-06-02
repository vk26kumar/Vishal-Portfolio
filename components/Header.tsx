
import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';
import { MenuIcon, XIcon } from './icons/GenericIcons'; // Assuming you'll create these

interface HeaderProps {
  name: string;
  navItems: NavItem[];
  accentColor: string;
}

const Header: React.FC<HeaderProps> = ({ name, navItems, accentColor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? `bg-slate-900/80 backdrop-blur-md shadow-lg` : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          <a href="#hero" className={`text-2xl font-bold text-${accentColor}-400 hover:text-${accentColor}-300 transition-colors`}>
            {name}
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-slate-300 hover:text-${accentColor}-400 transition-colors px-3 py-2 rounded-md text-sm font-medium`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md text-slate-300 hover:text-${accentColor}-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-${accentColor}-500`}
            >
              {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800/95 backdrop-blur-sm absolute w-full">
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)} 
                className={`block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-700 hover:text-${accentColor}-400 transition-colors`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
