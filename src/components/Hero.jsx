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
    tagline: 'Helping agencies handle overflow and small businesses build digital solutions',
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
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.03,
          ease: 'power4.out',
        },
        '-=0.4'
      );

      tl.fromTo(
        imageContainerRef.current,
        { opacity: 0, scale: 0.95, rotation: -5 },
        { opacity: 1, scale: 1, rotation: 3, duration: 1.2, ease: 'back.out(1.2)' },
        '-=0.6'
      );

      tl.fromTo(
        subtitleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.8'
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

      // Parallax effects
      gsap.to(titleRef.current, {
        yPercent: 20,
        opacity: 0.6,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
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
        x: -dx * intensity * 0.15,
        y: -dy * intensity * 0.15,
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
        duration: 0.8,
        ease: 'elastic.out(1, 0.4)',
      });
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
        style={{ display: 'inline-block' }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));

  // INLINE STYLES
  const heroStyles = {
    position: 'relative',
    minHeight: '100vh',
    background: '#f5f5f0',
    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.015) 2px, rgba(0, 0, 0, 0.015) 4px)',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    padding: '100px 0 60px',
  };

  const heroInnerStyles = {
    width: '100%',
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 60px',
    display: 'grid',
    gridTemplateColumns: '1.2fr 1fr',
    gap: '80px',
    alignItems: 'center',
  };

  const heroContentStyles = {
    maxWidth: '700px',
  };

  const eyebrowStyles = {
    display: 'inline-block',
    fontSize: '11px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    color: '#666',
    fontWeight: '600',
    marginBottom: '24px',
    padding: '8px 16px',
    background: '#FFF9C4',
    borderRadius: '20px',
    border: '2px solid rgba(0, 0, 0, 0.1)',
    fontFamily: '"Courier New", monospace',
  };

  const titleStyles = {
    marginBottom: '30px',
  };

  const nameLineStyles = {
    fontSize: 'clamp(52px, 8vw, 80px)',
    fontWeight: '900',
    lineHeight: '0.95',
    color: '#1a1a1a',
    fontFamily: '"Courier New", monospace',
    letterSpacing: '2px',
  };

  const outlinedNameStyles = {
    ...nameLineStyles,
    WebkitTextStroke: '2px #1a1a1a',
    color: 'transparent',
  };

  const subtitleStyles = {
    marginBottom: '40px',
  };

  const roleStyles = {
    fontSize: '20px',
    color: '#1a1a1a',
    marginBottom: '12px',
    fontWeight: '600',
    fontFamily: '"Comic Sans MS", cursive, sans-serif',
    lineHeight: '1.4',
  };

  const taglineStyles = {
    fontSize: '15px',
    color: '#666',
    lineHeight: '1.6',
    fontFamily: '"Comic Sans MS", cursive, sans-serif',
  };

  const ctaContainerStyles = {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
  };

  const ctaButtonStyles = {
    padding: '16px 32px',
    fontSize: '15px',
    fontWeight: '700',
    background: '#1a1a1a',
    color: '#fff',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    fontFamily: '"Courier New", monospace',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    transition: 'all 0.3s',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
  };

  const ctaButtonOutlineStyles = {
    ...ctaButtonStyles,
    background: 'transparent',
    color: '#1a1a1a',
    border: '2px solid #1a1a1a',
    boxShadow: 'none',
  };

  const ctaButtonHoverStyles = {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 24px rgba(0, 0, 0, 0.3)',
  };

  // Polaroid Image
  const polaroidContainerStyles = {
    position: 'relative',
    justifySelf: 'end',
  };

  const polaroidStyles = {
    background: '#fff',
    padding: '16px 16px 60px',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
    transform: 'rotate(3deg)',
    position: 'relative',
    maxWidth: '380px',
  };

  const imageWrapperStyles = {
    width: '100%',
    aspectRatio: '4/5',
    overflow: 'hidden',
    background: '#f0f0f0',
    marginBottom: '16px',
  };

  const imageStyles = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center 20%',
    display: 'block',
    filter: 'grayscale(10%) contrast(1.05)',
  };

  const captionStyles = {
    textAlign: 'center',
    fontSize: '16px',
    color: '#333',
    fontFamily: '"Comic Sans MS", cursive, sans-serif',
    fontWeight: '600',
  };

  const tapeStyles = {
    position: 'absolute',
    top: '-12px',
    left: '50%',
    transform: 'translateX(-50%) rotate(-5deg)',
    width: '100px',
    height: '30px',
    background: 'rgba(255, 255, 255, 0.5)',
    boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)',
    borderRadius: '2px',
    border: '1px solid rgba(0, 0, 0, 0.05)',
  };

  const pinStyles = {
    position: 'absolute',
    top: '8px',
    right: '20px',
    width: '20px',
    height: '20px',
    background: 'linear-gradient(135deg, #ff6b6b, #ee5a52)',
    borderRadius: '50%',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2), inset 0 1px 2px rgba(255, 255, 255, 0.3)',
  };

  const stickyNoteStyles = (color, rotation, position) => ({
    position: 'absolute',
    background: color,
    padding: '16px',
    borderRadius: '4px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    transform: `rotate(${rotation}deg)`,
    fontSize: '13px',
    fontFamily: '"Comic Sans MS", cursive, sans-serif',
    fontWeight: '600',
    color: '#333',
    border: '2px solid rgba(0, 0, 0, 0.05)',
    zIndex: 10,
    ...position,
  });

  const scrollIndicatorStyles = {
    position: 'absolute',
    bottom: '40px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px',
    opacity: 0,
  };

  const scrollLineStyles = {
    width: '2px',
    height: '50px',
    background: 'linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.3), transparent)',
  };

  const scrollTextStyles = {
    fontSize: '11px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    color: '#999',
    fontFamily: '"Courier New", monospace',
    fontWeight: '600',
  };

  const yearStyles = {
    position: 'absolute',
    bottom: '40px',
    right: '60px',
    fontSize: '11px',
    color: '#999',
    letterSpacing: '1px',
    fontFamily: '"Courier New", monospace',
  };

  return (
    <section id="home" ref={heroRef} style={heroStyles}>
      <div style={heroInnerStyles}>
        {/* LEFT SIDE - Content */}
        <div
          style={heroContentStyles}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="hero-eyebrow" style={eyebrowStyles}>
            {heroData.eyebrow}
          </div>

          <div ref={titleRef} style={titleStyles}>
            <div style={nameLineStyles}>
              {renderAnimatedText(heroData.firstName)}
            </div>
            <div style={outlinedNameStyles}>
              {renderAnimatedText(heroData.lastName)}
            </div>
          </div>

          <div ref={subtitleRef} style={subtitleStyles}>
            <p style={roleStyles}>{heroData.role}</p>
            <p style={taglineStyles}>{heroData.tagline}</p>
          </div>

          <div ref={ctaRef} style={ctaContainerStyles}>
            <button
              style={ctaButtonStyles}
              onMouseEnter={(e) => Object.assign(e.target.style, ctaButtonHoverStyles)}
              onMouseLeave={(e) => Object.assign(e.target.style, ctaButtonStyles)}
              onClick={() => document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </button>
            <button
              style={ctaButtonOutlineStyles}
              onMouseEnter={(e) => Object.assign(e.target.style, {...ctaButtonOutlineStyles, ...ctaButtonHoverStyles})}
              onMouseLeave={(e) => Object.assign(e.target.style, ctaButtonOutlineStyles)}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* RIGHT SIDE - Polaroid */}
        <div style={polaroidContainerStyles}>
          <div ref={imageContainerRef} style={polaroidStyles}>
            {/* Tape */}
            <div style={tapeStyles}></div>
            
            {/* Pin */}
            <div style={pinStyles}>
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '8px',
                height: '8px',
                background: 'rgba(255, 255, 255, 0.4)',
                borderRadius: '50%',
              }}></div>
            </div>

            {/* Image */}
            <div style={imageWrapperStyles}>
              <img
                src={heroData.image}
                alt="Ashik Uzzaman"
                style={imageStyles}
              />
            </div>

            {/* Caption */}
            <div style={captionStyles}>
              Based in Bangladesh 📍
            </div>
          </div>

          {/* Decorative sticky notes */}
          <div style={stickyNoteStyles('#B2DFDB', -8, { top: '-20px', left: '-60px' })}>
            Available for<br/>projects! ✨
          </div>
          <div style={stickyNoteStyles('#F8BBD0', 12, { bottom: '-30px', right: '-40px' })}>
            Let's build<br/>together! 🚀
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div ref={scrollIndicatorRef} style={scrollIndicatorStyles}>
        <div style={scrollLineStyles}></div>
        <span style={scrollTextStyles}>Scroll</span>
      </div>

      {/* Year */}
      <div style={yearStyles}>{heroData.year}</div>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 1024px) {
          #home > div:first-child {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
            text-align: center;
          }
          #home img {
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;