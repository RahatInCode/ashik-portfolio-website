// src/App.jsx
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Services from './components/Services';
import VideoCV from './components/VideoCV.Scrapbook';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [loading, setLoading] = useState(true);
  const mainRef = useRef(null);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      // Initialize smooth scroll behavior
      document.body.style.overflow = 'auto';
      
      // Refresh ScrollTrigger after loading
      ScrollTrigger.refresh();
    } else {
      document.body.style.overflow = 'hidden';
    }
  }, [loading]);

  return (
    <>
      <CustomCursor />
      {loading ? (
        <Loader />
      ) : (
        <main ref={mainRef} className="main-container">
          <Navbar />
          <Hero />
          <About />
          <VideoCV />
          <Works />
          <Services />
          <Contact />
          <Footer />
        </main>
      )}
    </>
  );
}

export default App;
