// src/components/About.jsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textContainerRef = useRef(null);
  const statsRef = useRef([]);
  const imageRef = useRef(null);

  const aboutData = {
    label: '001 — About',
    heading: 'A developer passionate about crafting exceptional digital experiences.',
    // ✅ Your image path - change this to your actual image
    image: '/images/about-photo.jpg',
    paragraphs: [
      "I'm Md. Ashikuzzaman, a Junior Frontend Developer based in Khulna, Bangladesh.",
      "I specialize in building modern, responsive web applications using React, Next.js, and TypeScript.",
      "With experience in e-commerce platforms and AI-powered web applications, I focus on writing clean, maintainable code and creating intuitive user interfaces.",
      "I believe in the power of great design combined with solid engineering.",
    ],
    stats: [
      { number: '03+', label: 'Major Projects' },
      { number: '01+', label: 'Years Learning' },
      { number: '10+', label: 'Technologies' },
      { number: '∞', label: 'Curiosity' },
    ],
    skills: {
      frontend: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Framer Motion'],
      backend: ['Node.js', 'Express.js', 'MongoDB', 'Firebase', 'Python'],
      tools: ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman'],
    },
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about .section-label',
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

      const paragraphs = textContainerRef.current.querySelectorAll('.about-text-line');
      
      paragraphs.forEach((para) => {
        gsap.fromTo(
          para,
          { opacity: 0.2, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: para,
              start: 'top 85%',
              end: 'top 50%',
              scrub: 1,
            },
          }
        );
      });

      statsRef.current.forEach((stat, index) => {
        if (!stat) return;
        
        gsap.fromTo(
          stat,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: stat,
              start: 'top 90%',
            },
          }
        );
      });

      gsap.fromTo(
        imageRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 85%',
          },
        }
      );

      const skillTags = sectionRef.current.querySelectorAll('.skill-tag');
      gsap.fromTo(
        skillTags,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.03,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.skills-section',
            start: 'top 85%',
          },
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToStatsRefs = (el) => {
    if (el && !statsRef.current.includes(el)) {
      statsRef.current.push(el);
    }
  };

  return (
    <section id="about" ref={sectionRef} className="about">
      <div className="about-container">
        <div className="section-label">{aboutData.label}</div>
        
        <h2 ref={headingRef} className="section-heading">
          {aboutData.heading}
        </h2>

        <div className="about-grid">
          <div className="about-left">
            <div ref={textContainerRef} className="about-text">
              {aboutData.paragraphs.map((para, index) => (
                <p key={`para-${index}`} className="about-text-line">
                  {para}
                </p>
              ))}
            </div>

            <div className="about-stats">
              {aboutData.stats.map((stat, index) => (
                <div key={`stat-${index}`} ref={addToStatsRefs} className="stat-item">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="skills-section">
              <div className="skills-category">
                <h4 className="skills-title">Frontend</h4>
                <div className="skills-grid">
                  {aboutData.skills.frontend.map((skill, index) => (
                    <span key={`frontend-${index}`} className="skill-tag hover-target">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="skills-category">
                <h4 className="skills-title">Backend</h4>
                <div className="skills-grid">
                  {aboutData.skills.backend.map((skill, index) => (
                    <span key={`backend-${index}`} className="skill-tag hover-target">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="skills-category">
                <h4 className="skills-title">Tools</h4>
                <div className="skills-grid">
                  {aboutData.skills.tools.map((skill, index) => (
                    <span key={`tool-${index}`} className="skill-tag hover-target">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ✅ FIXED: Now using actual image instead of placeholder */}
          <div className="about-right">
            <div ref={imageRef} className="about-image-container">
              <div className="about-image">
                <img 
                  src={aboutData.image} 
                  alt="Ashikuzzaman" 
                  className="about-img"
                />
              </div>
              <span className="image-caption">Khulna, Bangladesh</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;