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
  const logoMarqueeRef = useRef(null);

  const aboutData = {
    label: '001 — About',
    heading: 'Engineering performance-driven solutions with a focus on scalability.',
    image: '/images/about-photo.jpg', 
    paragraphs: [
      "I'm Md. Ashikuzzaman, a Software Engineer specialized in building high-performance digital ecosystems.",
      "My expertise spans the full stack, from crafting pixel-perfect interfaces with React and Framer to orchestrating scalable backend architectures using Node.js and SQL.",
      "I bridge the gap between complex engineering and elegant design, utilizing Docker and AWS to ensure seamless deployment and global availability.",
    ],
    stats: [
      { number: '15+', label: 'Modern Tools' },
      { number: '03+', label: 'Experience Years' },
      { number: '05+', label: 'Cloud Deployments' },
      { number: '∞', label: 'Optimization' },
    ],
    skills: {
      frontend: ['React.js', 'Next.js', 'Redux', 'TypeScript', 'Framer Motion', 'Framer Designs'],
      backend: ['Node.js', 'Express.js', 'SQL', 'MongoDB', 'Python'],
      devops: ['AWS', 'Docker', 'Nginx', 'Git', 'GitHub'],
    },
    // Replace these URLs with the actual SVG paths from your icons folder
    skillLogos: [
      { name: 'React', url: '/logos/react.svg' },
      { name: 'Next', url: '/logos/nextjs.svg' },
      { name: 'Redux', url: '/logos/redux.svg' },
      { name: 'Docker', url: '/logos/docker.svg' },
      { name: 'AWS', url: '/logos/aws.svg' },
      { name: 'Nginx', url: '/logos/nginx.svg' },
      { name: 'SQL', url: '/logos/sql.svg' },
      { name: 'Framer', url: '/logos/framer.svg' },
      { name: 'TypeScript', url: '/logos/typescript.svg' },
    ]
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading & Label animations
      gsap.fromTo('.about .section-label', { opacity: 0, x: -30 }, {
        opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
      });

      gsap.fromTo(headingRef.current, { y: 60, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1, ease: 'power4.out',
        scrollTrigger: { trigger: headingRef.current, start: 'top 80%' }
      });

      // Infinite Logo Marquee Animation
      const marquee = logoMarqueeRef.current;
      const totalWidth = marquee.scrollWidth / 2;
      
      gsap.to(marquee, {
        x: -totalWidth,
        duration: 25,
        repeat: -1,
        ease: "none",
      });

      // Stats and Image animations (unchanged logic)
      statsRef.current.forEach((stat, index) => {
        gsap.fromTo(stat, { y: 50, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.8, delay: index * 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: stat, start: 'top 90%' }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="about">
      {/* Skill Logo Marquee */}
      <div className="skill-marquee-wrapper">
        <div ref={logoMarqueeRef} className="skill-marquee-inner">
          {[...aboutData.skillLogos, ...aboutData.skillLogos].map((logo, i) => (
            <div key={i} className="skill-logo-item">
              <img src={logo.url} alt={logo.name} title={logo.name} />
            </div>
          ))}
        </div>
      </div>

      <div className="about-container">
        <div className="section-label">{aboutData.label}</div>
        <h2 ref={headingRef} className="section-heading">{aboutData.heading}</h2>

        <div className="about-grid">
          <div className="about-left">
            <div ref={textContainerRef} className="about-text">
              {aboutData.paragraphs.map((para, index) => (
                <p key={index} className="about-text-line">{para}</p>
              ))}
            </div>

            <div className="about-stats">
              {aboutData.stats.map((stat, index) => (
                <div key={index} ref={(el) => (statsRef.current[index] = el)} className="stat-item">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="skills-section">
              {Object.entries(aboutData.skills).map(([category, items]) => (
                <div key={category} className="skills-category">
                  <h4 className="skills-title" style={{textTransform: 'capitalize'}}>{category}</h4>
                  <div className="skills-grid">
                    {items.map((skill, i) => (
                      <span key={i} className="skill-tag hover-target">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-right">
            <div ref={imageRef} className="about-image-container">
              <div className="about-image">
                <img src={aboutData.image} alt="Ashikuzzaman" className="about-img" />
              </div>
              <span className="image-caption">Based in Khulna, Bangladesh</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;