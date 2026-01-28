// src/components/Hero.jsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const lettersRef = useRef([]);
  const scrollIndicatorRef = useRef(null);
  const ctaRef = useRef(null);
  const imageContainerRef = useRef(null);

  const heroData = {
    eyebrow: 'Frontend Developer',
    firstName: 'ASHIK',
    lastName: 'UZZAMAN',
    role: 'Building modern web experiences with React & Next.js',
    tagline:
      'Focused on creating performant, accessible, and beautifully crafted digital products.',
    year: '© 2024',
    image: '/images/hero-photo.jpg',
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.fromTo(
        '.hero-eyebrow',
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' }
      );

      tl.fromTo(
        lettersRef.current,
        { y: 200, opacity: 0, rotationX: -90 },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 1,
          stagger: 0.04,
          ease: 'power4.out',
        },
        '-=0.4'
      );

      tl.fromTo(
        imageContainerRef.current,
        { opacity: 0, scale: 0.92 },
        { opacity: 1, scale: 1, duration: 1.2, ease: 'power4.out' },
        '-=0.8'
      );

      tl.fromTo(
        subtitleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.6'
      );

      tl.fromTo(
        ctaRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
        '-=0.4'
      );

      tl.fromTo(
        scrollIndicatorRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6 },
        '-=0.2'
      );

      // Text parallax
      gsap.to(titleRef.current, {
        yPercent: 30,
        opacity: 0.5,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      });

      // Image parallax (container only)
      gsap.to(imageContainerRef.current, {
        y: 60,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;

    lettersRef.current.forEach((letter) => {
      if (!letter) return;

      const rect = letter.getBoundingClientRect();
      const dx = clientX - (rect.left + rect.width / 2);
      const dy = clientY - (rect.top + rect.height / 2);
      const dist = Math.sqrt(dx * dx + dy * dy);
      const intensity = Math.max(0, 1 - dist / 250);

      gsap.to(letter, {
        x: -dx * intensity * 0.2,
        y: -dy * intensity * 0.4,
        rotation: dx * intensity * 0.08,
        duration: 0.4,
        ease: 'power2.out',
      });
    });
  };

  const handleMouseLeave = () => {
    lettersRef.current.forEach((letter) => {
      if (!letter) return;
      gsap.to(letter, {
        x: 0,
        y: 0,
        rotation: 0,
        duration: 1,
        ease: 'elastic.out(1, 0.4)',
      });
    });
  };

  const handleImageMouseMove = (e) => {
    const rect = imageContainerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(imageContainerRef.current, {
      x: x * 0.08,
      y: y * 0.08,
      rotationY: x * 0.02,
      rotationX: -y * 0.02,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  const handleImageMouseLeave = () => {
    gsap.to(imageContainerRef.current, {
      x: 0,
      y: 0,
      rotationX: 0,
      rotationY: 0,
      duration: 0.8,
      ease: 'elastic.out(1, 0.5)',
    });
  };

  const addToLetterRefs = (el) => {
    if (el && !lettersRef.current.includes(el)) {
      lettersRef.current.push(el);
    }
  };

  const renderAnimatedText = (text) =>
    text.split('').map((char, i) => (
      <span
        key={i}
        ref={addToLetterRefs}
        className="hero-letter"
        style={{ display: 'inline-block' }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));

  // INLINE STYLES - This will override everything
  const imageStyles = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center 20%',
    display: 'block',
    userSelect: 'none',
    pointerEvents: 'none',
  };

  const imageWrapperStyles = {
    position: 'relative',
    width: '100%',
    height: '100%',
    borderRadius: '20px',
    overflow: 'hidden',
    background: '#1a1a1a',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
  };

  const imageContainerStyles = {
    position: 'relative',
    width: '380px',
    height: '500px',
    perspective: '1000px',
    transformStyle: 'preserve-3d',
    justifySelf: 'end',
  };

  const heroInnerStyles = {
    width: '100%',
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 60px',
    display: 'grid',
    gridTemplateColumns: '1fr auto',
    gap: '80px',
    alignItems: 'center',
    minHeight: '100vh',
  };

  return (
    <section id="home" ref={heroRef} className="hero">
      <div className="hero-inner" style={heroInnerStyles}>
        <div
          className="hero-content"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="hero-eyebrow">{heroData.eyebrow}</div>

          <div ref={titleRef} className="hero-title">
            <div className="hero-name-line">
              {renderAnimatedText(heroData.firstName)}
            </div>
            <div className="hero-name-line outlined">
              {renderAnimatedText(heroData.lastName)}
            </div>
          </div>

          <div ref={subtitleRef} className="hero-subtitle">
            <p className="hero-role">{heroData.role}</p>
            <p className="hero-tagline">{heroData.tagline}</p>
          </div>

          <div ref={ctaRef} className="hero-cta">
            <button className="cta-button">View Projects</button>
            <button className="cta-button cta-button-outline">
              Get In Touch
            </button>
          </div>
        </div>

        <div
          ref={imageContainerRef}
          className="hero-image-container"
          style={imageContainerStyles}
          onMouseMove={handleImageMouseMove}
          onMouseLeave={handleImageMouseLeave}
        >
          <div className="hero-image-wrapper" style={imageWrapperStyles}>
            <img
              src={heroData.image}
              alt="Ashik Uzzaman"
              className="hero-image"
              style={imageStyles}
            />
            <div className="hero-image-overlay"></div>
          </div>

          <div className="hero-image-frame"></div>

          <div className="hero-image-label">
            <span>Based in</span>
            <span>Bangladesh</span>
          </div>
        </div>
      </div>

      <div ref={scrollIndicatorRef} className="scroll-indicator">
        <div className="scroll-line"></div>
        <span>Scroll</span>
      </div>

      <div className="hero-year">{heroData.year}</div>
    </section>
  );
};

export default Hero;