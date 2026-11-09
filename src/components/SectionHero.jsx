import { ArrowRight, ChevronDown } from 'lucide-react';

export default function SectionHero({ onExploreClick, onConsultClick }) {
  return (
    <section id="section-1" className="scroll-section">
      <div className="balanced-split-wrapper">
        {/* LEFT FLANK: Headline, Status Tag, Narrative */}
        <div className="split-flank-left">
          <div className="section-tag">
            <span className="section-tag-dot"></span>
            <span>A Global Journey of Sport, Business &amp; Opportunity</span>
          </div>

          <h1 className="section-headline">
            BEYOND <span className="highlight">FOOTBALL.</span>
            <br />
            BEYOND BORDERS.
          </h1>

          <p className="section-subtext">
            A global journey shaped by sport, driven by ambition, and connected by opportunities.
          </p>

          <div className="scroll-indicator" onClick={onExploreClick} style={{ cursor: 'pointer' }}>
            <span className="scroll-indicator-arrow">
              <ChevronDown size={18} />
            </span>
            <span>Explore the journey</span>
          </div>
        </div>

        {/* CENTER CLEARING: 100% Unobstructed negative space for the person in the video */}
        <div className="split-center-clearing" aria-hidden="true"></div>

        {/* RIGHT FLANK: Positioning & Strategic CTAs */}
        <div className="split-flank-right">
          <div className="metrics-stack">
            <div className="metric-line">
              <div className="metric-num">Former Professional Footballer</div>
              <div className="metric-desc">Europe · Australia · Indonesia</div>
            </div>

            <div className="metric-line">
              <div className="metric-num">Multi-Venture Entrepreneur</div>
              <div className="metric-desc">AI · Software · PropTech · Digital Commerce</div>
            </div>

            <div className="metric-line">
              <div className="metric-num">Global Connector</div>
              <div className="metric-desc">8 Ventures Across Europe &amp; Asia-Pacific</div>
            </div>
          </div>

          <div className="action-group">
            <button className="btn-primary" onClick={onConsultClick}>
              <span>Get In Touch</span>
              <ArrowRight size={16} />
            </button>

            <button className="btn-secondary" onClick={onExploreClick}>
              <span>Explore the Journey</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
