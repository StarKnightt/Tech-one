import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Gallery from './components/Gallery/Gallery';
import Partners from './components/Partners/Partners';
import Community from './components/Community/Community';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Partners />
      <Features />
      <Gallery />
      <Community />
    </div>
  );
}

export default App;