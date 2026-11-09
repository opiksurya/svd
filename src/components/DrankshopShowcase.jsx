import { ArrowUpRight, ArrowRight } from 'lucide-react';
import './DrankshopShowcase.css';

const META_ITEMS = [
  { label: 'Industry', value: 'Premium Spirits / E-commerce' },
  { label: 'Role', value: 'Commercial Strategy & Advisory' },
  { label: 'Country', value: 'The Netherlands' },
  { label: 'Website', value: 'drankshop.com' }
];

const COLLECTION_BOTTLES = [
  {
    category: 'Gin',
    name: 'Arctic',
    notes: 'Jenever · citrus · clean finish',
    cardBg: '#D6EEF7',
    accentColor: '#0A3A52'
  },
  {
    category: 'Gin',
    name: 'Gin Great Today',
    notes: 'Citrus · warm herbs · pepper',
    cardBg: '#F5E6C0',
    accentColor: '#5C3A00'
  },
  {
    category: 'Gin',
    name: 'Lofi Gin',
    notes: 'Thyme · rozemarijn · zachte sinaasappel',
    cardBg: '#D4E8C2',
    accentColor: '#2A4A15'
  },
  {
    category: 'Gin',
    name: 'Spring Kiss',
    notes: 'Jasmine · roos · citrus',
    cardBg: '#F7D6DC',
    accentColor: '#6B1A25'
  },
  {
    category: '0.0% Spirit',
    name: 'Tickle Me Pink',
    notes: 'Grapefruit · floral · herbs',
    cardBg: '#FAC8D8',
    accentColor: '#7A1A35'
  },
  {
    category: '0.0% Spirit',
    name: 'Yuzzun',
    notes: 'Yuzu · aardbei · roos · kruiden',
    cardBg: '#FBF0C0',
    accentColor: '#5C4000'
  },
  {
    category: 'Gin',
    name: 'Doctor Polidori',
    notes: 'Perfecte balans · verfijnd · complex',
    cardBg: '#D0DBE8',
    accentColor: '#1A2E45'
  }
];

const ROLE_PILLARS = [
  {
    num: '01',
    title: 'Positioning & Proposition',
    desc: "Defined Drankshop's competitive positioning in the premium craft spirits market — articulating the 'Puur. Vers. Compromisloos.' brand promise into a clear commercial proposition."
  },
  {
    num: '02',
    title: 'E-commerce Go-to-Market',
    desc: 'Designed the go-to-market strategy for the online channel, covering customer acquisition, retention levers, and a product-led growth model anchored in the 7-SKU range.'
  },
  {
    num: '03',
    title: 'Commercial Architecture',
    desc: 'Built the commercial backbone: pricing strategy, margin structure, channel mix, and a wholesale-to-DTC roadmap that positions Drankshop for scalable growth.'
  }
];

const RESULTS = [
  {
    metric: '7',
    title: 'SKUs Positioned',
    desc: 'Each product given a distinct commercial identity within the brand architecture.'
  },
  {
    metric: '2x',
    title: 'Channel Expansion',
    desc: 'From single-channel DTC to a multi-channel mix including wholesale and hospitality.'
  },
  {
    metric: '0.0%',
    title: 'Market Segment Added',
    desc: 'Alcohol-free spirits range developed and launched as a growth category.'
  },
  {
    metric: '↑ Margin',
    title: 'Pricing Architecture',
    desc: 'Premium pricing strategy implemented, protecting margin while justifying brand value.'
  }
];

const OTHER_PROJECTS = [
  { id: 'mantab-one', name: 'Mantab One' },
  { id: 'synergizeflow', name: 'SynergizeFlow' },
  { id: 'regal-estate-group', name: 'Regal Estate Group' },
  { id: 'indovest', name: 'Indovest' },
  { id: 'kantoorzoeken', name: 'Kantoorzoeken' },
  { id: 'bictrl', name: 'BICTRL' },
  { id: 'consentarch', name: 'Consentarch' }
];

