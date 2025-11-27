// src/components/Works.jsx
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Works = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const projectRefs = useRef([]);
  const [viewMode, setViewMode] = useState('list');
  const [hoveredProject, setHoveredProject] = useState(null);
  const imagePreviewRef = useRef(null);
  const imageRef = useRef(null);

  const projectsData = [
    {
      id: 1,
      title: 'Luxe E-Commerce',
      category: 'E-Commerce',
      description: 'A performant e-commerce platform with authentication, product management, and animated UI.',
      year: '2024',
      tags: ['Next.js', 'Clerk', 'Tailwind', 'ShadCN', 'GSAP', 'MongoDB'],
      link: 'https://luxe-zeta-e-commerce.vercel.app/',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    },
    {
      id: 2,
      title: 'Rezoom AI',
      category: 'AI/Web App',
      description: 'AI-powered resume builder and mock interview simulator with OpenAI integration.',
      year: '2024',
      tags: ['Next.js', 'OpenAI API', 'TypeScript', 'Tailwind CSS'],
      link: 'https://rezoom-ai-pi.vercel.app/',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    },
    {
      id: 3,
      title: 'Medicamp',
      category: 'Full-Stack',
      description: 'Full-stack medical camp management platform with role-based dashboards.',
      year: '2024',
      tags: ['MERN Stack', 'Firebase', 'React Query', 'Framer Motion'],
      link: 'https://medicamp-1e9cc.web.app/',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
    },
  ];

  useEffect(() => {
    projectRefs.current = [];
  }, [viewMode]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.works .section-label',
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

      projectRefs.current.forEach((project) => {
        if (!project) return;
        gsap.fromTo(
          project,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: project,
              start: 'top 85%',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [viewMode]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (hoveredProject && imagePreviewRef.current) {
        gsap.to(imagePreviewRef.current, {
          x: e.clientX + 20,
          y: e.clientY - 150,
          duration: 0.4,
          ease: 'power3.out',
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [hoveredProject]);

  const handleProjectHover = (project) => {
    setHoveredProject(project);
    
    gsap.to(imagePreviewRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.4,
      ease: 'power3.out',
    });

    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { scale: 1.3 },
        { scale: 1, duration: 0.6, ease: 'power3.out' }
      );
    }
  };

  const handleProjectLeave = () => {
    setHoveredProject(null);
    
    gsap.to(imagePreviewRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 0.3,
      ease: 'power3.in',
    });
  };

  const addToProjectRefs = (el) => {
    if (el && !projectRefs.current.includes(el)) {
      projectRefs.current.push(el);
    }
  };

  const handleProjectClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="works" ref={sectionRef} className="works">
      <div className="works-container">
        <div className="works-header">
          <div>
            <div className="section-label">002 — Selected Works</div>
            <h2 ref={headingRef} className="section-heading">
              Projects I've built
            </h2>
          </div>
          <div className="works-filters">
            <button
              className={`filter-btn hover-target ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
            >
              List
            </button>
            <button
              className={`filter-btn hover-target ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
            >
              Grid
            </button>
          </div>
        </div>

        {viewMode === 'list' ? (
          <div className="projects-list">
            {projectsData.map((project, index) => (
              <div
                key={project.id}
                ref={addToProjectRefs}
                className="project-item hover-target"
                onMouseEnter={() => handleProjectHover(project)}
                onMouseLeave={handleProjectLeave}
                onClick={() => handleProjectClick(project.link)}
              >
                <span className="project-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="project-title">{project.title}</h3>
                <span className="project-category">{project.category}</span>
                <span className="project-year">{project.year}</span>
                <span className="project-arrow">↗</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="projects-grid">
            {projectsData.map((project) => (
              <div
                key={project.id}
                ref={addToProjectRefs}
                className="project-card hover-target"
                onClick={() => handleProjectClick(project.link)}
              >
                <div className="project-image">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-img"
                  />
                  <div className="project-overlay">
                    <span className="view-project">View Project</span>
                  </div>
                </div>
                <div className="project-info">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <span className="project-year">{project.year}</span>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={`${project.id}-tag-${tagIndex}`} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Floating Image Preview */}
        <div
          ref={imagePreviewRef}
          className="project-image-preview"
          style={{ opacity: 0, transform: 'scale(0.9)' }}
        >
          {hoveredProject && (
            <div className="preview-image-container">
              <img
                ref={imageRef}
                src={hoveredProject.image}
                alt={hoveredProject.title}
                className="preview-image"
              />
              <div className="preview-overlay">
                <span className="preview-title">{hoveredProject.title}</span>
                <span className="preview-category">{hoveredProject.category}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Works;