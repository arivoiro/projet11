import React from 'react';
import HeroSection from '../../components/heroSection/herosection';
import FeaturesSection from '../../components/featureSection/featuresection';
import './homepage.css';

function HomePage() {
  return (
    <div>
      <main className="main">
        <HeroSection />
        <FeaturesSection />
      </main>
    </div>
  );
}

export default HomePage;
