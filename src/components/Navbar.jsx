// src/components/Navbar.jsx
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const Navbar = () => {
  const navRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const menuItemsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: 'power4.out' }
    );
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(menuRef.current, {
        clipPath: 'circle(150% at 95% 5%)',
        duration: 0.8,
        ease: 'power4.inOut',
      });
      gsap.fromTo(
        menuItemsRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          delay: 0.3,
          ease: 'power4.out',
        }
      );
    } else {
      gsap.to(menuRef.current, {
        clipPath: 'circle(0% at 95% 5%)',
        duration: 0.8,
        ease: 'power4.inOut',
      });
    }
  }, [isMenuOpen]);

  const handleNavClick = (sectionId) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const addToMenuRefs = (el) => {
    if (el && !menuItemsRef.current.includes(el)) {
      menuItemsRef.current.push(el);
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'works', label: 'Works' },
    { id: 'contact', label: 'Contact' },
  ];

  // INLINE STYLES
  const navStyles = {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    zIndex: '1000',
    padding: '20px 60px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'rgba(245, 245, 240, 0.95)',
    backdropFilter: 'blur(10px)',
    borderBottom: '2px solid rgba(0, 0, 0, 0.05)',
  };

  const logoStyles = {
    fontSize: '24px',
    fontWeight: '900',
    color: '#1a1a1a',
    textDecoration: 'none',
    fontFamily: '"Courier New", monospace',
    letterSpacing: '2px',
    position: 'relative',
    padding: '8px 16px',
    background: '#FFF9C4',
    border: '2px solid #1a1a1a',
    borderRadius: '4px',
    transform: 'rotate(-2deg)',
    boxShadow: '2px 2px 0 #1a1a1a',
    transition: 'all 0.2s',
  };

  const logoHoverStyles = {
    transform: 'rotate(0deg) translateY(-2px)',
    boxShadow: '3px 3px 0 #1a1a1a',
  };

  const navLinksContainerStyles = {
    display: 'flex',
    gap: '30px',
    alignItems: 'center',
  };

  const navLinkStyles = {
    fontSize: '14px',
    fontWeight: '700',
    color: '#333',
    textDecoration: 'none',
    fontFamily: '"Comic Sans MS", cursive, sans-serif',
    position: 'relative',
    padding: '6px 12px',
    transition: 'all 0.2s',
  };

  const navLinkHoverStyles = {
    color: '#1a1a1a',
    background: 'rgba(0, 0, 0, 0.05)',
    borderRadius: '4px',
  };

  const menuToggleStyles = {
    display: 'none',
    width: '50px',
    height: '50px',
    background: '#1a1a1a',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    position: 'relative',
    transition: 'all 0.3s',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
  };

  const menuToggleHoverStyles = {
    transform: 'scale(1.1)',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)',
  };

  const hamburgerStyles = {
    position: 'absolute',
    width: '24px',
    height: '2px',
    background: '#fff',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    transition: 'all 0.3s',
  };

  const hamburgerBeforeStyles = {
    content: '""',
    position: 'absolute',
    width: '24px',
    height: '2px',
    background: '#fff',
    top: '-8px',
    left: '0',
    transition: 'all 0.3s',
  };

  const hamburgerAfterStyles = {
    content: '""',
    position: 'absolute',
    width: '24px',
    height: '2px',
    background: '#fff',
    bottom: '-8px',
    left: '0',
    transition: 'all 0.3s',
  };

  // Fullscreen menu
  const fullscreenMenuStyles = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    background: '#f5f5f0',
    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.015) 2px, rgba(0, 0, 0, 0.015) 4px)',
    zIndex: '999',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    clipPath: 'circle(0% at 95% 5%)',
  };

  const menuContentStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '30px',
  };

  const menuItemStyles = {
    fontSize: 'clamp(32px, 5vw, 64px)',
    fontWeight: '800',
    color: '#1a1a1a',
    textDecoration: 'none',
    fontFamily: '"Courier New", monospace',
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    transition: 'all 0.3s',
    padding: '10px 30px',
    position: 'relative',
  };

  const menuItemHoverStyles = {
    transform: 'translateX(20px)',
    background: 'rgba(0, 0, 0, 0.05)',
    borderRadius: '8px',
  };

  const menuItemNumberStyles = {
    fontSize: '18px',
    color: '#999',
    fontWeight: '700',
  };

  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredMenuItem, setHoveredMenuItem] = useState(null);
  const [logoHovered, setLogoHovered] = useState(false);
  const [toggleHovered, setToggleHovered] = useState(false);

  return (
    <>
      <nav ref={navRef} style={navStyles}>
        <div
          style={logoHovered ? {...logoStyles, ...logoHoverStyles} : logoStyles}
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
        >
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
            style={{textDecoration: 'none', color: 'inherit'}}
          >
            ASHIK.
          </a>
        </div>

        <div style={navLinksContainerStyles}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              style={hoveredLink === link.id ? {...navLinkStyles, ...navLinkHoverStyles} : navLinkStyles}
              onMouseEnter={() => setHoveredLink(link.id)}
              onMouseLeave={() => setHoveredLink(null)}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.id);
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          style={toggleHovered ? {...menuToggleStyles, ...menuToggleHoverStyles} : menuToggleStyles}
          onMouseEnter={() => setToggleHovered(true)}
          onMouseLeave={() => setToggleHovered(false)}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span style={hamburgerStyles}>
            <span style={hamburgerBeforeStyles}></span>
            <span style={hamburgerAfterStyles}></span>
          </span>
        </button>
      </nav>

      {/* Fullscreen Menu */}
      <div ref={menuRef} style={fullscreenMenuStyles}>
        <div style={menuContentStyles}>
          {navLinks.map((link, index) => (
            <a
              key={link.id}
              ref={addToMenuRefs}
              href={`#${link.id}`}
              style={hoveredMenuItem === link.id ? {...menuItemStyles, ...menuItemHoverStyles} : menuItemStyles}
              onMouseEnter={() => setHoveredMenuItem(link.id)}
              onMouseLeave={() => setHoveredMenuItem(null)}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.id);
              }}
            >
              <span style={menuItemNumberStyles}>0{index + 1}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Responsive CSS for mobile menu toggle */}
      <style>{`
        @media (max-width: 968px) {
          nav > div:nth-child(2) {
            display: none !important;
          }
          nav > button {
            display: block !important;
          }
        }
        @media (min-width: 969px) {
          nav > button {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;