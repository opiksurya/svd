import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { assetUrl } from '../utils/assetUrl';

const MARQUEE_LOGOS = [
  { id: 'consentarch', name: 'ConsentArch', src: assetUrl('/logos/consentarch.png') },
  { id: 'drankshop', name: 'Drankshop', src: assetUrl('/logos/drankshop.png') },
  { id: 'kantoorzoeken', name: 'Kantoorzoeken.nl', src: assetUrl('/logos/kantoorzoeken.png') },
  { id: 'bictrl', name: 'BICTRL Tech', src: assetUrl('/logos/bictrl.png') },
  { id: 'indovest', name: 'Indovest', src: assetUrl('/logos/indovest.png') }
];

export default function SectionVelocityOverlap({
  onNavigate,
  onSelectProject,
  onOpenInquiryModal
}) {
  const containerRef = useRef(null);
  const ticker1Ref = useRef(null);
  const ticker2Ref = useRef(null);

  // Clean 60fps Scroll Velocity Engine (Smooth Vertical Parallax & Minimalist Ticker)
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let currentVelocity = 0;
    let targetVelocity = 0;
    let marqueeOffset1 = 0;
    let marqueeOffset2 = 0;
    let direction = 1;
    let rafId = null;

    const handleScroll = () => {
      const nowScrollY = window.scrollY;
      const delta = nowScrollY - lastScrollY;
      lastScrollY = nowScrollY;

      if (Math.abs(delta) > 0.5) {
        direction = delta > 0 ? 1 : -1;
      }
      targetVelocity = Math.max(-40, Math.min(40, delta));
    };

    const animate = () => {
      currentVelocity += (targetVelocity - currentVelocity) * 0.12;
      targetVelocity *= 0.88;

      if (containerRef.current) {
        const shiftY = Math.max(-12, Math.min(12, currentVelocity * -0.28));
        containerRef.current.style.setProperty('--vel-shift', `${shiftY.toFixed(1)}px`);
      }

      const speedBoost = Math.abs(currentVelocity) * 0.1;
      marqueeOffset1 = (marqueeOffset1 + (0.035 + speedBoost * 0.025) * direction) % 50;
      marqueeOffset2 = (marqueeOffset2 - (0.035 + speedBoost * 0.025) * direction) % 50;

      if (ticker1Ref.current) {
        ticker1Ref.current.style.transform = `translate3d(${-marqueeOffset1}%, 0, 0)`;
      }
      if (ticker2Ref.current) {
        ticker2Ref.current.style.transform = `translate3d(${marqueeOffset2 - 25}%, 0, 0)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const renderLogoStrip = (prefix) =>
    [0, 1, 2, 3].map((groupIndex) => (
      <div key={`${prefix}-${groupIndex}`} className="velocity-logo-group">
        {MARQUEE_LOGOS.map((logo) => (
          <button
            key={`${prefix}-${groupIndex}-${logo.id}`}
            type="button"
            className="velocity-logo-item"
            onClick={() => onSelectProject && onSelectProject(logo.id)}
            title={`Open ${logo.name}`}
          >
            <img
              src={logo.src}
              alt={logo.name}
              className="velocity-logo-img"
              loading="lazy"
            />
          </button>
        ))}
      </div>
    ));

  return (
    <div ref={containerRef} className="post-video-overlap-wrapper">
      {/* CLEAN MINIMALIST VELOCITY LOGO TICKER */}
      <div className="velocity-marquee-bar" aria-label="Partner & Project Logos">
        <div ref={ticker1Ref} className="velocity-marquee-inner">
          {renderLogoStrip('top')}
        </div>
      </div>

      {/* ====================================================================
          OVERLAP SECTION 1 (04): BRAND VALUES — LEARN · CREATE · SHARE
         ==================================================================== */}
      <section
        id="section-values"
        className="full-overlap-sheet sheet-white overlap-stack-1"
      >
        <div className="sheet-inner-container velocity-reactive">
          <div className="sheet-top-bar">
            <span className="clean-label">04 — BRAND VALUES</span>
            <span className="clean-label-muted">LEARN · CREATE · SHARE</span>
          </div>

          <div className="sheet-header-grid">
            <h2 className="section-headline" style={{ marginBottom: 0 }}>
              Learn. Create. <span className="highlight">Share</span>.
            </h2>
            <p className="section-subtext" style={{ marginBottom: 0 }}>
              A personal brand that represents a journey of continuous learning, creating,
              and making a positive impact—with a broad perspective and meaningful
              connections to the world.
            </p>
          </div>

          <div className="clean-three-col">
            <div className="clean-col-item">
              <span className="clean-col-num">01</span>
              <h3>Knowledge</h3>
              <p>
                A commitment to keep learning, adapting across international environments,
                and continuous self-development.
              </p>
            </div>

            <div className="clean-col-item">
              <span className="clean-col-num">02</span>
              <h3>Creativity</h3>
              <p>
                To create meaningful, relevant, and lasting work across sport,
                entrepreneurship, and technology.
              </p>
            </div>

            <div className="clean-col-item">
              <span className="clean-col-num">03</span>
              <h3>Impact</h3>
              <p>
                To share knowledge, inspiration, and cross-border opportunities that benefit
                more people and organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          OVERLAP SECTION 2 (05): VENTURE ECOSYSTEM — 8 PLATFORMS & VENTURES
         ==================================================================== */}
      <section
        id="section-mantab"
        className="full-overlap-sheet sheet-warm-gray overlap-stack-2"
      >
        <div className="sheet-inner-container velocity-reactive">
          <div className="sheet-top-bar">
            <span className="clean-label">05 — VENTURE ECOSYSTEM</span>
            <span className="clean-label-muted">
              AI · SOFTWARE · PROPTECH · INVESTMENT · COMMERCE
            </span>
          </div>

          <div className="sheet-split-2col">
            <div>
              <h2 className="section-headline">
                Eight Ventures. One Connected <span className="highlight">Ecosystem</span>.
              </h2>
              <p className="section-subtext">
                What started with connecting international engineering talent through{' '}
                <strong>Mantab One</strong> has evolved into a multi-disciplinary portfolio of 8
                ventures spanning AI platforms, PropTech marketplaces, Indonesian real estate
                investment, and premium Dutch digital commerce.
              </p>

              {/* Interactive Quick-Jump Pills for all 8 Ventures */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '1.75rem'
                }}
              >
                {[
                  { id: 'mantab-one', label: 'Mantab One' },
                  { id: 'bictrl', label: 'BICTRL' },
                  { id: 'synergizeflow', label: 'SynergizeFlow' },
                  { id: 'consentarch', label: 'ConsentArch' },
                  { id: 'regal-estate-group', label: 'Regal Estate Group' },
                  { id: 'kantoorzoeken', label: 'Kantoorzoeken' },
                  { id: 'indovest', label: 'Indovest' },
                  { id: 'drankshop', label: 'Drankshop' }
                ].map((venture) => (
                  <button
                    key={venture.id}
                    type="button"
                    className="project-quick-pill"
                    onClick={() => onSelectProject && onSelectProject(venture.id)}
                  >
                    {venture.label} ↗
                  </button>
                ))}
              </div>

              <div className="action-group">
                <button className="btn-primary" onClick={onOpenInquiryModal}>
                  <span>Partner Across Our Ventures</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            <div className="clean-list-stack">
              <div className="clean-list-row">
                <span className="clean-col-num">01</span>
                <div>
                  <h4>Technology, AI &amp; Privacy Architecture</h4>
                  <p>
                    <strong>Mantab One</strong> (50+ vetted remote developers),{' '}
                    <strong>BICTRL</strong> (10+ AI agents for business intelligence),{' '}
                    <strong>SynergizeFlow</strong> (8 AI agents for SEO &amp; GEO visibility), and{' '}
                    <strong>ConsentArch</strong> (zero-latency cryptographic privacy compliance).
                  </p>
                </div>
              </div>

              <div className="clean-list-row">
                <span className="clean-col-num">02</span>
                <div>
                  <h4>PropTech &amp; Cross-Border Real Estate</h4>
                  <p>
                    <strong>Regal Estate Group</strong> (6,500+ global flexible workspaces),{' '}
                    <strong>Kantoorzoeken.nl</strong> (100% free concierge office search across NL &amp;
                    BE), and <strong>Indovest</strong> (9%–24% ROI luxury property investments in Bali
                    &amp; Lombok).
                  </p>
                </div>
              </div>

              <div className="clean-list-row" style={{ borderBottom: 'none', paddingBottom: 0 }}>
                <span className="clean-col-num">03</span>
                <div>
                  <h4>Digital Commerce &amp; Brand Building</h4>
                  <p>
                    <strong>Drankshop</strong> (&ldquo;Puur. Vers. Compromisloos.&rdquo; — curated
                    Dutch craft gin &amp; 0.0% botanical spirits) alongside strategic D2C and wholesale
                    expansion in the Netherlands.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          OVERLAP SECTION 3 (06): GLOBAL CONNECTIONS
         ==================================================================== */}
      <section
        id="section-corridors"
        className="full-overlap-sheet sheet-white overlap-stack-3"
      >
        <div className="sheet-inner-container velocity-reactive">
          <div className="sheet-top-bar">
            <span className="clean-label">06 — GLOBAL CONNECTIONS</span>
            <span className="clean-label-muted">EUROPE · AUSTRALIA · INDONESIA</span>
          </div>

          <div className="sheet-header-grid">
            <h2 className="section-headline" style={{ marginBottom: 0 }}>
              Connecting People. Creating <span className="highlight">Opportunities</span>.
            </h2>
            <p className="section-subtext" style={{ marginBottom: 0 }}>
              Shaped by a career spanning Europe, Australia, and Indonesia, Sergio brings
              people, businesses, and opportunities together across three dynamic regions.
            </p>
          </div>

          <div className="clean-three-col">
            <div className="clean-col-item">
              <span className="clean-col-num">EU</span>
              <h3>Europe</h3>
              <p>
                Rooted in Dutch professional discipline, structured business governance, and
                European technology partnerships.
              </p>
            </div>

            <div className="clean-col-item">
              <span className="clean-col-num">AU</span>
              <h3>Australia</h3>
              <p>
                International experience at the highest competitive level, forging enduring
                cross-Pacific commercial relationships.
              </p>
            </div>

            <div className="clean-col-item">
              <span className="clean-col-num">ID</span>
              <h3>Indonesia</h3>
              <p>
                From the National Team and Persib Bandung to digital ventures—deep local
                trust, talent networks, and regional access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          OVERLAP SECTION 4 (07): PERSONAL PHILOSOPHY & IDENTITY
         ==================================================================== */}
      <section
        id="section-philosophy"
        className="full-overlap-sheet sheet-white overlap-stack-4"
      >
        <div className="sheet-inner-container velocity-reactive">
          <div className="sheet-top-bar">
            <span className="clean-label">
              07 — PERSONAL PHILOSOPHY
            </span>
            <span className="clean-label-muted">ALWAYS MOVING FORWARD</span>
          </div>

          <div className="sheet-split-2col">
            <div>
              <h2 className="section-headline">
                Always Moving <span className="highlight">Forward</span>.
              </h2>

              <blockquote className="sheet-editorial-quote">
                &ldquo;Success is not defined by where the journey begins, but by what we
                continue to build along the way.&rdquo;
              </blockquote>

              <div className="action-group">
                <button className="btn-primary" onClick={() => onNavigate('section-4')}>
                  <span>Let&apos;s Build What&apos;s Next</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            <div className="clean-list-stack">
              <div className="clean-list-row">
                <span className="clean-col-num">01</span>
                <div>
                  <h4>Global Perspective (The Globe)</h4>
                  <p>
                    Represents a broad outlook, boundless connectivity, and a strong spirit
                    to keep exploring opportunities across borders.
                  </p>
                </div>
              </div>

              <div className="clean-list-row">
                <span className="clean-col-num">02</span>
                <div>
                  <h4>Three Waves (Life Journey)</h4>
                  <p>
                    Formed naturally from three flowing waves reflecting character,
                    continuous growth, and the dynamics of life.
                  </p>
                </div>
              </div>

              <div className="clean-list-row" style={{ borderBottom: 'none', paddingBottom: 0 }}>
                <span className="clean-col-num">03</span>
                <div>
                  <h4>Letter &ldquo;V&rdquo; Identity (Progress &amp; Vision)</h4>
                  <p>
                    A custom modification of the letter &ldquo;V&rdquo; symbolizing a
                    distinctive, modern, and dynamic forward vision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLEAN MINIMALIST VELOCITY LOGO TICKER 02 */}
      <div className="velocity-marquee-bar" aria-label="Partner & Project Logos">
        <div ref={ticker2Ref} className="velocity-marquee-inner">
          {renderLogoStrip('bottom')}
        </div>
      </div>
    </div>
  );
}
