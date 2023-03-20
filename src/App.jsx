import React from 'react';
import { Navbar } from './components/_index';
import { AboutSection, LandingSection } from './sections/_index';

const App = () => (
  <div className="bg-solitude font-Poppins">
    <Navbar />
    <LandingSection />
    <AboutSection />
  </div>
);

export default App;
