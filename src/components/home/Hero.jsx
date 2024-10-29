import React from 'react';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-between py-20">
      <div className="max-w-2xl">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text mb-6">
          Creativity, Unleashed.
        </h1>
        <p className="text-gray-300 text-xl mb-8">
          Unlock your creative potential with our advanced AI tools. Transform ideas into stunning visuals instantly.
        </p>
        <div className="flex gap-4">
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-medium hover:opacity-90 transition-opacity">
            Get Started
          </button>
          <button className="px-8 py-3 border border-purple-500 rounded-full text-white font-medium hover:bg-purple-500/10 transition-colors">
            Learn More
          </button>
        </div>
      </div>
      
      <div className="relative">
        <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl absolute -z-10" />
        <img 
          src="https://images.unsplash.com/photo-1633207934928-81e65c05c9f9?w=500"
          alt="AI Generated Art"
          className="rounded-2xl shadow-2xl"
        />
      </div>
    </section>
  );
};