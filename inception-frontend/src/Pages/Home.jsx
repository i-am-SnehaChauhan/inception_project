import React from 'react';
import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection';
import AboutSection from '../Components/AboutSection';
import Product from '../Components/Product';
import Footer from '../Components/Footer';

export const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Product />
      <Footer />
    </div>
  )
}

export default Home;