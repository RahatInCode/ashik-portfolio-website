// src/components/Loader.jsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Loader = () => {
  const loaderRef = useRef(null);
  const progressRef = useRef(null);
  const counterRef = useRef(null);
  const textRefs = useRef([]);

  // Your name for the loader
  const loaderText = 'ASHIK';

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      textRefs.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.08,
        ease: 'power4.out',
      }
    );

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
      '-=0.3'
    );

    tl.to(textRefs.current, {
      y: -100,
      opacity: 0,
      duration: 0.4,
      stagger: 0.03,
      ease: 'power4.in',
    });

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

  return (
    <div ref={loaderRef} className="loader">
      <div className="loader-content">
        <div className="loader-text">
          {loaderText.split('').map((char, idx) => (
            <span key={`loader-char-${idx}`} ref={addToRefs} className="loader-char">
              {char}
            </span>
          ))}
        </div>
        <div className="loader-progress-container">
          <div ref={progressRef} className="loader-progress"></div>
        </div>
        <div ref={counterRef} className="loader-counter">
          000
        </div>
      </div>
      <div className="loader-overlay"></div>
    </div>
  );
};

export default Loader;