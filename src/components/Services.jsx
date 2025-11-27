// src/components/Services.jsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const marqueeRef = useRef(null);
  const servicesRef = useRef([]);
  const lineRef = useRef(null);

  const servicesData = [
    {
      id: 1,
      number: '01',
      title: 'Frontend Development',
      description: 'Building modern, responsive, and performant user interfaces using React, Next.js, and TypeScript. Pixel-perfect implementations with smooth animations.',
      features: ['React & Next.js', 'TypeScript', 'Responsive Design', 'GSAP Animations'],
      icon: '◆',
    },
    {
      id: 2,
      number: '02',
      title: 'Full Stack Development',
      description: 'End-to-end web application development from database design to deployment. RESTful APIs, authentication, and scalable architecture.',
      features: ['Node.js & Express', 'MongoDB', 'REST APIs', 'Authentication'],
      icon: '◇',
    },
    {
      id: 3,
      number: '03',
      title: 'E-Commerce Solutions',
      description: 'Custom e-commerce platforms with seamless checkout, inventory management, and payment integration. Built for conversion and scale.',
      features: ['Product Management', 'Payment Integration', 'Cart & Checkout', 'Admin Dashboards'],
      icon: '○',
    },
    {
      id: 4,
      number: '04',
      title: 'Portfolio Websites',
      description: 'Stunning personal portfolios that make lasting impressions. Bold designs with smooth interactions that showcase your work beautifully.',
      features: ['Custom Design', 'Animations', 'SEO Optimized', 'Fast Loading'],
      icon: '□',
    },
    {
      id: 5,
      number: '05',
      title: 'Automation & Chatbots',
      description: 'Intelligent chatbots and automation solutions for businesses. Streamline customer support and automate repetitive tasks with AI.',
      features: ['AI Integration', 'Customer Support', 'Lead Generation', 'Business Automation'],
      icon: '△',
    },
  ];

  const marqueeText = 'SERVICES — WHAT I DO — SERVICES — WHAT I DO — ';

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section label
      gsap.fromTo(
        '.services .section-label',
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

      // Service cards
      servicesRef.current.forEach((service, index) => {
        if (!service) return;

        gsap.fromTo(
          service,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: service,
              start: 'top 85%',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToServicesRefs = (el) => {
    if (el && !servicesRef.current.includes(el)) {
      servicesRef.current.push(el);
    }
  };

  const handleMouseMove = (e, serviceEl) => {
    const rect = serviceEl.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(serviceEl, {
      x: x * 0.08,
      y: y * 0.08,
      rotationY: x * 0.015,
      rotationX: -y * 0.015,
      duration: 0.4,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = (serviceEl) => {
    gsap.to(serviceEl, {
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
    <section id="services" ref={sectionRef} className="services">
      <div className="services-marquee-container">
        <div ref={marqueeRef} className="services-marquee">
          <span>{marqueeText}</span>
          <span>{marqueeText}</span>
        </div>
      </div>

      <div className="services-container">
        <div className="services-header">
          <div className="section-label">003 — Services</div>
          <h2 ref={headingRef} className="services-heading">
            What I can do<br />
            <span className="heading-outline">for you</span>
          </h2>
        </div>

        <div ref={lineRef} className="services-line"></div>

        <div className="services-grid">
          {servicesData.map((service) => (
            <div
              key={service.id}
              ref={addToServicesRefs}
              className="service-card hover-target"
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
            >
              <div className="service-header">
                <span className="service-number">{service.number}</span>
                <span className="service-icon">{service.icon}</span>
              </div>
              
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <div className="service-features">
                {service.features.map((feature, index) => (
                  <span key={`${service.id}-feature-${index}`} className="service-feature">
                    {feature}
                  </span>
                ))}
              </div>

              <div className="service-cta">
                <span className="service-cta-text">Learn more</span>
                <span className="service-cta-arrow">→</span>
              </div>

              <div className="service-gradient"></div>
            </div>
          ))}
        </div>

        <div className="services-cta-section">
          <div className="services-cta-text">
            <p>Have a project in mind?</p>
            <h3>Let's build something amazing together.</h3>
          </div>
          <button onClick={scrollToContact} className="services-cta-button hover-target">
            <span>Start a Project</span>
            <span className="cta-arrow">↗</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;