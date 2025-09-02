
import React, { useEffect, useRef } from 'react';
import { getImagePath } from '../utils/imageUtils';

const VideoPlayer = ({ 
  src, 
  autoPlay = true, 
  loop = false, 
  muted = true, 
  className = "rounded-4",
  style = { width: "100%", height: "100%" },
  skipInterval = 2000 
}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = muted;

    // Handle autoplay
    if (autoPlay) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          console.log('Autoplay was prevented');
        });
      }
    }

    // Skip interval logic
    let interval;
    if (skipInterval > 0) {
      interval = setInterval(() => {
        if (!video.paused && video.currentTime + 0.1 < video.duration) {
          video.currentTime += 0.1;
        } else if (!video.paused) {
          video.currentTime = 0;
        }
      }, skipInterval);
    }

    // Intersection observer for pause/play on scroll
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(video);

    // Cleanup
    return () => {
      if (interval) clearInterval(interval);
      observer.disconnect();
    };
  }, [autoPlay, loop, muted, skipInterval]);

  return (
    <video
      ref={videoRef}
      className={className}
      style={style}
      loop={loop}
      playsInline
    >
      <source
        src={getImagePath(src)}
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
