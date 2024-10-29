import React from 'react';
import { motion } from 'framer-motion';

const Community = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Be part of a <span className="text-purple-400">creative community</span> 🎨
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          A community of over 4 million is waiting for you
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="px-8 py-3 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors"
        >
          Join Discord Server
        </motion.button>
        
        <div className="mt-12 flex justify-center">
          <div className="flex -space-x-4">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-2 border-black"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;