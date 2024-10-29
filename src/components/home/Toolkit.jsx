import React from 'react';

export const Toolkit = () => {
  return (
    <section className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold text-white mb-6">Leonardo's Toolkit</h2>
          <p className="text-gray-300 text-lg mb-8">
            Access a comprehensive suite of AI-powered tools designed to enhance your creative workflow.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white">
            Explore Tools
          </button>
        </div>
        <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-8 rounded-2xl">
          <img 
            src="https://images.unsplash.com/photo-1633207935125-84c13ac2c1c2?w=500"
            alt="Toolkit Preview"
            className="rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};
