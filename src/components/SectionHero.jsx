import { ArrowRight, ChevronDown } from 'lucide-react';
import { ShinyText, MagneticButton, DecryptedText } from './reactbits';

export default function SectionHero({ onExploreClick, onConsultClick }) {
  return (
    <section id="section-1" className="scroll-section">
      <div className="balanced-split-wrapper">
        {/* LEFT FLANK: Headline, Status Tag, Narrative */}
        <div className="split-flank-left">
          <div className="section-tag">
            <span className="section-tag-dot"></span>
            <ShinyText text="A Global Journey of Sport, Business & Opportunity" speed={3.5} />
          </div>

          <h1 className="section-headline">
            BEYOND <span className="highlight"><ShinyText text="FOOTBALL." speed={3} /></span>
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
              <div className="metric-num">
                <DecryptedText text="Former Professional Footballer" animateOn="hover" />
              </div>
              <div className="metric-desc">Europe · Australia · Indonesia</div>
            </div>

            <div className="metric-line">
              <div className="metric-num">
                <DecryptedText text="Multi-Venture Entrepreneur" animateOn="hover" />
              </div>
              <div className="metric-desc">AI · Software · PropTech · Digital Commerce</div>
            </div>

            <div className="metric-line">
              <div className="metric-num">
                <DecryptedText text="Global Connector" animateOn="hover" />
              </div>
              <div className="metric-desc">8 Ventures Across Europe &amp; Asia-Pacific</div>
            </div>
          </div>

          <div className="action-group">
            <MagneticButton className="btn-primary" onClick={onConsultClick} strength={0.24}>
              <span>Get In Touch</span>
              <ArrowRight size={16} />
            </MagneticButton>

            <button className="btn-secondary" onClick={onExploreClick}>
              <span>Explore the Journey</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
