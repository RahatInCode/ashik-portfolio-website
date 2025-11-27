// src/components/Footer.jsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const bigNameRef = useRef(null);
  const columnRefs = useRef([]);

  // ✅ Update resumeLink to match your file name
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
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: bigNameRef.current,
            start: 'top 90%',
          },
        }
      );

      gsap.to(bigNameRef.current, {
        x: -50,
        scrollTrigger: {
          trigger: bigNameRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
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

  const renderBigName = () => {
    return footerData.name.split('').map((char, idx) => (
      <span key={`bigname-${idx}`}>{char}</span>
    ));
  };

  return (
    <footer ref={footerRef} className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Navigation Links */}
          <div ref={addToColumnRefs} className="footer-column">
            <span className="footer-label">Navigation</span>
            <div className="footer-links">
              {footerData.links.navigation.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="footer-link hover-target"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                  <span className="footer-link-arrow">→</span>
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div ref={addToColumnRefs} className="footer-column">
            <span className="footer-label">Connect</span>
            <div className="footer-links">
              {footerData.links.social.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link hover-target"
                >
                  {link.label}
                  <span className="footer-link-arrow">↗</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div ref={addToColumnRefs} className="footer-column">
            <span className="footer-label">Get in Touch</span>
            <div className="footer-contact-value">
              <a href={`mailto:${footerData.email}`} className="hover-target">
                {footerData.email}
              </a>
              <br />
              <a href={`tel:${footerData.phone.replace(/\s/g, '')}`} className="hover-target">
                {footerData.phone}
              </a>
              <br />
              <span>{footerData.location}</span>
            </div>
            
            {/* ✅ DOWNLOAD RESUME BUTTON - Fixed */}
            <a
              href={footerData.resumeLink}
              download={footerData.resumeFileName}
              className="resume-btn hover-target"
            >
              <span>Download Resume</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Big Name Section */}
        <div className="footer-name-section">
          <div ref={bigNameRef} className="footer-big-name">
            {renderBigName()}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <span className="footer-copyright">
            © {footerData.year} — All Rights Reserved
          </span>
          
          <div className="footer-credits">
            Designed & Built with <span>♥</span> by Ashikuzzaman
          </div>
          
          <button 
            className="back-to-top hover-target" 
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <div className="back-to-top-arrow">↑</div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;