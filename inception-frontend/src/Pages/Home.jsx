import React from 'react';
import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection';
import AboutSection from '../Components/AboutSection';

export const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
    </div>
  )
}

export default Home;