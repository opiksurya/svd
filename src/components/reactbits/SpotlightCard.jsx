import { useRef, useState } from 'react';
import './SpotlightCard.css';

export default function SpotlightCard({
  children,
  className = '',
  spotlightColor,
  style = {},
  onClick,
  ...props
}) {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  const color = spotlightColor || 'var(--spotlight-glow, rgba(152, 141, 134, 0.16))';

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`spotlight-card ${className}`}
      style={style}
      {...props}
    >
      <div
        className="spotlight-card-overlay"
        style={{
          opacity,
          background: `radial-gradient(420px circle at ${position.x}px ${position.y}px, ${color}, transparent 80%)`,
        }}
        aria-hidden="true"
      />
      <div className="spotlight-card-content">{children}</div>
    </div>
  );
}
