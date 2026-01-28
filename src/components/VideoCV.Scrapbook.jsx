// src/components/VideoCV.jsx
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const VideoCV = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const tvRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  // Replace with your actual YouTube video ID or direct video URL
  const videoData = {
    youtubeId: 'dQw4w9WgXcQ', // Replace with your actual video ID
    // Or use direct video URL: videoUrl: '/videos/my-cv.mp4'
    thumbnail: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&h=600&fit=crop',
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
        tvRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: tvRef.current,
            start: 'top 85%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handlePlayClick = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
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
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 60px',
  };

  const headerStyles = {
    textAlign: 'center',
    marginBottom: '60px',
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

  // TV Frame (Vintage style)
  const tvContainerStyles = {
    maxWidth: '900px',
    margin: '0 auto',
    position: 'relative',
  };

  const tvFrameStyles = {
    background: '#2a2a2a',
    padding: '40px',
    borderRadius: '30px',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), inset 0 2px 10px rgba(255, 255, 255, 0.1)',
    position: 'relative',
    border: '8px solid #1a1a1a',
  };

  const tvScreenStyles = {
    position: 'relative',
    width: '100%',
    aspectRatio: '16/9',
    background: '#000',
    borderRadius: '12px',
    overflow: 'hidden',
    border: '4px solid #333',
    boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.5)',
  };

  const videoContainerStyles = {
    width: '100%',
    height: '100%',
    position: 'relative',
  };

  const thumbnailStyles = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    filter: 'brightness(0.8)',
  };

  const playOverlayStyles = {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(0, 0, 0, 0.4)',
    cursor: 'pointer',
    transition: 'all 0.3s',
  };

  const playButtonStyles = {
    width: '100px',
    height: '100px',
    background: '#ff6b6b',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 10px 40px rgba(255, 107, 107, 0.4)',
    transition: 'all 0.3s',
    border: '4px solid #fff',
  };

  const playButtonHoverStyles = {
    transform: 'scale(1.1)',
    boxShadow: '0 15px 50px rgba(255, 107, 107, 0.6)',
  };

  const playIconStyles = {
    width: 0,
    height: 0,
    borderLeft: '30px solid #fff',
    borderTop: '20px solid transparent',
    borderBottom: '20px solid transparent',
    marginLeft: '8px',
  };

  const iframeStyles = {
    width: '100%',
    height: '100%',
    border: 'none',
  };

  // TV Controls (decorative)
  const controlsStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    marginTop: '30px',
  };

  const knobStyles = {
    width: '50px',
    height: '50px',
    background: 'linear-gradient(135deg, #444, #222)',
    borderRadius: '50%',
    border: '4px solid #1a1a1a',
    boxShadow: 'inset 0 2px 5px rgba(0, 0, 0, 0.5), 0 2px 8px rgba(0, 0, 0, 0.3)',
    position: 'relative',
  };

  const knobLineStyles = {
    position: 'absolute',
    top: '8px',
    left: '50%',
    width: '3px',
    height: '15px',
    background: '#666',
    transform: 'translateX(-50%)',
    borderRadius: '2px',
  };

  const labelTextStyles = {
    fontSize: '11px',
    color: '#999',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontFamily: '"Courier New", monospace',
    fontWeight: '700',
  };

  // Sticky notes around TV
  const stickyNoteStyles = (color, rotation, position) => ({
    position: 'absolute',
    background: color,
    padding: '16px',
    borderRadius: '4px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    transform: `rotate(${rotation}deg)`,
    fontSize: '13px',
    fontFamily: '"Comic Sans MS", cursive, sans-serif',
    fontWeight: '600',
    color: '#333',
    border: '2px solid rgba(0, 0, 0, 0.05)',
    zIndex: 10,
    ...position,
  });

  const [playHovered, setPlayHovered] = useState(false);

  return (
    <section id="video-cv" ref={sectionRef} style={sectionStyles}>
      <div style={containerStyles}>
        <div ref={headingRef} style={headerStyles}>
          <div style={labelStyles}>Watch This!</div>
          <h2 style={headingStyles}>Meet Me in 2 Minutes</h2>
          <p style={subheadingStyles}>
            Sometimes it's easier to just show you. Here's a quick video about who I am and what I do.
          </p>
        </div>

        <div ref={tvRef} style={tvContainerStyles}>
          {/* Sticky notes decorations */}
          <div style={stickyNoteStyles('#FFF9C4', -6, { top: '-20px', left: '-40px' })}>
            📺 Press play!
          </div>
          <div style={stickyNoteStyles('#B2DFDB', 8, { top: '-30px', right: '-30px' })}>
            2 min watch ⏱️
          </div>
          <div style={stickyNoteStyles('#F8BBD0', -4, { bottom: '-25px', left: '50%', transform: 'translateX(-50%) rotate(-4deg)' })}>
            Made with ❤️ just for you!
          </div>

          {/* TV Frame */}
          <div style={tvFrameStyles}>
            {/* Screen */}
            <div style={tvScreenStyles}>
              <div style={videoContainerStyles}>
                {!isPlaying ? (
                  <>
                    <img
                      src={videoData.thumbnail}
                      alt="Video CV Thumbnail"
                      style={thumbnailStyles}
                    />
                    <div
                      style={playOverlayStyles}
                      onClick={handlePlayClick}
                      onMouseEnter={() => setPlayHovered(true)}
                      onMouseLeave={() => setPlayHovered(false)}
                    >
                      <div style={playHovered ? {...playButtonStyles, ...playButtonHoverStyles} : playButtonStyles}>
                        <div style={playIconStyles}></div>
                      </div>
                    </div>
                  </>
                ) : (
                  <iframe
                    ref={videoRef}
                    style={iframeStyles}
                    src={`https://www.youtube.com/embed/${videoData.youtubeId}?autoplay=1&rel=0`}
                    title="Video CV"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            </div>

            {/* TV Controls (decorative) */}
            <div style={controlsStyles}>
              <div>
                <div style={knobStyles}>
                  <div style={knobLineStyles}></div>
                </div>
                <p style={{...labelTextStyles, textAlign: 'center', marginTop: '8px'}}>VOL</p>
              </div>
              
              <div style={{
                width: '120px',
                height: '8px',
                background: '#333',
                borderRadius: '4px',
                boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.5)',
              }}></div>
              
              <div>
                <div style={knobStyles}>
                  <div style={knobLineStyles}></div>
                </div>
                <p style={{...labelTextStyles, textAlign: 'center', marginTop: '8px'}}>CH</p>
              </div>
            </div>
          </div>

          {/* Brand label */}
          <div style={{
            position: 'absolute',
            bottom: '20px',
            right: '60px',
            fontSize: '14px',
            color: '#666',
            fontFamily: '"Courier New", monospace',
            fontWeight: '700',
            opacity: '0.5',
          }}>
            ASHIK™ 2025
          </div>
        </div>

        {/* Additional info below */}
        <div style={{
          textAlign: 'center',
          marginTop: '60px',
          padding: '32px',
          background: '#fff',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
          border: '3px dashed rgba(0, 0, 0, 0.1)',
        }}>
          <p style={{
            fontSize: '16px',
            color: '#666',
            lineHeight: '1.6',
            fontFamily: '"Comic Sans MS", cursive, sans-serif',
            marginBottom: '16px',
          }}>
            In this video, I share my journey, what drives me, and how I approach building solutions for clients.
          </p>
          <p style={{
            fontSize: '14px',
            color: '#999',
            fontFamily: '"Comic Sans MS", cursive, sans-serif',
          }}>
            (Don't worry, I kept it short and sweet! ☕)
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoCV;