import { ArrowRight } from 'lucide-react';

export default function SectionPillars({ onNextClick, onOpenInquiryModal }) {
  return (
    <>
      {/* SECTION 2: INTRODUCTION & FOOTBALL LEGACY */}
      <section id="section-2" className="scroll-section">
        <div className="balanced-split-wrapper">
          {/* LEFT FLANK: Introduction & Evolution Headline */}
          <div className="split-flank-left">
            <div className="section-tag">
              <span className="section-tag-dot"></span>
              <span>02 — Football Legacy</span>
            </div>

            <h2 className="section-headline">
              More Than a Career. A Journey of <span className="highlight">Evolution</span>.
            </h2>

            <p className="section-subtext">
              From professional football across Europe, Australia, and Indonesia to exploring
              new opportunities in business and entrepreneurship, Sergio van Dijk&apos;s journey
              reflects adaptability, ambition, and a commitment to continuous growth.
            </p>

            <div className="action-group" style={{ marginTop: '0.5rem' }}>
              <button className="btn-primary" onClick={() => onNextClick('section-3')}>
                <span>Business &amp; Ventures</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* CENTER CLEARING: Empty space for standing person */}
          <div className="split-center-clearing" aria-hidden="true"></div>

          {/* RIGHT FLANK: Ultra-Clean Card-Free Editorial List */}
          <div className="split-flank-right">
            <div className="pillars-clean-list">
              <div className="pillar-item">
                <span className="clean-col-num">01</span>
                <div className="pillar-item-content">
                  <h3>Professional Career &amp; International Experience</h3>
                  <p>
                    Forged in European professional football and competing across international
                    leagues in Europe, Australia, and Asia with discipline and technical precision.
                  </p>
                </div>
              </div>

              <div className="pillar-item">
                <span className="clean-col-num">02</span>
                <div className="pillar-item-content">
                  <h3>Indonesian National Team</h3>
                  <p>
                    Representing the Indonesian National Team on the international stage—bridging
                    European footballing pedigree with deep heritage and national pride.
                  </p>
                </div>
              </div>

              <div className="pillar-item" style={{ borderBottom: 'none', paddingBottom: 0 }}>
                <span className="clean-col-num">03</span>
                <div className="pillar-item-content">
                  <h3>Persib Bandung &amp; Career Milestones</h3>
                  <p>
                    An iconic chapter with Persib Bandung and clubs across continents, building
                    enduring connections and a lasting legacy in Indonesian football.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: BUSINESS, VENTURE ECOSYSTEM & GLOBAL CONNECTIONS */}
      <section id="section-3" className="scroll-section">
        <div className="balanced-split-wrapper">
          {/* LEFT FLANK: Business Headline & Multi-Venture Narrative */}
          <div className="split-flank-left">
            <div className="section-tag">
              <span className="section-tag-dot"></span>
              <span>03 — Business &amp; Venture Portfolio</span>
            </div>

            <h2 className="section-headline">
              Building Beyond <span className="highlight">the Game</span>.
            </h2>

            <p className="section-subtext">
              From dedicated remote engineering teams to AI-native platforms, PropTech marketplaces,
              and cross-border real estate—building an interconnected portfolio of 8 ventures across
              Europe and Indonesia.
            </p>

            <div className="action-group">
              <button className="btn-primary" onClick={onOpenInquiryModal}>
                <span>Partnership Inquiry</span>
                <ArrowRight size={16} />
              </button>
              <button className="btn-secondary" onClick={() => onNextClick('section-values')}>
                <span>Explore Brand Values</span>
              </button>
            </div>
          </div>

          {/* CENTER CLEARING: Empty space for standing person */}
          <div className="split-center-clearing" aria-hidden="true"></div>

          {/* RIGHT FLANK: Ultra-Clean Card-Free Editorial List (Full 8-Venture Narrative) */}
          <div className="split-flank-right">
            <div className="pillars-clean-list">
              <div className="pillar-item">
                <span className="clean-col-num">01</span>
                <div className="pillar-item-content">
                  <h3>AI, SaaS &amp; Remote Engineering</h3>
                  <p>
                    Scaling global engineering talent through <strong>Mantab One</strong> alongside
                    AI-native platforms—<strong>BICTRL</strong> (Multi-Agent BI),{' '}
                    <strong>SynergizeFlow</strong> (AI Marketing &amp; GEO), and{' '}
                    <strong>ConsentArch</strong> (Privacy Architecture).
                  </p>
                </div>
              </div>

              <div className="pillar-item">
                <span className="clean-col-num">02</span>
                <div className="pillar-item-content">
                  <h3>PropTech &amp; Cross-Border Real Estate</h3>
                  <p>
                    Transforming commercial workspace discovery with{' '}
                    <strong>Regal Estate Group</strong> and <strong>Kantoorzoeken.nl</strong>, while
                    unlocking high-yield property investments in Bali &amp; Lombok via{' '}
                    <strong>Indovest</strong>.
                  </p>
                </div>
              </div>

              <div className="pillar-item" style={{ borderBottom: 'none', paddingBottom: 0 }}>
                <span className="clean-col-num">03</span>
                <div className="pillar-item-content">
                  <h3>Digital Commerce &amp; Global Connectivity</h3>
                  <p>
                    Building distinctive consumer brands like <strong>Drankshop</strong> in the
                    Netherlands and connecting founders, investors, and enterprises across Europe,
                    Australia, and Indonesia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
