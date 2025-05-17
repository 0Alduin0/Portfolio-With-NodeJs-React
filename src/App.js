import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WelcomeScreen from "./components/WelcomeScreen";
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';

import Particles from "./components/Particles";


const LandingPage = ({ showWelcome, setShowWelcome }) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {showWelcome && (
          <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>

      {!showWelcome && (
        <>
        <div className="min-h-screen bg-gradient-to-br from-darkPurple via-darkBlue to-accentBlue animate-gradient-xy overflow-x-hidden">
          <div className="relative">
            <div style={{ width: '100%', height: '100%', position: 'absolute' }}><Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={5000}
    particleSpread={10}
    speed={0.05}
    particleBaseSize={100}
    moveParticlesOnHover={false}
    alphaParticles={false}
    disableRotation={false}
  /></div>
            <Hero />
            <Navbar />
            <main className="relative z-10">
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
          </div>
        </div>
      </>
      )}
    </>
  );
};

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage showWelcome={showWelcome} setShowWelcome={setShowWelcome} />} />
      </Routes>
      <SpeedInsights />
    </BrowserRouter>
  );
}

export default App;
