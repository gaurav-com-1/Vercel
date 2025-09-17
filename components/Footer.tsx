import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary py-12 border-t border-border">
      <div className="container mx-auto px-6 text-center text-text-secondary">
        <div className="flex justify-center mb-6 space-x-6">
          <a href="#" className="hover:text-accent transition-colors duration-300"><FaFacebook size={24} /></a>
          <a href="#" className="hover:text-accent transition-colors duration-300"><FaInstagram size={24} /></a>
          <a href="#" className="hover:text-accent transition-colors duration-300"><FaTwitter size={24} /></a>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Invictus Fitness. All Rights Reserved.</p>
        <p className="text-xs mt-2"></p>
      </div>
    </footer>
  );
};

export default Footer;