import React from 'react';
import { Navbar } from './components/navigation/Navbar';
import { Hero } from './components/home/Hero';
import { Features } from './components/home/Features';
import { Gallery } from './components/home/Gallery';
import { Toolkit } from './components/home/Toolkit';
import { Community } from './components/home/Community';
import { Partners } from './components/home/Partners';
import {Footer} from './components/navigation/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900">
      < Navbar />
      <main className="container mx-auto px-4">
        <Hero />
        <Features />
        <Gallery />
        <Toolkit />
        <Community />
        <Partners />
      </main>
      <Footer />
    </div>
  );
};

export default App;