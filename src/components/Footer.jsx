// src/components/Works.jsx
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Works = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const projectRefs = useRef([]);

  const projectsData = [
    {
      id: 1,
      title: 'Luxe E-Commerce',
      category: 'E-Commerce',
      description: 'A performant e-commerce platform with authentication, product management, and animated UI.',
      year: '2025',
      tags: ['Next.js', 'Clerk', 'Tailwind', 'ShadCN', 'GSAP', 'MongoDB'],
      link: 'https://luxe-zeta-e-commerce.vercel.app/',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      color: '#FFF9C4',
    },
    {
      id: 2,
      title: 'Rezoom AI',
      category: 'AI/Web App',
      description: 'AI-powered resume builder and mock interview simulator with OpenAI integration.',
      year: '2025',
      tags: ['Next.js', 'OpenAI API', 'TypeScript', 'Tailwind CSS'],
      link: 'https://rezoom-ai-pi.vercel.app/',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      color: '#B2DFDB',
    },
    {
      id: 3,
      title: 'Medicamp',
      category: 'Full-Stack',
      description: 'Full-stack medical camp management platform with role-based dashboards.',
      year: '2025',
      tags: ['MERN Stack', 'Firebase', 'React Query', 'Framer Motion'],
      link: 'https://medicamp-1e9cc.web.app/',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
      color: '#F8BBD0',
    },
  ];

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

      projectRefs.current.forEach((project, index) => {
        if (!project) return;
        gsap.fromTo(
          project,
          { y: 80, opacity: 0, rotation: 0 },
          {
            y: 0,
            opacity: 1,
            rotation: project.dataset.rotation,
            duration: 1,
            delay: index * 0.15,
            ease: 'back.out(1.2)',
            scrollTrigger: {
              trigger: project,
              start: 'top 90%',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToProjectRefs = (el) => {
    if (el && !projectRefs.current.includes(el)) {
      projectRefs.current.push(el);
    }
  };

  const handleProjectClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '60px',
    padding: '40px 0',
  };

  const projectCardStyles = (color, rotation) => ({
    background: color,
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
    transform: `rotate(${rotation}deg)`,
    transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
    cursor: 'pointer',
    position: 'relative',
    border: '3px solid rgba(0, 0, 0, 0.1)',
  });

  const projectCardHoverStyles = {
    transform: 'rotate(0deg) translateY(-10px)',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.25)',
  };

  const imageContainerStyles = {
    position: 'relative',
    width: '100%',
    height: '280px',
    overflow: 'hidden',
    background: '#f0f0f0',
  };

  const imageStyles = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.4s',
  };

  const imageHoverStyles = {
    transform: 'scale(1.1)',
  };

  const overlayStyles = {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.4))',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: '20px',
    opacity: 0,
    transition: 'opacity 0.3s',
  };

  const overlayHoverStyles = {
    opacity: 1,
  };

  const viewProjectStyles = {
    padding: '12px 24px',
    background: '#fff',
    color: '#1a1a1a',
    borderRadius: '50px',
    fontSize: '14px',
    fontWeight: '700',
    fontFamily: '"Courier New", monospace',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    border: '2px solid #1a1a1a',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
  };

  const projectInfoStyles = {
    padding: '28px',
  };

  const projectHeaderStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '12px',
  };

  const projectTitleStyles = {
    fontSize: '24px',
    fontWeight: '800',
    color: '#1a1a1a',
    fontFamily: '"Courier New", monospace',
    marginBottom: '4px',
  };

  const categoryStyles = {
    fontSize: '12px',
    color: '#666',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontWeight: '700',
    fontFamily: '"Courier New", monospace',
  };

  const yearBadgeStyles = {
    padding: '4px 12px',
    background: 'rgba(0, 0, 0, 0.1)',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: '700',
    color: '#333',
    fontFamily: '"Courier New", monospace',
  };

  const descriptionStyles = {
    fontSize: '14px',
    lineHeight: '1.6',
    color: '#333',
    marginBottom: '16px',
    fontFamily: '"Comic Sans MS", cursive, sans-serif',
  };

  const tagsContainerStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  };

  const tagStyles = {
    padding: '5px 12px',
    background: 'rgba(0, 0, 0, 0.08)',
    borderRadius: '12px',
    fontSize: '11px',
    fontWeight: '600',
    color: '#333',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    fontFamily: '"Courier New", monospace',
  };

  // Decorative tape on cards
  const tapeStyles = {
    position: 'absolute',
    top: '-10px',
    left: '30px',
    width: '60px',
    height: '20px',
    background: 'rgba(255, 255, 255, 0.5)',
    transform: 'rotate(-8deg)',
    boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.1)',
    zIndex: 10,
    borderRadius: '2px',
  };

  const rotations = [-2, 2, -3];
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="works" ref={sectionRef} style={sectionStyles}>
      <div style={containerStyles}>
        <div ref={headingRef} style={headerStyles}>
          <div style={labelStyles}>Selected Work</div>
          <h2 style={headingStyles}>Things I've Built</h2>
          <p style={subheadingStyles}>
            A collection of projects I'm proud of—each one solving real problems for real people.
          </p>
        </div>

        <div style={gridStyles}>
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              ref={addToProjectRefs}
              data-rotation={rotations[index]}
              style={hoveredCard === project.id 
                ? {...projectCardStyles(project.color, rotations[index]), ...projectCardHoverStyles}
                : projectCardStyles(project.color, rotations[index])
              }
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleProjectClick(project.link)}
            >
              {/* Decorative tape */}
              <div style={tapeStyles}></div>

              {/* Image */}
              <div style={imageContainerStyles}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={hoveredCard === project.id 
                    ? {...imageStyles, ...imageHoverStyles}
                    : imageStyles
                  }
                />
                <div style={hoveredCard === project.id 
                  ? {...overlayStyles, ...overlayHoverStyles}
                  : overlayStyles
                }>
                  <div style={viewProjectStyles}>View Project →</div>
                </div>
              </div>

              {/* Info */}
              <div style={projectInfoStyles}>
                <div style={projectHeaderStyles}>
                  <div>
                    <h3 style={projectTitleStyles}>{project.title}</h3>
                    <span style={categoryStyles}>{project.category}</span>
                  </div>
                  <div style={yearBadgeStyles}>{project.year}</div>
                </div>

                <p style={descriptionStyles}>{project.description}</p>

                <div style={tagsContainerStyles}>
                  {project.tags.map((tag, tagIndex) => (
                    <span key={`${project.id}-tag-${tagIndex}`} style={tagStyles}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;