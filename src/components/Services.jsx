// src/components/Services.jsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const notesRef = useRef([]);

  const servicesData = [
    {
      id: 1,
      color: '#FFF9C4', // Soft yellow
      rotation: -3,
      title: 'Overflow Support',
      subtitle: 'For Agencies',
      description: 'Your team is swamped? I step in to handle the overflow. Frontend builds, React components, API integrations—whatever keeps your pipeline moving.',
      tags: ['React Development', 'Quick Turnaround', 'Team Extension'],
    },
    {
      id: 2,
      color: '#B2DFDB', // Soft mint
      rotation: 2,
      title: 'Website Solutions',
      subtitle: 'For Small Business',
      description: 'Need a website that actually works for your business? I build fast, modern sites that help you get customers and grow.',
      tags: ['Business Websites', 'E-Commerce', 'Custom Solutions'],
    },
    {
      id: 3,
      color: '#F8BBD0', // Soft pink
      rotation: -2,
      title: 'Fix & Rescue',
      subtitle: 'Troubleshooting',
      description: 'Site broken? Performance issues? Bugs piling up? I diagnose problems fast and get things working again.',
      tags: ['Bug Fixes', 'Performance', 'Code Cleanup'],
    },
    {
      id: 4,
      color: '#BBDEFB', // Soft blue
      rotation: 3,
      title: 'AI Integration',
      subtitle: 'Automation',
      description: 'Let AI handle the repetitive stuff. Auto-booking, chatbots, customer support automation—I integrate smart solutions that save time.',
      tags: ['AI Chatbots', 'Auto Booking', 'Smart Forms'],
    },
    {
      id: 5,
      color: '#D1C4E9', // Soft purple
      rotation: -1,
      title: 'Landing Pages',
      subtitle: 'High-Converting',
      description: 'Need to launch fast? I create landing pages that look great and convert visitors into customers.',
      tags: ['Fast Delivery', 'Mobile-First', 'SEO Ready'],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
          },
        }
      );

      // Sticky notes animation
      notesRef.current.forEach((note, index) => {
        if (!note) return;

        const rotation = parseFloat(note.dataset.rotation);
        gsap.fromTo(
          note,
          { y: 100, opacity: 0, rotation: 0 },
          {
            y: 0,
            opacity: 1,
            rotation: rotation,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'back.out(1.2)',
            scrollTrigger: {
              trigger: note,
              start: 'top 90%',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToNotesRefs = (el) => {
    if (el && !notesRef.current.includes(el)) {
      notesRef.current.push(el);
    }
  };

  const handleMouseEnter = (e) => {
    const note = e.currentTarget;
    gsap.to(note, {
      scale: 1.05,
      rotation: 0,
      duration: 0.3,
      ease: 'power2.out',
      zIndex: 10,
    });
  };

  const handleMouseLeave = (e) => {
    const note = e.currentTarget;
    const originalRotation = note.dataset.rotation;
    gsap.to(note, {
      scale: 1,
      rotation: originalRotation,
      duration: 0.4,
      ease: 'elastic.out(1, 0.5)',
      zIndex: 1,
    });
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Inline Styles
  const sectionStyles = {
    position: 'relative',
    padding: '120px 0',
    background: '#f5f5f0',
    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.015) 2px, rgba(0, 0, 0, 0.015) 4px)',
    overflow: 'hidden',
  };

  const containerStyles = {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 60px',
  };

  const headerStyles = {
    textAlign: 'center',
    marginBottom: '80px',
  };

  const labelStyles = {
    display: 'inline-block',
    fontSize: '11px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    color: '#666',
    fontWeight: '600',
    marginBottom: '20px',
    padding: '8px 16px',
    background: 'rgba(255, 255, 255, 0.6)',
    borderRadius: '20px',
    border: '1px solid rgba(0, 0, 0, 0.06)',
  };

  const headingStyles = {
    fontSize: 'clamp(36px, 5vw, 56px)',
    fontWeight: '800',
    lineHeight: '1.2',
    color: '#1a1a1a',
    marginBottom: '24px',
  };

  const highlightStyles = {
    position: 'relative',
    display: 'inline-block',
    color: '#ff6b6b',
    textDecoration: 'underline wavy',
    textDecorationColor: '#ff6b6b',
    textDecorationThickness: '3px',
    textUnderlineOffset: '6px',
  };

  const introStyles = {
    fontSize: '18px',
    lineHeight: '1.6',
    color: '#666',
    maxWidth: '600px',
    margin: '0 auto',
  };

  const boardStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '40px',
    padding: '60px 20px',
    marginBottom: '80px',
    position: 'relative',
  };

  const getNoteStyles = (color, rotation) => ({
    position: 'relative',
    background: color,
    padding: '32px 28px 28px',
    borderRadius: '2px',
    transform: `rotate(${rotation}deg)`,
    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
    cursor: 'pointer',
    minHeight: '320px',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.08), 0 8px 16px rgba(0, 0, 0, 0.06), inset 0 -1px 0 rgba(0, 0, 0, 0.05)',
    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0, 0, 0, 0.02) 1px, rgba(0, 0, 0, 0.02) 2px)',
  });

  const noteOverlayStyles = {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '100%',
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, transparent 50%)',
    borderRadius: '2px',
    pointerEvents: 'none',
  };

  const tapeStyles = {
    position: 'absolute',
    top: '-8px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80px',
    height: '24px',
    background: 'rgba(255, 255, 255, 0.4)',
    borderRadius: '2px',
    boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.15)',
    backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0, 0, 0, 0.03) 2px, rgba(0, 0, 0, 0.03) 4px)',
  };

  const tapeShineStyles = {
    content: '""',
    position: 'absolute',
    inset: '2px',
    background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.3), transparent)',
    borderRadius: '1px',
  };

  const contentStyles = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  };

  const noteHeaderStyles = {
    marginBottom: '16px',
  };

  const subtitleStyles = {
    display: 'inline-block',
    fontSize: '10px',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    color: 'rgba(0, 0, 0, 0.5)',
    fontWeight: '700',
    marginBottom: '8px',
  };

  const titleStyles = {
    fontSize: '24px',
    fontWeight: '800',
    color: '#1a1a1a',
    lineHeight: '1.2',
    margin: '0',
    fontFamily: '"Courier New", monospace',
    textTransform: 'uppercase',
    letterSpacing: '-0.5px',
  };

  const descriptionStyles = {
    fontSize: '14px',
    lineHeight: '1.6',
    color: '#333',
    marginBottom: '20px',
    flexGrow: 1,
    fontFamily: '"Comic Sans MS", cursive, sans-serif',
  };

  const tagsContainerStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginTop: 'auto',
  };

  const tagStyles = {
    display: 'inline-block',
    fontSize: '11px',
    padding: '4px 10px',
    background: 'rgba(0, 0, 0, 0.08)',
    borderRadius: '12px',
    color: '#333',
    fontWeight: '600',
    border: '1px solid rgba(0, 0, 0, 0.1)',
  };

  const ctaSectionStyles = {
    textAlign: 'center',
    padding: '60px 40px',
    background: '#fff',
    borderRadius: '20px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
    maxWidth: '800px',
    margin: '0 auto',
  };

  const ctaContentStyles = {
    marginBottom: '32px',
  };

  const ctaEyebrowStyles = {
    fontSize: '12px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    color: '#999',
    marginBottom: '12px',
    fontWeight: '600',
  };

  const ctaHeadingStyles = {
    fontSize: 'clamp(28px, 4vw, 40px)',
    fontWeight: '800',
    color: '#1a1a1a',
    marginBottom: '16px',
    lineHeight: '1.2',
  };

  const ctaSubtextStyles = {
    fontSize: '16px',
    color: '#666',
    lineHeight: '1.6',
    maxWidth: '500px',
    margin: '0 auto',
  };

  const ctaButtonStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '12px',
    padding: '16px 40px',
    fontSize: '16px',
    fontWeight: '700',
    background: '#1a1a1a',
    color: '#fff',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
  };

  const arrowStyles = {
    fontSize: '20px',
    transition: 'transform 0.3s ease',
  };

  return (
    <section id="services" ref={sectionRef} style={sectionStyles}>
      <div style={containerStyles}>
        <div style={headerStyles}>
          <div style={labelStyles}>How I Can Help</div>
          <h2 ref={headingRef} style={headingStyles}>
            I help agencies and<br />
            small businesses <span style={highlightStyles}>get things done</span>
          </h2>
          <p style={introStyles}>
            Whether you're an agency with too much on your plate or a small business 
            needing a digital solution—I'm here to help you move forward.
          </p>
        </div>

        <div style={boardStyles}>
          {servicesData.map((service) => (
            <div
              key={service.id}
              ref={addToNotesRefs}
              data-rotation={service.rotation}
              style={getNoteStyles(service.color, service.rotation)}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div style={noteOverlayStyles}></div>
              
              <div style={tapeStyles}>
                <div style={tapeShineStyles}></div>
              </div>
              
              <div style={contentStyles}>
                <div style={noteHeaderStyles}>
                  <span style={subtitleStyles}>{service.subtitle}</span>
                  <h3 style={titleStyles}>{service.title}</h3>
                </div>
                
                <p style={descriptionStyles}>{service.description}</p>
                
                <div style={tagsContainerStyles}>
                  {service.tags.map((tag, index) => (
                    <span key={`${service.id}-tag-${index}`} style={tagStyles}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={ctaSectionStyles}>
          <div style={ctaContentStyles}>
            <p style={ctaEyebrowStyles}>Got a project?</p>
            <h3 style={ctaHeadingStyles}>Let's talk about your needs</h3>
            <p style={ctaSubtextStyles}>
              No pressure, no sales pitch. Just a conversation about how I can help.
            </p>
          </div>
          <button onClick={scrollToContact} style={ctaButtonStyles}>
            <span>Get in Touch</span>
            <span style={arrowStyles}>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;