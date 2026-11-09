import { useEffect, useState, useRef } from 'react';

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_#@*&';

export default function DecryptedText({
  text,
  speed = 40,
  maxIterations = 8,
  className = '',
  animateOn = 'hover', // 'hover' | 'view'
  as: Component = 'span',
  style = {},
  ...props
}) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  const startAnimation = () => {
    let iteration = 0;
    const totalIterations = text.length + maxIterations;

    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration - maxIterations) {
              return text[index];
            }
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join('')
      );

      iteration += 1;

      if (iteration > totalIterations) {
        clearInterval(interval);
        setDisplayText(text);
      }
    }, speed);
  };

  useEffect(() => {
    if (animateOn === 'view') {
      const el = elementRef.current;
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            startAnimation();
          }
        },
        { threshold: 0.3 }
      );

      observer.observe(el);
      return () => observer.disconnect();
    }
  }, [animateOn, text]);

  const handleMouseEnter = () => {
    if (animateOn === 'hover') {
      startAnimation();
      setIsHovering(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <Component
      ref={elementRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`decrypted-text ${className}`}
      style={{ cursor: animateOn === 'hover' ? 'pointer' : 'inherit', ...style }}
      {...props}
    >
      {displayText}
    </Component>
  );
}
