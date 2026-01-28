// src/components/CustomCursor.jsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: 'power3.out',
      });

      gsap.to(cursorDot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      });
    };

    const handleMouseEnter = () => {
      gsap.to(cursor, {
        scale: 1.8,
        duration: 0.3,
        ease: 'back.out(1.5)',
      });
      gsap.to(cursorDot, {
        scale: 0.5,
        duration: 0.3,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
        ease: 'back.out(1.5)',
      });
      gsap.to(cursorDot, {
        scale: 1,
        duration: 0.3,
      });
    };

    window.addEventListener('mousemove', moveCursor);

    // Add hover effect to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .hover-target');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  // INLINE STYLES
  const cursorStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '40px',
    height: '40px',
    border: '3px dashed #1a1a1a',
    borderRadius: '50%',
    pointerEvents: 'none',
    zIndex: 9999,
    transform: 'translate(-50%, -50%)',
    mixBlendMode: 'difference',
    background: 'rgba(255, 255, 255, 0.1)',
    opacity: 0.8,
  };

  const cursorDotStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '8px',
    height: '8px',
    background: '#ff6b6b',
    borderRadius: '50%',
    pointerEvents: 'none',
    zIndex: 10000,
    transform: 'translate(-50%, -50%)',
    boxShadow: '0 0 10px rgba(255, 107, 107, 0.5)',
  };

  return (
    <>
      <div ref={cursorRef} style={cursorStyles}></div>
      <div ref={cursorDotRef} style={cursorDotStyles}></div>
    </>
  );
};

export default CustomCursor;