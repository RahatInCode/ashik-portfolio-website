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
  const skillsRef = useRef([]);

  const aboutData = {
    label: 'About Me',
    heading: "Hey, I'm Ashik",
    subheading: "A developer who actually cares about solving problems",
    image: '/images/about-photo.jpg',
    paragraphs: [
      "I'm based in Khulna, Bangladesh, and I've spent the last few years learning how to build things that work—not just things that look pretty.",
      "I started coding because I was curious. Now I help agencies and businesses turn ideas into real, working websites and solutions.",
      "When I'm not coding, I'm probably experimenting with new tech, fixing someone's broken website, or figuring out how to automate something that shouldn't take 3 hours to do manually.",
      "I believe good code should be clean, maintainable, and actually solve the problem—not just check boxes.",
    ],
    stats: [
      { number: '3+', label: 'Years', sublabel: 'Building & Learning' },
      { number: '10+', label: 'Projects', sublabel: 'Delivered' },
      { number: '24/7', label: 'Available', sublabel: 'For Emergencies' },
    ],
    skills: {
      frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'GSAP'],
      backend: ['Node.js', 'Express', 'MongoDB', 'Firebase'],
      tools: ['Git', 'VS Code', 'Figma', 'Postman'],
      learning: ['Python', 'AI Integration', 'WebGL'],
    },
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Label animation
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

      // Heading animation
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

      // Paragraphs fade in
      const paragraphs = textContainerRef.current.querySelectorAll('.about-text-line');
      paragraphs.forEach((para, index) => {
        gsap.fromTo(
          para,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: para,
              start: 'top 90%',
            },
          }
        );
      });

      // Stats animation
      statsRef.current.forEach((stat, index) => {
        if (!stat) return;
        gsap.fromTo(
          stat,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            delay: index * 0.1,
            ease: 'back.out(1.4)',
            scrollTrigger: {
              trigger: stat,
              start: 'top 90%',
            },
          }
        );
      });

      // Image animation (Polaroid drop)
      gsap.fromTo(
        imageRef.current,
        { y: -50, rotation: -10, opacity: 0 },
        {
          y: 0,
          rotation: 3,
          opacity: 1,
          duration: 1,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 85%',
          },
        }
      );

      // Skills tags
      skillsRef.current.forEach((skill, index) => {
        if (!skill) return;
        gsap.fromTo(
          skill,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            delay: index * 0.03,
            ease: 'back.out(1.2)',
            scrollTrigger: {
              trigger: skill,
              start: 'top 92%',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToStatsRefs = (el) => {
    if (el && !statsRef.current.includes(el)) {
      statsRef.current.push(el);
    }
  };

  const addToSkillsRefs = (el) => {
    if (el && !skillsRef.current.includes(el)) {
      skillsRef.current.push(el);
    }
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

  const labelStyles = {
    display: 'inline-block',
    fontSize: '11px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    color: '#666',
    fontWeight: '600',
    marginBottom: '30px',
    padding: '8px 16px',
    background: 'rgba(255, 255, 255, 0.6)',
    borderRadius: '20px',
    border: '1px solid rgba(0, 0, 0, 0.06)',
  };

  const headingContainerStyles = {
    marginBottom: '60px',
  };

  const mainHeadingStyles = {
    fontSize: 'clamp(48px, 6vw, 72px)',
    fontWeight: '800',
    lineHeight: '1.1',
    color: '#1a1a1a',
    marginBottom: '16px',
    fontFamily: '"Courier New", monospace',
  };

  const subheadingStyles = {
    fontSize: 'clamp(18px, 2.5vw, 24px)',
    color: '#666',
    fontWeight: '400',
    fontFamily: '"Comic Sans MS", cursive, sans-serif',
  };

  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: '1.2fr 1fr',
    gap: '80px',
    alignItems: 'start',
  };

  const textContainerStyles = {
    marginBottom: '40px',
  };

  const paragraphStyles = {
    fontSize: '16px',
    lineHeight: '1.8',
    color: '#333',
    marginBottom: '20px',
    fontFamily: '"Comic Sans MS", cursive, sans-serif',
  };

  const statsGridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    marginBottom: '50px',
  };

  const statCardStyles = (index) => ({
    background: ['#FFF9C4', '#B2DFDB', '#F8BBD0'][index % 3],
    padding: '24px',
    borderRadius: '8px',
    textAlign: 'center',
    transform: `rotate(${[-2, 1, -1][index % 3]}deg)`,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    border: '2px solid rgba(0, 0, 0, 0.05)',
    position: 'relative',
  });

  const statNumberStyles = {
    display: 'block',
    fontSize: '32px',
    fontWeight: '900',
    color: '#1a1a1a',
    marginBottom: '4px',
    fontFamily: '"Courier New", monospace',
  };

  const statLabelStyles = {
    display: 'block',
    fontSize: '14px',
    fontWeight: '700',
    color: '#333',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  };

  const statSublabelStyles = {
    display: 'block',
    fontSize: '11px',
    color: '#666',
    marginTop: '4px',
  };

  const skillsSectionStyles = {
    background: '#fff',
    padding: '32px',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
    border: '3px dashed rgba(0, 0, 0, 0.1)',
  };

  const skillsCategoryStyles = {
    marginBottom: '24px',
  };

  const skillsTitleStyles = {
    fontSize: '12px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    color: '#999',
    marginBottom: '12px',
    fontWeight: '700',
    fontFamily: '"Courier New", monospace',
  };

  const skillsGridStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  };

  const skillTagStyles = {
    display: 'inline-block',
    fontSize: '13px',
    padding: '6px 14px',
    background: '#f0f0f0',
    borderRadius: '20px',
    color: '#333',
    fontWeight: '600',
    border: '2px solid #e0e0e0',
    fontFamily: '"Comic Sans MS", cursive, sans-serif',
    cursor: 'default',
    transition: 'all 0.2s ease',
  };

  const skillTagHoverStyles = {
    background: '#1a1a1a',
    color: '#fff',
    borderColor: '#1a1a1a',
    transform: 'translateY(-2px)',
  };

  // Polaroid container
  const polaroidContainerStyles = {
    position: 'sticky',
    top: '100px',
  };

  const polaroidStyles = {
    background: '#fff',
    padding: '16px 16px 60px',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08)',
    transform: 'rotate(3deg)',
    position: 'relative',
    maxWidth: '380px',
    margin: '0 auto',
  };

  const tapeTopStyles = {
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
    filter: 'grayscale(10%) contrast(1.05)',
  };

  const captionStyles = {
    textAlign: 'center',
    fontSize: '16px',
    color: '#333',
    fontFamily: '"Comic Sans MS", cursive, sans-serif',
    fontWeight: '600',
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

  const pinHeadStyles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '8px',
    height: '8px',
    background: 'rgba(255, 255, 255, 0.4)',
    borderRadius: '50%',
  };

  return (
    <section id="about" ref={sectionRef} className="about" style={sectionStyles}>
      <div style={containerStyles}>
        <div style={labelStyles}>About Me</div>

        <div ref={headingRef} style={headingContainerStyles}>
          <h2 style={mainHeadingStyles}>{aboutData.heading}</h2>
          <p style={subheadingStyles}>{aboutData.subheading}</p>
        </div>

        <div style={gridStyles}>
          {/* LEFT SIDE */}
          <div>
            <div ref={textContainerRef} style={textContainerStyles}>
              {aboutData.paragraphs.map((para, index) => (
                <p key={`para-${index}`} className="about-text-line" style={paragraphStyles}>
                  {para}
                </p>
              ))}
            </div>

            {/* Stats Cards */}
            <div style={statsGridStyles}>
              {aboutData.stats.map((stat, index) => (
                <div
                  key={`stat-${index}`}
                  ref={addToStatsRefs}
                  style={statCardStyles(index)}
                >
                  <span style={statNumberStyles}>{stat.number}</span>
                  <span style={statLabelStyles}>{stat.label}</span>
                  <span style={statSublabelStyles}>{stat.sublabel}</span>
                </div>
              ))}
            </div>

            {/* Skills Section */}
            <div style={skillsSectionStyles}>
              <div style={skillsCategoryStyles}>
                <h4 style={skillsTitleStyles}>Frontend</h4>
                <div style={skillsGridStyles}>
                  {aboutData.skills.frontend.map((skill, index) => (
                    <span
                      key={`frontend-${index}`}
                      ref={addToSkillsRefs}
                      style={skillTagStyles}
                      onMouseEnter={(e) => Object.assign(e.target.style, skillTagHoverStyles)}
                      onMouseLeave={(e) => Object.assign(e.target.style, skillTagStyles)}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div style={skillsCategoryStyles}>
                <h4 style={skillsTitleStyles}>Backend & Database</h4>
                <div style={skillsGridStyles}>
                  {aboutData.skills.backend.map((skill, index) => (
                    <span
                      key={`backend-${index}`}
                      ref={addToSkillsRefs}
                      style={skillTagStyles}
                      onMouseEnter={(e) => Object.assign(e.target.style, skillTagHoverStyles)}
                      onMouseLeave={(e) => Object.assign(e.target.style, skillTagStyles)}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div style={skillsCategoryStyles}>
                <h4 style={skillsTitleStyles}>Tools & Workflow</h4>
                <div style={skillsGridStyles}>
                  {aboutData.skills.tools.map((skill, index) => (
                    <span
                      key={`tool-${index}`}
                      ref={addToSkillsRefs}
                      style={skillTagStyles}
                      onMouseEnter={(e) => Object.assign(e.target.style, skillTagHoverStyles)}
                      onMouseLeave={(e) => Object.assign(e.target.style, skillTagStyles)}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{...skillsCategoryStyles, marginBottom: 0}}>
                <h4 style={skillsTitleStyles}>Currently Learning</h4>
                <div style={skillsGridStyles}>
                  {aboutData.skills.learning.map((skill, index) => (
                    <span
                      key={`learning-${index}`}
                      ref={addToSkillsRefs}
                      style={{...skillTagStyles, background: '#fff9c4', borderColor: '#ffe082'}}
                      onMouseEnter={(e) => Object.assign(e.target.style, skillTagHoverStyles)}
                      onMouseLeave={(e) => Object.assign(e.target.style, {...skillTagStyles, background: '#fff9c4', borderColor: '#ffe082'})}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Polaroid Photo */}
          <div style={polaroidContainerStyles}>
            <div ref={imageRef} style={polaroidStyles}>
              {/* Tape at top */}
              <div style={tapeTopStyles}></div>
              
              {/* Pin */}
              <div style={pinStyles}>
                <div style={pinHeadStyles}></div>
              </div>

              {/* Image */}
              <div style={imageWrapperStyles}>
                <img
                  src={aboutData.image}
                  alt="Ashikuzzaman"
                  style={imageStyles}
                />
              </div>

              {/* Caption */}
              <div style={captionStyles}>Khulna, Bangladesh 📍</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;