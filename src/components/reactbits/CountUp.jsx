import { useEffect, useRef, useState } from 'react';

export default function CountUp({
  to,
  from = 0,
  duration = 1.8,
  className = '',
  prefix = '',
  suffix = '',
  separator = ',',
  decimals = 0
}) {
  const [value, setValue] = useState(from);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  // Extract numeric target and any embedded suffix if 'to' is a string like "50+" or "6,500+"
  let targetNumber = 0;
  let detectedSuffix = suffix;
  let detectedPrefix = prefix;

  if (typeof to === 'number') {
    targetNumber = to;
  } else if (typeof to === 'string') {
    const cleaned = to.replace(/,/g, '');
    const match = cleaned.match(/([^\d.-]*)([\d.-]+)([^\d.-]*)/);
    if (match) {
      if (!detectedPrefix && match[1]) detectedPrefix = match[1];
      targetNumber = parseFloat(match[2]) || 0;
      if (!detectedSuffix && match[3]) detectedSuffix = match[3];
    } else {
      targetNumber = parseFloat(cleaned) || 0;
    }
  }

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime = null;

          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const elapsed = (timestamp - startTime) / 1000;
            const progress = Math.min(elapsed / duration, 1);
            
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const current = from + (targetNumber - from) * easeProgress;
            setValue(current);

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setValue(targetNumber);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [targetNumber, from, duration]);

  const formatted =
    decimals > 0
      ? value.toFixed(decimals)
      : Math.round(value).toLocaleString('en-US');

  return (
    <span ref={elementRef} className={`count-up ${className}`}>
      {detectedPrefix}
      {formatted}
      {detectedSuffix}
    </span>
  );
}
