import React from 'react';
import { motion } from 'framer-motion';

const NavLinks = () => {
  return (
    <div className="hidden md:flex items-center justify-end space-x-8">
      <nav className="flex space-x-8">
        {['Products', 'Solutions', 'Resources', 'Pricing'].map((item) => (
          <motion.a
            key={item}
            href="#"
            className="text-base font-medium text-gray-300 hover:text-white"
            whileHover={{ scale: 1.05 }}
          >
            {item}
          </motion.a>
        ))}
      </nav>
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-600 hover:bg-purple-700"
      >
        Get Started
      </motion.button>
    </div>
  );
};

export default NavLinks;