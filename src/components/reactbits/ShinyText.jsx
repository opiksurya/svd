import './ShinyText.css';

export default function ShinyText({
  children,
  text,
  disabled = false,
  speed = 4,
  className = '',
  style = {}
}) {
  const content = text || children;
  const animationDuration = `${speed}s`;

  return (
    <span
      className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`}
      style={{ animationDuration, ...style }}
    >
      {content}
    </span>
  );
}