export default function DrankshopShowcase({
  onSelectProjectSlug,
  onOpenInquiryModal
}) {
  return (
    <div className="drankshop-showcase-root">
      {/* 1. HERO SECTION (#FFF8F3) */}
      <section className="ds-hero">
        <div className="ds-container">
          <div className="ds-hero-grid">
            <div>
              <div className="ds-breadcrumb">
                <button
                  type="button"
                  className="ds-breadcrumb-link"
                  onClick={() => onSelectProjectSlug && onSelectProjectSlug(null)}
                >
                  Projects
                </button>
                <span>/</span>
                <span className="ds-breadcrumb-current">Drankshop</span>
              </div>

              <span className="ds-hero-eyebrow">
                Premium Dutch Spirits &middot; E-commerce
              </span>

              <h1 className="ds-hero-title">
                DRANK
                <br />
                SHOP
              </h1>

              <p className="ds-hero-quote">&ldquo;Puur. Vers. Compromisloos.&rdquo;</p>

              <p className="ds-hero-desc">
                A curated premium gin and alcohol-free spirits brand from the Netherlands — seven
                distinctive bottles, one uncompromising standard of quality.
              </p>

              <div className="ds-hero-actions">
                <a
                  href="https://drankshop.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ds-btn-orange"
                >
                  <span>Visit Drankshop.com</span>
                  <ArrowUpRight size={15} />
                </a>

                <button
                  type="button"
                  className="ds-btn-outline-dark"
                  onClick={() => onSelectProjectSlug && onSelectProjectSlug(null)}
                >
                  <span>All Projects</span>
                </button>
              </div>
            </div>

            <div className="ds-hero-visual">
              <img
                src="https://oliemuller.nl/wp-content/uploads/2026/09/Image-Drankshop-premium-spirits.png"
                alt="Drankshop premium Dutch spirits collection"
                className="ds-hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. 4-COLUMN META BAR (#FF6600) */}
      <section className="ds-meta-bar">
        <div className="ds-container">
          <div className="ds-meta-grid">
            {META_ITEMS.map((item) => (
              <div key={item.label} className="ds-meta-item">
                <span className="ds-meta-label">{item.label}</span>
                <p className="ds-meta-value">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE BRAND SECTION (#FFFFFF) */}
      <section className="ds-brand-section">
        <div className="ds-container">
          <div className="ds-brand-grid">
            <div className="ds-brand-copy">
              <span className="ds-eyebrow-orange">The Brand</span>
              <h2 className="ds-section-title">
                Gewoon is <span>nooit genoeg.</span>
              </h2>
              <p>
                Drankshop was born from a simple but uncompromising conviction: that ordinary is
                never enough. Every bottle in the collection is a deliberate choice — selected,
                curated, and positioned to deliver a specific sensory experience.
              </p>
              <p>
                The brand spans seven SKUs across two categories: craft gin and alcohol-free
                spirits. Each product carries its own identity, flavor story, and visual language —
                while the Drankshop name serves as a mark of uncompromising quality across all of
                them.
              </p>
              <p>
                With a Dutch-first voice and a design language borrowed from editorial fashion and
                premium lifestyle brands, Drankshop positions itself at the intersection of craft,
                culture, and modern consumption.
              </p>
            </div>

            <div className="ds-brand-collage">
              <img
                src="https://oliemuller.nl/wp-content/uploads/2026/09/Image-Drankshop-cocktails.png"
                alt="Drankshop craft cocktails"
                className="ds-collage-tall-img"
              />

              <div className="ds-collage-right-col">
                <img
                  src="https://oliemuller.nl/wp-content/uploads/2026/09/Image-Premium-spirits-glass.png"
                  alt="Premium spirits glass"
                  className="ds-collage-top-img"
                />

                <div className="ds-collage-sku-card">
                  <span className="ds-collage-sku-num">7</span>
                  <span className="ds-collage-sku-label">Signature SKUs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE COLLECTION (#FFF8F3) */}
      <section className="ds-collection-section">
        <div className="ds-container">
          <span className="ds-eyebrow-orange">The Collection</span>
          <h2 className="ds-section-title" style={{ marginBottom: 0 }}>
            Seven bottles. <span>One standard.</span>
          </h2>

          <div className="ds-collection-grid">
            {COLLECTION_BOTTLES.map((bottle) => (
              <div
                key={bottle.name}
                className="ds-bottle-card"
                style={{
                  backgroundColor: bottle.cardBg,
                  color: bottle.accentColor
                }}
              >
                <span
                  className="ds-bottle-badge"
                  style={{
                    backgroundColor: bottle.accentColor,
                    color: bottle.cardBg
                  }}
                >
                  {bottle.category}
                </span>

                <div>
                  <h3 className="ds-bottle-name" style={{ color: bottle.accentColor }}>
                    {bottle.name}
                  </h3>
                  <p className="ds-bottle-notes" style={{ color: bottle.accentColor }}>
                    {bottle.notes}
                  </p>
                </div>
              </div>
            ))}

            {/* 8th Card: Discover All */}
            <a
              href="https://drankshop.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ds-discover-card"
            >
              <span className="ds-discover-top">Discover all</span>
              <span className="ds-discover-domain">
                <span>drankshop.com</span>
                <ArrowUpRight size={15} />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* 5. OUR ROLE (#FFFFFF, 2-COLUMN SPLIT) */}
      <section className="ds-role-section">
        <div className="ds-container">
          <div className="ds-role-split">
            <div>
              <span className="ds-eyebrow-blue">Our Role</span>
              <h2 className="ds-section-title" style={{ fontSize: 'clamp(1.85rem, 3vw, 2.5rem)' }}>
                The challenge we were handed.
              </h2>
              <p className="ds-role-desc">
                Drankshop had a compelling product and a distinct brand voice. What they needed was
                a commercial architecture to match — and a strategy for building a sustainable
                direct-to-consumer business in a competitive market.
              </p>
            </div>

            <div className="ds-role-list">
              {ROLE_PILLARS.map((item) => (
                <div key={item.num} className="ds-role-item">
                  <span className="ds-role-num">{item.num}</span>
                  <div className="ds-role-content">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. RESULTS (#FFF8F3) */}
      <section className="ds-results-section">
        <div className="ds-container">
          <span className="ds-eyebrow-blue">Results</span>
          <h2 className="ds-section-title" style={{ marginBottom: 0 }}>
            What it <span>delivered.</span>
          </h2>

          <div className="ds-results-grid">
            {RESULTS.map((res) => (
              <div key={res.title} className="ds-result-card">
                <div className="ds-result-metric">{res.metric}</div>
                <h3>{res.title}</h3>
                <p>{res.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA BANNER (#FF6600) */}
      <section className="ds-cta-banner">
        <div className="ds-container">
          <div className="ds-cta-inner">
            <span className="ds-cta-eyebrow">Experience the brand</span>
            <h2 className="ds-cta-title">PUUR. VERS. COMPROMISLOOS.</h2>
            <p className="ds-cta-desc">
              Visit drankshop.com to explore the full collection, discover each spirit&rsquo;s
              story, and order directly.
            </p>

            <div className="ds-cta-actions">
              <a
                href="https://drankshop.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ds-btn-white-orange"
              >
                <span>Visit Drankshop.com</span>
                <ArrowUpRight size={15} />
              </a>

              <button
                type="button"
                className="ds-btn-outline-white"
                onClick={onOpenInquiryModal}
              >
                <span>Work with Us</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. OTHER PROJECTS BAR */}
      <section className="ds-other-bar">
        <div className="ds-container">
          <div className="ds-other-inner">
            <h2 className="ds-other-heading">Other Projects</h2>

            <div className="ds-other-pills-grid">
              {OTHER_PROJECTS.map((proj) => (
                <button
                  key={proj.id}
                  type="button"
                  className="ds-other-pill"
                  onClick={() => onSelectProjectSlug && onSelectProjectSlug(proj.id)}
                >
                  <span>{proj.name}</span>
                  <ArrowRight size={14} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

