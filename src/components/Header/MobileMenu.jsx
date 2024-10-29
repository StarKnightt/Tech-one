import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const MobileMenu = ({ isOpen }) => {
  return (
    <motion.div 
      className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
    >
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {['Products', 'Solutions', 'Resources', 'Pricing'].map((item) => (
          <a
            key={item}
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
          >
            {item}
          </a>
        ))}
        <button className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-white bg-purple-600 hover:bg-purple-700">
          Get Started
        </button>
      </div>
    </motion.div>
  );
};

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired
};

export default MobileMenu;