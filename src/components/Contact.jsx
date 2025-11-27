// src/components/Contact.jsx
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const formRef = useRef(null);
  const linksRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Your Contact Data
  const contactData = {
    label: '003 — Contact',
    heading: "Let's work together",
    subheading: "Have a project in mind or want to collaborate? I'd love to hear from you.",
    email: 'ahmedrahat.dev@gmail.com',
    phone: '+880 1933-471091',
    location: 'Khulna, Bangladesh',
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.section-label',
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

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
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 85%',
          },
        }
      );

      if (linksRef.current) {
        gsap.fromTo(
          linksRef.current.children,
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: linksRef.current,
              start: 'top 85%',
            },
          }
        );
      }
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

  return (
    <section id="contact" ref={sectionRef} className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <div className="section-label">{contactData.label}</div>
          <h2 ref={headingRef} className="contact-heading">
            {contactData.heading}
          </h2>
          <p className="contact-subheading">{contactData.subheading}</p>
        </div>

        <div className="contact-content">
          <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="hover-target"
              />
              <span className="input-line"></span>
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className="hover-target"
              />
              <span className="input-line"></span>
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows="5"
                required
                className="hover-target"
              ></textarea>
              <span className="input-line"></span>
            </div>

            <button
              type="submit"
              className="submit-btn hover-target"
              disabled={isSubmitting}
            >
              <span className="btn-text">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </span>
              <span className="btn-icon">→</span>
            </button>
          </form>

          <div ref={linksRef} className="contact-info">
            <div className="info-item">
              <span className="info-label">Email</span>
              <a href={`mailto:${contactData.email}`} className="info-value hover-target">
                {contactData.email}
              </a>
            </div>

            <div className="info-item">
              <span className="info-label">Phone</span>
              <a href={`tel:${contactData.phone.replace(/\s/g, '')}`} className="info-value hover-target">
                {contactData.phone}
              </a>
            </div>

            <div className="info-item">
              <span className="info-label">Location</span>
              <span className="info-value">{contactData.location}</span>
            </div>

            <div className="social-links">
              <span className="info-label">Connect</span>
              <div className="social-icons">
                <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link hover-target"
                  aria-label="LinkedIn"
                >
                  <span className="social-icon">in</span>
                </a>
                <a
                  href="https://github.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link hover-target"
                  aria-label="GitHub"
                >
                  <span className="social-icon">GH</span>
                </a>
                <a
                  href="https://twitter.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link hover-target"
                  aria-label="Twitter"
                >
                  <span className="social-icon">X</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;