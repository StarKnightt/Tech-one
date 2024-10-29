import React from 'react';

export const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4",
    "https://images.unsplash.com/photo-1635322966219-b75ed372eb01",
    "https://images.unsplash.com/photo-1636953056323-9c09fdd74fa6",
    "https://images.unsplash.com/photo-1633207935125-84c13ac2c1c2",
    "https://images.unsplash.com/photo-1633207935129-1c2d7082c3e7",
    "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4",
    "https://images.unsplash.com/photo-1635322966219-b75ed372eb01",
    "https://images.unsplash.com/photo-1636953056323-9c09fdd74fa6"
  ];

  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Platform Gallery
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-square overflow-hidden rounded-xl group"
          >
            <img 
              src={`${image}?w=400&h=400&fit=crop`}
              alt={`Gallery item ${index + 1}`}
              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
