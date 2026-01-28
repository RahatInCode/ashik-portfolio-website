// src/components/Loader.jsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Loader = () => {
  const loaderRef = useRef(null);
  const progressRef = useRef(null);
  const counterRef = useRef(null);
  const textRefs = useRef([]);
  const bookRef = useRef(null);

  const loaderText = 'ASHIK';

  useEffect(() => {
    const tl = gsap.timeline();

    // Book opening animation
    tl.fromTo(
      bookRef.current,
      { rotateY: -30, opacity: 0 },
      { rotateY: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }
    );

    // Text reveals
    tl.fromTo(
      textRefs.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.08,
        ease: 'power4.out',
      },
      '-=0.3'
    );

    // Progress bar
    tl.to(
      progressRef.current,
      {
        width: '100%',
        duration: 1.8,
        ease: 'power2.inOut',
        onUpdate: function () {
          const progress = Math.round(this.progress() * 100);
          if (counterRef.current) {
            counterRef.current.textContent = String(progress).padStart(3, '0');
          }
        },
      },
      '-=0.5'
    );

    // Exit animation
    tl.to(textRefs.current, {
      y: -100,
      opacity: 0,
      duration: 0.4,
      stagger: 0.03,
      ease: 'power4.in',
    });

    tl.to(
      bookRef.current,
      {
        rotateY: 30,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.in',
      },
      '-=0.3'
    );

    tl.to(loaderRef.current, {
      yPercent: -100,
      duration: 0.8,
      ease: 'power4.inOut',
    });

    return () => tl.kill();
  }, []);

  const addToRefs = (el) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  // INLINE STYLES
  const loaderStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: '#f5f5f0',
    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.015) 2px, rgba(0, 0, 0, 0.015) 4px)',
    zIndex: 99999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  };

  const bookStyles = {
    position: 'relative',
    background: '#fff',
    padding: '60px',
    borderRadius: '12px',
    boxShadow: '0 20px 80px rgba(0, 0, 0, 0.2)',
    border: '8px solid #1a1a1a',
    transformStyle: 'preserve-3d',
    perspective: '1000px',
  };

  const contentStyles = {
    textAlign: 'center',
    position: 'relative',
  };

  const textContainerStyles = {
    display: 'flex',
    gap: '8px',
    justifyContent: 'center',
    marginBottom: '40px',
    overflow: 'hidden',
  };

  const charStyles = {
    fontSize: 'clamp(60px, 10vw, 100px)',
    fontWeight: '900',
    color: '#1a1a1a',
    fontFamily: '"Courier New", monospace',
    letterSpacing: '4px',
    display: 'inline-block',
  };

  const progressContainerStyles = {
    width: '300px',
    height: '8px',
    background: '#e0e0e0',
    borderRadius: '10px',
    overflow: 'hidden',
    margin: '0 auto 24px',
    border: '2px solid #1a1a1a',
    boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const progressStyles = {
    width: '0%',
    height: '100%',
    background: 'linear-gradient(90deg, #ff6b6b, #feca57)',
    borderRadius: '10px',
    transition: 'width 0.1s',
  };

  const counterStyles = {
    fontSize: '24px',
    fontWeight: '700',
    color: '#666',
    fontFamily: '"Courier New", monospace',
    letterSpacing: '2px',
  };

  const subtextStyles = {
    fontSize: '14px',
    color: '#999',
    marginTop: '12px',
    fontFamily: '"Comic Sans MS", cursive, sans-serif',
  };

  // Decorative elements
  const cornerDoodleStyles = (corner) => ({
    position: 'absolute',
    width: '40px',
    height: '40px',
    border: '3px solid #1a1a1a',
    ...(corner === 'tl' && { top: '10px', left: '10px', borderRight: 'none', borderBottom: 'none' }),
    ...(corner === 'tr' && { top: '10px', right: '10px', borderLeft: 'none', borderBottom: 'none' }),
    ...(corner === 'bl' && { bottom: '10px', left: '10px', borderRight: 'none', borderTop: 'none' }),
    ...(corner === 'br' && { bottom: '10px', right: '10px', borderLeft: 'none', borderTop: 'none' }),
  });

  const stampStyles = {
    position: 'absolute',
    bottom: '20px',
    right: '20px',
    width: '60px',
    height: '60px',
    border: '3px dashed #ff6b6b',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    fontWeight: '900',
    color: '#ff6b6b',
    fontFamily: '"Courier New", monospace',
    transform: 'rotate(15deg)',
    opacity: 0.7,
  };

  return (
    <div ref={loaderRef} style={loaderStyles}>
      <div ref={bookRef} style={bookStyles}>
        {/* Corner doodles */}
        <div style={cornerDoodleStyles('tl')}></div>
        <div style={cornerDoodleStyles('tr')}></div>
        <div style={cornerDoodleStyles('bl')}></div>
        <div style={cornerDoodleStyles('br')}></div>

        {/* Stamp */}
        <div style={stampStyles}>2025</div>

        <div style={contentStyles}>
          {/* Name */}
          <div style={textContainerStyles}>
            {loaderText.split('').map((char, idx) => (
              <span key={`loader-char-${idx}`} ref={addToRefs} style={charStyles}>
                {char}
              </span>
            ))}
          </div>

          {/* Progress bar */}
          <div style={progressContainerStyles}>
            <div ref={progressRef} style={progressStyles}></div>
          </div>

          {/* Counter */}
          <div ref={counterRef} style={counterStyles}>
            000
          </div>

          {/* Subtext */}
          <div style={subtextStyles}>Loading portfolio...</div>
        </div>
      </div>
    </div>
  );
};

export default Loader;