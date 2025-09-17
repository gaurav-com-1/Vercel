'use client'; 

import React, { useState } from 'react';
import Link from 'next/link';
import { CgMenu, CgClose } from 'react-icons/cg';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-primary/80 border-b border-border backdrop-blur-sm fixed top-0 left-0 w-full z-50">
      {/* REFACTORED: Replaced py-3 with the new h-navbar class for a fixed height */}
      <div className="container mx-auto px-6 h-navbar flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-accent tracking-wider">
          INVICTUS
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.path} className="text-text-primary hover:text-accent transition-colors duration-300">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
        
        {/* Mobile Menu Button & Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button onClick={() => setIsOpen(!isOpen)} className="text-text-primary focus:outline-none">
            {isOpen ? <CgClose size={24} /> : <CgMenu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary border-t border-border">
          <ul className="flex flex-col items-center space-y-6 py-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.path} onClick={() => setIsOpen(false)} className="text-text-primary text-lg hover:text-accent transition-colors duration-300">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;