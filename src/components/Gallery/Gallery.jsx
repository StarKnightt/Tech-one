import React from 'react';
import { motion } from 'framer-motion';

const images = [
  'https://images.unsplash.com/photo-1655635643532-fa9ba2648cbe',
  'https://images.unsplash.com/photo-1683009427666-340595e57e43',
  'https://images.unsplash.com/photo-1684769755475-8149befb42cf',
  'https://images.unsplash.com/photo-1675789652575-0a5d2425b6c2',
];

const Gallery = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Platform Gallery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative aspect-square rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <img
                src={`${image}?auto=format&fit=crop&w=500&q=80`}
                alt={`Gallery image ${index + 1}`}
                className="object-cover w-full h-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;