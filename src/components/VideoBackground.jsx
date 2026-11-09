import { useEffect, useRef, useState } from 'react';

export default function VideoBackground({
  overlayTheme = 'cinematic', // 'cinematic' | 'studio' | 'dark'
  overlayOpacity = 0.5,
  isAutoPlay = false,
  isMuted = true,
  onTimeUpdate,
  onDurationChange,
}) {
  const videoRef = useRef(null);
  const targetTimeRef = useRef(0);
  const rafIdRef = useRef(null);
  const [duration, setDuration] = useState(10);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Handle video metadata loaded
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      const dur = videoRef.current.duration || 10;
      setDuration(dur);
      if (onDurationChange) onDurationChange(dur);
      setIsVideoLoaded(true);
      // Ensure video is paused if in scroll-driven mode
      if (!isAutoPlay) {
        videoRef.current.pause();
      }
    }
  };

  // Scroll event listener to compute target time
  useEffect(() => {
    if (isAutoPlay) return;

    const handleScroll = () => {
      const section3 = document.getElementById('section-3');
      const videoTrackEnd = section3
        ? section3.offsetTop + section3.offsetHeight - window.innerHeight * 0.25
        : document.documentElement.scrollHeight - window.innerHeight;
      const maxScroll = Math.max(videoTrackEnd, 1);

      const progress = Math.min(Math.max(window.scrollY / maxScroll, 0), 1);
      const targetTime = progress * (videoRef.current?.duration || duration || 10);
      targetTimeRef.current = targetTime;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial computation

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isAutoPlay, duration]);

  // Smooth frame interpolation loop via requestAnimationFrame
  useEffect(() => {
    if (isAutoPlay) return;

    let isRunning = true;

    const updateVideoFrame = () => {
      const video = videoRef.current;
      if (video && video.readyState >= 2) {
        const current = video.currentTime;
        const target = targetTimeRef.current;
        const diff = target - current;

        // If difference is noticeable, smoothly ease towards target
        if (Math.abs(diff) > 0.01) {
          // LERP factor 0.2 for snappy yet smooth scrubbing
          const nextTime = current + diff * 0.22;
          video.currentTime = Math.max(0, Math.min(video.duration || 10, nextTime));
          
          if (onTimeUpdate) {
            onTimeUpdate(video.currentTime, (video.currentTime / (video.duration || 10)) * 100);
          }
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
  }, [isAutoPlay, onTimeUpdate]);

  // Handle Auto-Play mode toggle
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isAutoPlay) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isAutoPlay]);

  // Handle Mute toggle
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  // Track time updates during autoplay
  const handleNativeTimeUpdate = () => {
    if (isAutoPlay && videoRef.current && onTimeUpdate) {
      onTimeUpdate(
        videoRef.current.currentTime,
        (videoRef.current.currentTime / (videoRef.current.duration || 10)) * 100
      );
    }
  };

  const getOverlayClass = () => {
    switch (overlayTheme) {
      case 'studio':
        return 'video-overlay-studio';
      case 'dark':
        return 'video-overlay-dark';
      case 'cinematic':
      default:
        return 'video-overlay-cinematic';
    }
  };

  return (
    <div className="video-bg-container">
      <video
        ref={videoRef}
        className="video-bg-element"
        src="/vid.mp4"
        playsInline
        muted={isMuted}
        preload="auto"
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleNativeTimeUpdate}
      />
      
      {/* Dynamic Overlay Layer for Text Readability & Contrast */}
      <div
        className={`video-overlay ${getOverlayClass()}`}
        style={{ opacity: overlayOpacity }}
      />
    </div>
  );
}
