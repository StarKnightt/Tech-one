import React from 'react';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-black/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-white">CreativeAI</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-white">Features</a>
            <a href="#" className="text-gray-300 hover:text-white">Gallery</a>
            <a href="#" className="text-gray-300 hover:text-white">Toolkit</a>
            <a href="#" className="text-gray-300 hover:text-white">Community</a>
            <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default footer;