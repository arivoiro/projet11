import React from 'react';
import Header from '../../components/header/header';
import HeroSection from '../../components/heroSection/herosection';
import FeaturesSection from '../../components/featureSection/featuresection';
import Footer from '../../components/footer/footer';
import './homepage.css';

function HomePage() {
  return (
    <div>
      <Header />
      <main className="main">
        <HeroSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
