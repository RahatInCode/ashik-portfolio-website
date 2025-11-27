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
  const imageRef = useRef(null);
  const imageContainerRef = useRef(null);

  // Your Data
  const heroData = {
    eyebrow: 'Frontend Developer',
    firstName: 'ASHIK',
    lastName: 'UZZAMAN',
    role: 'Building modern web experiences with React & Next.js',
    tagline: 'Focused on creating performant, accessible, and beautifully crafted digital products.',
    year: '© 2024',
    // Replace with your actual image
    image: '/images/hero-photo.jpg',
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      // Eyebrow animation
      tl.fromTo(
        '.hero-eyebrow',
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' }
      );

      // Letters animation
      tl.fromTo(
        lettersRef.current,
        {
          y: 200,
          opacity: 0,
          rotationX: -90,
        },
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

      // Image animation
      tl.fromTo(
        imageContainerRef.current,
        { 
          opacity: 0, 
          scale: 0.8,
          clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'
        },
        { 
          opacity: 1, 
          scale: 1,
          clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)',
          duration: 1.2, 
          ease: 'power4.out' 
        },
        '-=0.8'
      );

      // Subtitle animation
      tl.fromTo(
        subtitleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.6'
      );

      // CTA animation
      tl.fromTo(
        ctaRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
        '-=0.4'
      );

      // Scroll indicator animation
      tl.fromTo(
        scrollIndicatorRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: 'power3.out' },
        '-=0.2'
      );

      // Parallax on scroll
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

      // Image parallax on scroll
      gsap.to(imageRef.current, {
        yPercent: 20,
        scale: 1.1,
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

  // Anti-gravity effect for letters
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;

    lettersRef.current.forEach((letter) => {
      if (!letter) return;

      const rect = letter.getBoundingClientRect();
      const letterCenterX = rect.left + rect.width / 2;
      const letterCenterY = rect.top + rect.height / 2;

      const deltaX = clientX - letterCenterX;
      const deltaY = clientY - letterCenterY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      const maxDistance = 250;
      const intensity = Math.max(0, 1 - distance / maxDistance);

      const moveX = -deltaX * intensity * 0.2;
      const moveY = -deltaY * intensity * 0.4;
      const rotate = deltaX * intensity * 0.08;

      gsap.to(letter, {
        x: moveX,
        y: moveY,
        rotation: rotate,
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

  // Image magnetic effect
  const handleImageMouseMove = (e) => {
    if (!imageContainerRef.current) return;
    
    const rect = imageContainerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(imageContainerRef.current, {
      x: x * 0.1,
      y: y * 0.1,
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
      rotationY: 0,
      rotationX: 0,
      duration: 0.8,
      ease: 'elastic.out(1, 0.5)',
    });
  };

  const addToLetterRefs = (el) => {
    if (el && !lettersRef.current.includes(el)) {
      lettersRef.current.push(el);
    }
  };

  const renderAnimatedText = (text) => {
    return text.split('').map((char, idx) => (
      <span
        key={`hero-char-${idx}`}
        ref={addToLetterRefs}
        className="hero-letter"
        style={{ display: 'inline-block' }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="hero-content">
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
          <button 
            className="cta-button hover-target"
            onClick={() => scrollToSection('works')}
          >
            View Projects
          </button>
          <button 
            className="cta-button cta-button-outline hover-target"
            onClick={() => scrollToSection('contact')}
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Hero Image */}
      <div 
        ref={imageContainerRef}
        className="hero-image-container"
        onMouseMove={handleImageMouseMove}
        onMouseLeave={handleImageMouseLeave}
      >
        <div className="hero-image-wrapper">
          <img 
            ref={imageRef}
            src={heroData.image} 
            alt="Ashikuzzaman" 
            className="hero-image"
          />
          <div className="hero-image-overlay"></div>
        </div>
        <div className="hero-image-frame"></div>
        <div className="hero-image-label">
          <span>Based in</span>
          <span>Bangladesh</span>
        </div>
      </div>

      <div ref={scrollIndicatorRef} className="scroll-indicator">
        <div className="scroll-line"></div>
        <span>Scroll</span>
      </div>

      <div className="hero-year">{heroData.year}</div>

      <div className="hero-decoration">
        <div className="hero-grid-overlay"></div>
      </div>
    </section>
  );
};

export default Hero;