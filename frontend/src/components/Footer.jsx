import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary border-t border-white/5 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Talent Hub SMK. All rights reserved.
        </p>
        <p className="text-gray-400 text-xs mt-2 font-mono">
          Engineered by <span className="text-accent">ThreeDevs</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
