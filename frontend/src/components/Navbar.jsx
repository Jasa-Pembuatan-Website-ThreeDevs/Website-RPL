import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutGrid, Users, Building2 } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-accent font-bold text-xl tracking-tighter">TALENTHUB</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-accent' : 'text-gray-300 hover:text-accent'}`
                }
              >
                Home
              </NavLink>
              <NavLink 
                to="/students" 
                className={({ isActive }) => 
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-accent' : 'text-gray-300 hover:text-accent'}`
                }
              >
                Students
              </NavLink>
              <NavLink 
                to="/dudika" 
                className={({ isActive }) => 
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-accent' : 'text-gray-300 hover:text-accent'}`
                }
              >
                DUDIKA
              </NavLink>
            </div>
          </div>
          {/* Mobile icons */}
          <div className="md:hidden flex space-x-4">
            <NavLink to="/"><LayoutGrid size={20} className="text-gray-300" /></NavLink>
            <NavLink to="/students"><Users size={20} className="text-gray-300" /></NavLink>
            <NavLink to="/dudika"><Building2 size={20} className="text-gray-300" /></NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
