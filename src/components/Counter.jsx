
import React, { useEffect, useRef } from 'react';
import { getImagePath } from '../utils/imageUtils';

const Counter = ({ 
  target, 
  suffix = '', 
  isDecimal = false, 
  icon, 
  label, 
  description 
}) => {
  const counterRef = useRef(null);
  const hasCountedRef = useRef(false);

  useEffect(() => {
    const animateCounter = (counter) => {
      const targetValue = parseFloat(target);
      const duration = 2000;
      const frameRate = 60;
      const totalFrames = Math.round((duration / 1000) * frameRate);
      let frame = 0;

      const count = () => {
        frame++;
        let progress = frame / totalFrames;
        let current = targetValue * progress;

        if (isDecimal) {
          counter.innerText = current.toFixed(1) + suffix;
        } else {
          counter.innerText = Math.floor(current) + suffix;
        }

        if (frame < totalFrames) {
          requestAnimationFrame(count);
        } else {
          counter.innerText = isDecimal ? targetValue.toFixed(1) + suffix : targetValue + suffix;
        }
      };

      requestAnimationFrame(count);
    };

    const onScroll = () => {
      if (hasCountedRef.current || !counterRef.current) return;

      const rect = counterRef.current.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

      if (isVisible) {
        const counterElement = counterRef.current.querySelector('.custom-counter');
        if (counterElement) {
          animateCounter(counterElement);
          hasCountedRef.current = true;
          window.removeEventListener("scroll", onScroll);
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // Check immediately in case already visible

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [target, suffix, isDecimal]);

  return (
    <div className="custom-stats-col wow fadeInUp" ref={counterRef}>
      <div
        className="custom-counter f-48 f-600 pb-3"
        data-target={target}
        data-suffix={suffix}
        data-decimal={isDecimal}
      >
        0{suffix}
      </div>
      <p className="custom-label f-400 m-0">{label}</p>
      {description && <p className="f-400 m-0">{description}</p>}
    </div>
  );
};

export default Counter;
