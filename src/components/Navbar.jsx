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

  // Updated with Services
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'works', label: 'Works' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <nav ref={navRef} className="navbar">
        <div className="nav-logo hover-target">
          <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
            ASHIK.
          </a>
        </div>
        <div className="nav-links">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="nav-link hover-target"
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
          className="menu-toggle hover-target"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </button>
      </nav>

      {/* Full Screen Menu */}
      <div ref={menuRef} className="fullscreen-menu">
        <div className="menu-content">
          {navLinks.map((link, index) => (
            <a
              key={link.id}
              ref={addToMenuRefs}
              href={`#${link.id}`}
              className="menu-item hover-target"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.id);
              }}
            >
              <span className="menu-item-number">0{index + 1}</span>
              <span className="menu-item-text">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;