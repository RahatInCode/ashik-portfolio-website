// src/components/Contact.jsx
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const formRef = useRef(null);
  const postcardRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactData = {
    heading: "Drop me a line",
    subheading: "Got a project? Need help? Just want to say hi? I'd love to hear from you.",
    email: 'ahmedrahat.dev@gmail.com',
    phone: '+880 1933-471091',
    location: 'Khulna, Bangladesh',
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        formRef.current,
        { x: -60, opacity: 0, rotation: -2 },
        {
          x: 0,
          opacity: 1,
          rotation: -2,
          duration: 1,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 85%',
          },
        }
      );

      gsap.fromTo(
        postcardRef.current,
        { x: 60, opacity: 0, rotation: 3 },
        {
          x: 0,
          opacity: 1,
          rotation: 3,
          duration: 1,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: postcardRef.current,
            start: 'top 85%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  // INLINE STYLES
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

  const headingContainerStyles = {
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
    fontSize: 'clamp(40px, 5vw, 64px)',
    fontWeight: '800',
    lineHeight: '1.2',
    color: '#1a1a1a',
    marginBottom: '16px',
    fontFamily: '"Courier New", monospace',
  };

  const subheadingStyles = {
    fontSize: '18px',
    lineHeight: '1.6',
    color: '#666',
    maxWidth: '600px',
    margin: '0 auto',
    fontFamily: '"Comic Sans MS", cursive, sans-serif',
  };

  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: '1.2fr 1fr',
    gap: '60px',
    alignItems: 'start',
  };

  // Form Card (Letter style)
  const formCardStyles = {
    background: '#fff',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
    border: '3px solid #e0e0e0',
    transform: 'rotate(-2deg)',
    position: 'relative',
  };

  const stampStyles = {
    position: 'absolute',
    top: '20px',
    right: '20px',
    width: '60px',
    height: '60px',
    border: '3px dashed #ff6b6b',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    fontWeight: '900',
    color: '#ff6b6b',
    transform: 'rotate(15deg)',
    fontFamily: '"Courier New", monospace',
  };

  const formGroupStyles = {
    marginBottom: '24px',
  };

  const labelInputStyles = {
    display: 'block',
    fontSize: '12px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    color: '#666',
    marginBottom: '8px',
    fontWeight: '700',
    fontFamily: '"Courier New", monospace',
  };

  const inputStyles = {
    width: '100%',
    padding: '12px 16px',
    fontSize: '15px',
    border: 'none',
    borderBottom: '2px solid #e0e0e0',
    background: 'transparent',
    fontFamily: '"Comic Sans MS", cursive, sans-serif',
    transition: 'border-color 0.3s',
    outline: 'none',
  };

  const textareaStyles = {
    ...inputStyles,
    minHeight: '120px',
    resize: 'vertical',
    border: '2px solid #e0e0e0',
    borderRadius: '8px',
    padding: '12px 16px',
  };

  const buttonStyles = {
    width: '100%',
    padding: '16px',
    fontSize: '16px',
    fontWeight: '700',
    background: '#1a1a1a',
    color: '#fff',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    fontFamily: '"Courier New", monospace',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    transition: 'all 0.3s',
    marginTop: '16px',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
  };

  const buttonHoverStyles = {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 24px rgba(0, 0, 0, 0.3)',
  };

  // Postcard (Info card)
  const postcardStyles = {
    background: '#FFF9C4',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
    border: '3px solid rgba(0, 0, 0, 0.1)',
    transform: 'rotate(3deg)',
    position: 'relative',
    backgroundImage: `
      repeating-linear-gradient(
        0deg,
        transparent,
        transparent 30px,
        rgba(0, 0, 0, 0.05) 30px,
        rgba(0, 0, 0, 0.05) 31px
      )
    `,
  };

  const postcardHeaderStyles = {
    marginBottom: '32px',
    paddingBottom: '24px',
    borderBottom: '2px dashed rgba(0, 0, 0, 0.2)',
  };

  const postcardTitleStyles = {
    fontSize: '24px',
    fontWeight: '800',
    color: '#1a1a1a',
    marginBottom: '8px',
    fontFamily: '"Courier New", monospace',
  };

  const postcardSubtitleStyles = {
    fontSize: '14px',
    color: '#666',
    fontFamily: '"Comic Sans MS", cursive, sans-serif',
  };

  const infoItemStyles = {
    marginBottom: '24px',
  };

  const infoLabelStyles = {
    display: 'block',
    fontSize: '11px',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    color: '#999',
    marginBottom: '6px',
    fontWeight: '700',
  };

  const infoValueStyles = {
    display: 'block',
    fontSize: '16px',
    color: '#1a1a1a',
    fontWeight: '600',
    fontFamily: '"Comic Sans MS", cursive, sans-serif',
    textDecoration: 'none',
  };

  const socialSectionStyles = {
    marginTop: '32px',
    paddingTop: '24px',
    borderTop: '2px dashed rgba(0, 0, 0, 0.2)',
  };

  const socialGridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '12px',
    marginTop: '12px',
  };

  const socialLinkStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '12px',
    background: 'rgba(0, 0, 0, 0.05)',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '700',
    color: '#333',
    textDecoration: 'none',
    border: '2px solid rgba(0, 0, 0, 0.1)',
    transition: 'all 0.2s',
    fontFamily: '"Courier New", monospace',
  };

  const socialLinkHoverStyles = {
    background: '#1a1a1a',
    color: '#fff',
    borderColor: '#1a1a1a',
    transform: 'translateY(-2px)',
  };

  // Decorative elements
  const paperclipStyles = {
    position: 'absolute',
    top: '-20px',
    left: '30px',
    width: '40px',
    height: '80px',
    border: '3px solid #999',
    borderRadius: '20px',
    transform: 'rotate(-10deg)',
    opacity: 0.6,
  };

  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(false);

  return (
    <section id="contact" ref={sectionRef} style={sectionStyles}>
      <div style={containerStyles}>
        <div ref={headingRef} style={headingContainerStyles}>
          <div style={labelStyles}>Get In Touch</div>
          <h2 style={headingStyles}>{contactData.heading}</h2>
          <p style={subheadingStyles}>{contactData.subheading}</p>
        </div>

        <div style={gridStyles}>
          {/* FORM - Letter Card */}
          <div ref={formRef} style={formCardStyles}>
            {/* Paperclip decoration */}
            <div style={paperclipStyles}></div>
            
            {/* Stamp */}
            <div style={stampStyles}>✉️</div>

            <form onSubmit={handleSubmit}>
              <div style={formGroupStyles}>
                <label htmlFor="name" style={labelInputStyles}>Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  style={inputStyles}
                  onFocus={(e) => e.target.style.borderColor = '#1a1a1a'}
                  onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                />
              </div>

              <div style={formGroupStyles}>
                <label htmlFor="email" style={labelInputStyles}>Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  style={inputStyles}
                  onFocus={(e) => e.target.style.borderColor = '#1a1a1a'}
                  onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                />
              </div>

              <div style={formGroupStyles}>
                <label htmlFor="message" style={labelInputStyles}>Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or just say hi!"
                  rows="5"
                  required
                  style={textareaStyles}
                  onFocus={(e) => e.target.style.borderColor = '#1a1a1a'}
                  onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                ></textarea>
              </div>

              <button
                type="submit"
                style={hoveredButton ? {...buttonStyles, ...buttonHoverStyles} : buttonStyles}
                onMouseEnter={() => setHoveredButton(true)}
                onMouseLeave={() => setHoveredButton(false)}
                disabled={isSubmitting}
              >
                {isSubmitting ? '✈️ Sending...' : '📮 Send Message'}
              </button>
            </form>
          </div>

          {/* INFO - Postcard */}
          <div ref={postcardRef} style={postcardStyles}>
            <div style={postcardHeaderStyles}>
              <h3 style={postcardTitleStyles}>Contact Info</h3>
              <p style={postcardSubtitleStyles}>Let's connect and build something great</p>
            </div>

            <div style={infoItemStyles}>
              <span style={infoLabelStyles}>Email</span>
              <a
                href={`mailto:${contactData.email}`}
                style={infoValueStyles}
              >
                {contactData.email}
              </a>
            </div>

            <div style={infoItemStyles}>
              <span style={infoLabelStyles}>Phone</span>
              <a
                href={`tel:${contactData.phone.replace(/\s/g, '')}`}
                style={infoValueStyles}
              >
                {contactData.phone}
              </a>
            </div>

            <div style={infoItemStyles}>
              <span style={infoLabelStyles}>Location</span>
              <span style={infoValueStyles}>{contactData.location} 📍</span>
            </div>

            <div style={socialSectionStyles}>
              <span style={infoLabelStyles}>Find me on</span>
              <div style={socialGridStyles}>
                {['LinkedIn', 'GitHub', 'Twitter'].map((platform) => (
                  <a
                    key={platform}
                    href={`https://${platform.toLowerCase()}.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={hoveredSocial === platform ? {...socialLinkStyles, ...socialLinkHoverStyles} : socialLinkStyles}
                    onMouseEnter={() => setHoveredSocial(platform)}
                    onMouseLeave={() => setHoveredSocial(null)}
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;