import React from 'react';

const partners = [
  { name: 'Forbes', className: 'text-2xl font-serif italic' },
  { name: 'TechCrunch', className: 'text-2xl font-bold' },
  { name: 'Fortune', className: 'text-2xl font-bold uppercase' },
  { name: 'Business Insider', className: 'text-xl font-semibold' },
];

const Partners = () => {
  return (
    <section className="py-16 bg-black/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className={`text-gray-500 ${partner.className}`}
            >
              {partner.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;