import React from 'react';

export const Partners = () => {
  return (
    <section className="py-20">
      <h2 className="text-2xl font-bold text-center text-white mb-12">Our Partners</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
        {[1, 2, 3, 4].map((partner) => (
          <div key={partner} className="flex items-center justify-center">
            <div className="w-32 h-12 bg-white/10 rounded-lg"></div>
          </div>
        ))}
      </div>
    </section>
  );
};