import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { assetUrl } from '../utils/assetUrl';

export default function SectionScrollVideo({
  onNextClick,
  onOpenInquiryModal
}) {
  const trackRef = useRef(null);
  const videoRef = useRef(null);
  const targetTimeRef = useRef(0);
  const rafIdRef = useRef(null);
  const [duration, setDuration] = useState(8);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      const dur = videoRef.current.duration || 8;
      setDuration(dur);
      videoRef.current.pause();
    }
  };

  // Compute scroll progress within this video track container
  useEffect(() => {
    const handleScroll = () => {
      const track = trackRef.current;
      if (!track) return;

      const rect = track.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollableDistance = Math.max(rect.height - viewportHeight, 1);
      const scrolled = -rect.top;
      const progress = Math.min(Math.max(scrolled / scrollableDistance, 0), 1);

      setScrollProgress(progress);
      const vidDur = videoRef.current?.duration || duration || 8;
      targetTimeRef.current = progress * vidDur;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [duration]);

  // Smooth 60fps LERP frame interpolation (same physics as first VideoBackground)
  useEffect(() => {
    let isRunning = true;

    const updateVideoFrame = () => {
      const video = videoRef.current;
      if (video && video.readyState >= 2) {
        const current = video.currentTime;
        const target = targetTimeRef.current;
        const diff = target - current;

        if (Math.abs(diff) > 0.01) {
          const nextTime = current + diff * 0.22;
          video.currentTime = Math.max(0, Math.min(video.duration || duration, nextTime));
        }
      }

      if (isRunning) {
        rafIdRef.current = requestAnimationFrame(updateVideoFrame);
      }
    };

    rafIdRef.current = requestAnimationFrame(updateVideoFrame);

    return () => {
      isRunning = false;
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [duration]);

  return (
    <section
      id="section-video-finale"
      ref={trackRef}
      className="pre-footer-video-track"
      aria-label="Scroll-Driven Video Showcase"
    >
      <div className="pre-footer-video-sticky">
        {/* Fullscreen Scroll-Scrubbed Video Layer (100% Unobstructed on Left & Center) */}
        <video
          ref={videoRef}
          className="pre-footer-video-element"
          src={assetUrl('/vid2.mp4?v=2')}
          playsInline
          muted
          preload="auto"
          onLoadedMetadata={handleLoadedMetadata}
        />

        {/* Subtle Edge Gradient ONLY on Right Flank so Video Subject is 100% Clear */}
        <div className="pre-footer-video-vignette" aria-hidden="true" />

        {/* Right-Aligned Editorial Content (Leaves Left & Center 100% Open for Video) */}
        <div className="pre-footer-video-content">
          <div className="pre-footer-video-card">
            <div className="section-tag">
              <span className="section-tag-dot"></span>
              <span>08 — THE NEXT CHAPTER · GLOBAL VISION</span>
            </div>

            <h2 className="section-headline">
              Driven by Vision.{' '}
              <span className="highlight">Built Across Borders.</span>
            </h2>

            <p className="section-subtext">
              From the discipline of international football to leading an interconnected
              ecosystem of 8 technology, PropTech, and cross-border ventures across Europe,
              Australia, and Indonesia.
            </p>

            <div className="action-group" style={{ marginBottom: '1.5rem' }}>
              <button className="btn-primary" onClick={onOpenInquiryModal}>
                <span>Start a Collaboration</span>
                <ArrowRight size={16} />
              </button>
            </div>

            <div
              className="scroll-indicator"
              onClick={onNextClick}
              style={{ cursor: 'pointer' }}
            >
              <span className="scroll-indicator-arrow">
                <ChevronDown size={18} />
              </span>
              <span>
                Scroll to play · {Math.round(scrollProgress * 100)}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
