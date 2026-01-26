import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Solutions = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const marqueeRef = useRef(null);
  const solutionsRef = useRef([]);
  const lineRef = useRef(null);

  const solutionsData = [
    {
      id: 1,
      number: '01',
      title: 'Digital Experience & UI',
      description: 'Transforming complex ideas into intuitive, high-performance interfaces. I focus on speed and accessibility to ensure your users stay engaged and convert.',
      features: ['Conversion-Focused UI', 'Performance Optimization', 'Brand-Consistent Design', 'Motion Engineering'],
      icon: '◆',
    },
    {
      id: 2,
      number: '02',
      title: 'Scalable Systems Architecture',
      description: 'Building the robust backbone of your business. I create secure, end-to-end infrastructures that grow with your user base without breaking a sweat.',
      features: ['Secure Cloud Architecture', 'Database Optimization', 'Seamless API Systems', 'Enterprise Security'],
      icon: '◇',
    },
    {
      id: 3,
      number: '03',
      title: 'Revenue-Driven E-Commerce',
      description: 'Custom digital storefronts engineered for sales. From friction-less checkouts to inventory automation, I build tools that generate ROI.',
      features: ['Conversion Optimization', 'Secure Payments', 'Automated Logistics', 'Advanced Analytics'],
      icon: '○',
    },
    {
      id: 4,
      number: '04',
      title: 'High-Impact Brand Presence',
      description: 'Custom-tailored portfolios and landing pages that command authority. I create immersive digital first impressions that turn visitors into partners.',
      features: ['Authority Building', 'Interactive Storytelling', 'SEO Dominance', 'Unique Brand Identity'],
      icon: '□',
    },
    {
      id: 5,
      number: '05',
      title: 'AI & Workflow Automation',
      description: 'Reclaiming your time through intelligent systems. I implement AI-driven solutions and chatbots that handle support and leads while you sleep.',
      features: ['LLM Integration', 'Support Automation', 'Lead Qualification', 'Process Efficiency'],
      icon: '△',
    },
  ];

  const marqueeText = 'SOLUTIONS — DRIVING GROWTH — SOLUTIONS — DRIVING GROWTH — ';

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section label
      gsap.fromTo(
        '.solutions .section-label',
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

      // Heading
      gsap.fromTo(
        headingRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
          },
        }
      );

      // Marquee
      const marqueeAnimation = gsap.to(marqueeRef.current, {
        xPercent: -50,
        duration: 20,
        ease: 'none',
        repeat: -1,
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
          const velocity = self.getVelocity();
          const speed = Math.abs(velocity) / 1000;
          marqueeAnimation.timeScale(1 + speed);
        },
      });

      // Line
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0, transformOrigin: 'left center' },
        {
          scaleX: 1,
          duration: 1.5,
          ease: 'power4.inOut',
          scrollTrigger: {
            trigger: lineRef.current,
            start: 'top 85%',
          },
        }
      );

      // Solution cards
      solutionsRef.current.forEach((sol, index) => {
        if (!sol) return;

        gsap.fromTo(
          sol,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sol,
              start: 'top 85%',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToSolutionsRefs = (el) => {
    if (el && !solutionsRef.current.includes(el)) {
      solutionsRef.current.push(el);
    }
  };

  const handleMouseMove = (e, solEl) => {
    const rect = solEl.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(solEl, {
      x: x * 0.08,
      y: y * 0.08,
      rotationY: x * 0.015,
      rotationX: -y * 0.015,
      duration: 0.4,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = (solEl) => {
    gsap.to(solEl, {
      x: 0,
      y: 0,
      rotationY: 0,
      rotationX: 0,
      duration: 0.7,
      ease: 'elastic.out(1, 0.5)',
    });
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="solutions" ref={sectionRef} className="solutions">
      <div className="solutions-marquee-container">
        <div ref={marqueeRef} className="solutions-marquee">
          <span>{marqueeText}</span>
          <span>{marqueeText}</span>
        </div>
      </div>

      <div className="solutions-container">
        <div className="solutions-header">
          <div className="section-label">003 — Solutions</div>
          <h2 ref={headingRef} className="solutions-heading">
            Strategic solutions<br />
            <span className="heading-outline">for your growth</span>
          </h2>
        </div>

        <div ref={lineRef} className="solutions-line"></div>

        <div className="solutions-grid">
          {solutionsData.map((sol) => (
            <div
              key={sol.id}
              ref={addToSolutionsRefs}
              className="solution-card hover-target"
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
            >
              <div className="solution-header">
                <span className="solution-number">{sol.number}</span>
                <span className="solution-icon">{sol.icon}</span>
              </div>
              
              <h3 className="solution-title">{sol.title}</h3>
              <p className="solution-description">{sol.description}</p>
              
              <div className="solution-features">
                {sol.features.map((feature, index) => (
                  <span key={`${sol.id}-feature-${index}`} className="solution-feature">
                    {feature}
                  </span>
                ))}
              </div>

              <div className="solution-cta">
                <span className="solution-cta-text">View Strategy</span>
                <span className="solution-cta-arrow">→</span>
              </div>

              <div className="solution-gradient"></div>
            </div>
          ))}
        </div>

        <div className="solutions-cta-section">
          <div className="solutions-cta-text">
            <p>Ready to scale your digital presence?</p>
            <h3>Let's build the solution your business needs.</h3>
          </div>
          <button onClick={scrollToContact} className="solutions-cta-button hover-target">
            <span>Get a Consultation</span>
            <span className="cta-arrow">↗</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Solutions;