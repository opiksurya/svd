import { useEffect, useRef, useState } from 'react';
import './BlurText.css';

export default function BlurText({
  text = '',
  delay = 55,
  className = '',
  as: Component = 'span',
  animateBy = 'words', // 'words' | 'letters'
  style = {}
}) {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Component ref={ref} className={`blur-text-container ${className}`} style={style}>
      {elements.map((element, index) => (
        <span
          key={index}
          className={`blur-text-element ${inView ? 'animate' : ''}`}
          style={{
            transitionDelay: `${index * delay}ms`,
          }}
        >
          {element}
          {animateBy === 'words' && index < elements.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </Component>
  );
}
