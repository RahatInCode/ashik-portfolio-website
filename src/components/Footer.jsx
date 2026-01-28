// src/components/Footer.jsx
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const bigNameRef = useRef(null);
  const columnRefs = useRef([]);

  const footerData = {
    name: 'ASHIKUZZAMAN',
    email: 'ahmedrahat.dev@gmail.com',
    phone: '+880 1933-471091',
    location: 'Khulna, Bangladesh',
    resumeLink: '/Ashik_Junior-Frontend-Developer_Resume.pdf',  
    resumeFileName: 'Ashikuzzaman_Resume.pdf', 
    links: {
      navigation: [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Works', href: '#works' },
        { label: 'Contact', href: '#contact' },
      ],
      social: [
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ahmed-rahat-5a6145387/' },
        { label: 'GitHub', href: 'https://github.com/RahatInCode' },
        { label: 'Twitter', href: 'https://x.com/AhmedRahat691' },
      ],
    },
    year: new Date().getFullYear(),
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      columnRefs.current.forEach((column, index) => {
        if (!column) return;
        gsap.fromTo(
          column,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: footerRef.current,
              start: 'top 85%',
            },
          }
        );
      });

      gsap.fromTo(
        bigNameRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: bigNameRef.current,
            start: 'top 90%',
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const addToColumnRefs = (el) => {
    if (el && !columnRefs.current.includes(el)) {
      columnRefs.current.push(el);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // INLINE STYLES
  const footerStyles = {
    position: 'relative',
    padding: '80px 0 40px',
    background: '#f5f5f0',
    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.015) 2px, rgba(0, 0, 0, 0.015) 4px)',
    borderTop: '3px dashed rgba(0, 0, 0, 0.1)',
  };

  const containerStyles = {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 60px',
  };

  const mainGridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '40px',
    marginBottom: '60px',
  };

  const columnStyles = {
    background: '#fff',
    padding: '24px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    border: '2px solid rgba(0, 0, 0, 0.05)',
    transform: 'rotate(-1deg)',
  };

  const labelStyles = {
    display: 'block',
    fontSize: '11px',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    color: '#999',
    marginBottom: '16px',
    fontWeight: '700',
    fontFamily: '"Courier New", monospace',
  };

  const linkStyles = {
    display: 'block',
    fontSize: '15px',
    color: '#333',
    textDecoration: 'none',
    marginBottom: '10px',
    fontFamily: '"Comic Sans MS", cursive, sans-serif',
    fontWeight: '600',
    transition: 'all 0.2s',
    paddingLeft: '20px',
    position: 'relative',
  };

  const contactValueStyles = {
    fontSize: '14px',
    color: '#333',
    lineHeight: '1.8',
    fontFamily: '"Comic Sans MS", cursive, sans-serif',
    display: 'block',
    marginBottom: '8px',
    textDecoration: 'none',
  };

  const resumeBtnStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 24px',
    marginTop: '16px',
    fontSize: '13px',
    fontWeight: '700',
    background: '#1a1a1a',
    color: '#fff',
    border: 'none',
    borderRadius: '50px',
    textDecoration: 'none',
    fontFamily: '"Courier New", monospace',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    transition: 'all 0.3s',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  };

  const resumeBtnHoverStyles = {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.25)',
  };

  // Big Name Section
  const nameContainerStyles = {
    textAlign: 'center',
    marginBottom: '60px',
    position: 'relative',
  };

  const bigNameStyles = {
    fontSize: 'clamp(40px, 8vw, 120px)',
    fontWeight: '900',
    color: '#1a1a1a',
    fontFamily: '"Courier New", monospace',
    letterSpacing: '4px',
    textTransform: 'uppercase',
    opacity: '0.15',
    userSelect: 'none',
  };

  const thankYouCardStyles = {
    background: '#B2DFDB',
    padding: '40px',
    borderRadius: '12px',
    textAlign: 'center',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
    border: '3px solid rgba(0, 0, 0, 0.1)',
    transform: 'rotate(-1deg)',
    marginBottom: '60px',
    position: 'relative',
  };

  const thankYouTextStyles = {
    fontSize: 'clamp(28px, 4vw, 48px)',
    fontWeight: '800',
    color: '#1a1a1a',
    marginBottom: '12px',
    fontFamily: '"Courier New", monospace',
  };

  const thankYouSubtextStyles = {
    fontSize: '16px',
    color: '#333',
    fontFamily: '"Comic Sans MS", cursive, sans-serif',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.6',
  };

  // Decorative stamps
  const stampStyles = (emoji, rotation) => ({
    position: 'absolute',
    fontSize: '48px',
    transform: `rotate(${rotation}deg)`,
    opacity: '0.6',
  });

  // Bottom section
  const bottomStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '32px',
    borderTop: '2px dashed rgba(0, 0, 0, 0.1)',
    flexWrap: 'wrap',
    gap: '20px',
  };

  const copyrightStyles = {
    fontSize: '13px',
    color: '#666',
    fontFamily: '"Courier New", monospace',
  };

  const creditsStyles = {
    fontSize: '14px',
    color: '#333',
    fontFamily: '"Comic Sans MS", cursive, sans-serif',
  };

  const heartStyles = {
    color: '#ff6b6b',
    display: 'inline-block',
    animation: 'pulse 1.5s infinite',
  };

  const backToTopStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 20px',
    fontSize: '13px',
    fontWeight: '700',
    background: '#fff',
    color: '#1a1a1a',
    border: '2px solid #1a1a1a',
    borderRadius: '50px',
    cursor: 'pointer',
    fontFamily: '"Courier New", monospace',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    transition: 'all 0.3s',
  };

  const backToTopHoverStyles = {
    background: '#1a1a1a',
    color: '#fff',
    transform: 'translateY(-2px)',
  };

  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredSocialLink, setHoveredSocialLink] = useState(null);
  const [resumeHovered, setResumeHovered] = useState(false);
  const [backToTopHovered, setBackToTopHovered] = useState(false);

  return (
    <footer ref={footerRef} style={footerStyles}>
      <div style={containerStyles}>
        {/* Thank You Card */}
        <div style={thankYouCardStyles}>
          {/* Decorative stamps */}
          <div style={{...stampStyles('🌟', 15), top: '10px', left: '20px'}}>🌟</div>
          <div style={{...stampStyles('✨', -10), top: '10px', right: '20px'}}>✨</div>
          <div style={{...stampStyles('🎯', 12), bottom: '10px', left: '30px'}}>🎯</div>
          <div style={{...stampStyles('💡', -8), bottom: '10px', right: '30px'}}>💡</div>
          
          <h2 style={thankYouTextStyles}>Thanks for stopping by!</h2>
          <p style={thankYouSubtextStyles}>
            Whether you're looking for help with a project or just browsing, I appreciate you taking the time. Let's create something great together!
          </p>
        </div>

        {/* Main Grid */}
        <div style={mainGridStyles}>
          {/* Navigation */}
          <div ref={addToColumnRefs} style={columnStyles}>
            <span style={labelStyles}>Quick Links</span>
            <div>
              {footerData.links.navigation.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    ...linkStyles,
                    color: hoveredLink === link.label ? '#1a1a1a' : '#333',
                    paddingLeft: hoveredLink === link.label ? '24px' : '20px',
                  }}
                  onClick={(e) => handleNavClick(e, link.href)}
                  onMouseEnter={() => setHoveredLink(link.label)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  → {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div ref={addToColumnRefs} style={{...columnStyles, transform: 'rotate(1deg)'}}>
            <span style={labelStyles}>Social</span>
            <div>
              {footerData.links.social.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    ...linkStyles,
                    color: hoveredSocialLink === link.label ? '#1a1a1a' : '#333',
                    paddingLeft: hoveredSocialLink === link.label ? '24px' : '20px',
                  }}
                  onMouseEnter={() => setHoveredSocialLink(link.label)}
                  onMouseLeave={() => setHoveredSocialLink(null)}
                >
                  → {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div ref={addToColumnRefs} style={{...columnStyles, transform: 'rotate(-2deg)'}}>
            <span style={labelStyles}>Contact</span>
            <div>
              <a href={`mailto:${footerData.email}`} style={contactValueStyles}>
                {footerData.email}
              </a>
              <a href={`tel:${footerData.phone.replace(/\s/g, '')}`} style={contactValueStyles}>
                {footerData.phone}
              </a>
              <span style={contactValueStyles}>
                📍 {footerData.location}
              </span>
            </div>
            
            <a
              href={footerData.resumeLink}
              download={footerData.resumeFileName}
              style={resumeHovered ? {...resumeBtnStyles, ...resumeBtnHoverStyles} : resumeBtnStyles}
              onMouseEnter={() => setResumeHovered(true)}
              onMouseLeave={() => setResumeHovered(false)}
            >
              <span>Download Resume</span>
              <span>📄</span>
            </a>
          </div>
        </div>

        {/* Big Name */}
        <div style={nameContainerStyles}>
          <div ref={bigNameRef} style={bigNameStyles}>
            {footerData.name}
          </div>
        </div>

        {/* Bottom */}
        <div style={bottomStyles}>
          <span style={copyrightStyles}>
            © {footerData.year} — All Rights Reserved
          </span>
          
          <div style={creditsStyles}>
            Made with <span style={heartStyles}>♥</span> by Ashikuzzaman
          </div>
          
          <button 
            style={backToTopHovered ? {...backToTopStyles, ...backToTopHoverStyles} : backToTopStyles}
            onClick={scrollToTop}
            onMouseEnter={() => setBackToTopHovered(true)}
            onMouseLeave={() => setBackToTopHovered(false)}
          >
            <span>↑</span>
            <span>Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;