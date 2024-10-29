import React from 'react';

export const Features = () => {
  const features = [
    {
      title: "For Creators",
      description: "Transform your ideas into stunning visuals with AI-powered tools.",
      icon: "🎨"
    },
    {
      title: "For Teams",
      description: "Collaborate seamlessly and boost your team's creative workflow.",
      icon: "👥"
    },
    {
      title: "For Developers",
      description: "Integrate powerful AI features into your applications.",
      icon: "💻"
    }
  ];

  return (
    <section className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-xl"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};