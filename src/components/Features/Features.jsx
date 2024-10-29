import React from 'react';
import { Code, Users, Terminal } from 'lucide-react';

const features = [
  {
    title: 'For Creators',
    icon: Users,
    description: 'Unleash your creativity with our AI-powered tools. Create stunning visuals for your projects instantly.'
  },
  {
    title: 'For Teams',
    icon: Code,
    description: 'Collaborate seamlessly with your team. Share resources and maintain brand consistency.'
  },
  {
    title: 'For Developers',
    icon: Terminal,
    description: 'Integrate Leonardo.ai into your applications with our robust API and documentation.'
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;