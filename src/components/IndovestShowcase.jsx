import { useState } from 'react';
import './IndovestShowcase.css';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

const INDOVEST_PILLARS = [
  {
    icon: 'https://indovest.limesight.nl/wp-content/uploads/2026/04/network-1.svg',
    title: 'Exclusive Access to Premium Projects',
    desc: 'Our extensive network and deep market knowledge enable us to give you access to carefully selected investment projects in Indonesia, whether in real estate, infrastructure, or other sectors.'
  },
  {
    icon: 'https://indovest.limesight.nl/wp-content/uploads/2026/04/leadership-1.svg',
    title: 'Personalized Guidance and Support',
    desc: 'Our experts guide you through every step of your investment journey. From finding the right project to handling legal and administrative processes, we make your investment smooth and successful.'
  },
  {
    icon: 'https://indovest.limesight.nl/wp-content/uploads/2026/04/government-1.svg',
    title: 'Strategic Relationships with the Government',
    desc: 'Our strong ties with Indonesian government agencies help you secure permits, subsidies, and policy incentives. We ensure your investment follows regulations and gets maximum support.'
  },
  {
    icon: 'https://indovest.limesight.nl/wp-content/uploads/2026/04/analysis-1.svg',
    title: 'In-Depth Insights and Transparency',
    desc: 'At IndoVestGroup, we value transparency and open communication. You receive detailed info on every project, including risk analysis and potential returns, so you can make informed decisions.'
  },
  {
    icon: 'https://indovest.limesight.nl/wp-content/uploads/2026/04/partner-1.svg',
    title: 'Local Expertise with International Insights',
    desc: 'Our combination of local expertise and international insight ensures you fully leverage Indonesia’s market potential. We provide strategic advice and market analysis tailored to your specific investment goals.'
  }
];

const INDOVEST_PROPERTIES = [
  {
    id: 'lansing-2',
    name: 'Lansing 2',
    price: '€49,000',
    location: 'Lombok',
    area: '1150 ft²',
    building: '820 ft²',
    status: 'Available',
    type: 'Villa',
    image: 'https://indovest.limesight.nl/wp-content/uploads/2026/04/IVG-Juul-en-GJ3.jpg',
    desc: 'Experience the ultimate escape where luxury meets nature – discover the beauty of Lombok villas and unwind in paradise.'
  },
  {
    id: 'pondok-santi',
    name: 'Pondok Santi Estate',
    price: '€134,900',
    location: 'Lombok',
    area: '1320 ft²',
    building: '950 ft²',
    status: 'Sold',
    type: 'Villa',
    image: 'https://indovest.limesight.nl/wp-content/uploads/2026/04/1-1024x683.jpg',
    desc: 'Experience the ultimate escape where luxury meets nature – discover the beauty of Lombok villas and unwind in paradise.'
  },
  {
    id: 'pinkcoco-gili-air',
    name: 'Pinkcoco Gili Air',
    price: '€178,250',
    location: 'Lombok',
    area: '1600 ft²',
    building: '1120 ft²',
    status: 'Available',
    type: 'Hotel',
    image: 'https://indovest.limesight.nl/wp-content/uploads/2026/04/4-1024x683.jpg',
    desc: 'Experience the ultimate escape where luxury meets nature – discover the beauty of Lombok villas and unwind in paradise.'
  },
  {
    id: 'new-property-bali',
    name: 'New Property — Bali Resort',
    price: '$500.00 / unit',
    location: 'Bali',
    area: '100 ft²',
    building: '50 ft²',
    status: 'Available',
    type: 'Hotel',
    image: 'https://indovest.limesight.nl/wp-content/uploads/2026/04/2-1024x684.jpg',
    desc: 'Strategic fractional hospitality and resort investment opportunity in Bali with strong international tourism occupancy.'
  }
];

const TOURISM_HIGHLIGHTS = [
  {
    title: 'The Enchanting Lakes of Indonesia',
    image:
      'https://indovest.limesight.nl/wp-content/uploads/2026/04/d3d19199f9f8a9e673e788836855121b49153855-1024x685.png',
    desc: 'Scattered across thousands of islands, Indonesian lakes offer breathtaking landscapes, rich biodiversity, and deep cultural significance—from volcanic crater lakes to vast freshwater basins.'
  },
  {
    title: 'The Timeless Beauty of Indonesia’s Rice Fields',
    image:
      'https://indovest.limesight.nl/wp-content/uploads/2026/04/72645246c175e6a342e0bf06283873fee0c7d21a-1024x640.png',
    desc: 'Indonesia’s rice fields are among the most iconic landscapes in the country, painting the countryside with endless shades of green and centuries of cultural heritage.'
  },
  {
    title: 'Exceptional Service for Tourists in Indonesia',
    image:
      'https://indovest.limesight.nl/wp-content/uploads/2026/04/82cf77256f5b759c9e1923a93dd18f0dbf793647-1024x683.png',
    desc: 'Known worldwide for warm hospitality and exceptional service, welcoming international visitors with genuine kindness that drives repeat luxury tourism demand.'
  },
  {
    title: 'The Magnificent Islands of Indonesia',
    image:
      'https://indovest.limesight.nl/wp-content/uploads/2026/04/0940fea5b7876f2b18834926df292797f0177df8-1024x683.png',
    desc: 'The world’s largest archipelago consisting of more than 17,000 islands across the equator, anchored by world-renowned destinations like Bali and Lombok.'
  }
];

export default function IndovestShowcase({ onOpenInquiryModal }) {
  const [propertyFilter, setPropertyFilter] = useState('All');
  const [consultSubmitted, setConsultSubmitted] = useState(false);

  const filteredProperties =
    propertyFilter === 'All'
      ? INDOVEST_PROPERTIES
      : INDOVEST_PROPERTIES.filter(
          (p) => p.type === propertyFilter || p.status === propertyFilter
        );

  return (
    <div className="indovest-showcase-root">
      {/* 1. INDOVEST INTERNAL HEADER BAR */}
      <div className="iv-navbar">
        <div className="iv-navbar-inner">
          <a
            href="https://indovest.limesight.nl/"
            target="_blank"
            rel="noreferrer"
            className="iv-logo"
          >
            <img
              src="https://indovest.limesight.nl/wp-content/uploads/2026/04/logo-SF-1.png"
              alt="Indovest Group"
            />
          </a>

          <div className="iv-nav-links">
            <a href="#iv-hero" className="iv-nav-link active">
              Home
            </a>
            <a href="#iv-properties" className="iv-nav-link">
              Project
            </a>
            <a href="#iv-why" className="iv-nav-link">
              How it&apos;s Work
            </a>
            <a href="#iv-tourism" className="iv-nav-link">
              Track Record
            </a>
            <a href="#iv-future" className="iv-nav-link">
              About
            </a>
          </div>

          <a
            href="https://indovest.limesight.nl/"
            target="_blank"
            rel="noreferrer"
            className="iv-btn-primary"
          >
            <span>Visit Indovest</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      {/* 2. HERO SECTION (REAL ESTATE INDONESIA — 9% TO 24% ANNUAL RETURNS) */}
      <section id="iv-hero" className="iv-hero">
        <div className="iv-container">
          <div className="iv-hero-grid">
            <div>
              <span className="iv-hero-tag">REAL ESTATE INDONESIA</span>

              <h1>
                Invest in Indonesia with Indovest Group and achieve realistic top returns
                between <span style={{ color: 'var(--iv-peach)' }}>9% and 24%</span> annually
                at the most beautiful locations.
              </h1>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <button
                  type="button"
                  onClick={onOpenInquiryModal}
                  className="iv-btn-primary"
                  style={{ fontSize: '1rem', padding: '0.95rem 2.2rem' }}
                >
                  Free Consultation
                </button>

                <a
                  href="#iv-properties"
                  className="iv-btn-primary"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.16)',
                    border: '1px solid rgba(255, 255, 255, 0.45)',
                    boxShadow: 'none',
                    fontSize: '1rem',
                    padding: '0.95rem 2rem'
                  }}
                >
                  Explore Villas &amp; Hotels
                </a>
              </div>
            </div>

            {/* Right Floating Villa Spotlight Cards */}
            <div className="iv-hero-Highlight-cards">
              <div className="iv-mini-villa-card">
                <img
                  src="https://indovest.limesight.nl/wp-content/uploads/2026/04/image-2.jpg"
                  alt="Luxury Villa Canggu, Bali"
                />
                <div className="iv-mini-villa-info">
                  <h3>Luxury Villa</h3>
                  <p>Canggu, Bali</p>
                  <span className="iv-badge-sold">SOLD</span>
                </div>
              </div>

              <div className="iv-mini-villa-card">
                <img
                  src="https://indovest.limesight.nl/wp-content/uploads/2026/04/image-4.jpg"
                  alt="Luxury Villa Selong, Lombok"
                />
                <div className="iv-mini-villa-info">
                  <h3>Luxury Villa</h3>
                  <p>Selong, Lombok</p>
                  <span className="iv-badge-limited">Limited Units</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY INDOVEST GROUP (5 PILLARS WITH OFFICIAL SVG ICONS) */}
      <section id="iv-why" className="iv-why-section">
        <div className="iv-container">
          <div className="iv-why-top-grid">
            <div>
              <span
                style={{
                  color: 'var(--iv-primary)',
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '0.5rem'
                }}
              >
                DUTCH &amp; BELGIAN INVESTOR PLATFORM
              </span>
              <h2 className="iv-section-title">Why IndoVest Group</h2>
              <p className="iv-section-desc">
                At IndoVestGroup, we understand that investing in international markets can be
                both exciting and complex. That&apos;s why we created a platform specifically
                designed for Dutch and Belgian investors who want to take advantage of unique
                opportunities in Indonesia.
              </p>
            </div>

            <div>
              <img
                src="https://indovest.limesight.nl/wp-content/uploads/2026/04/bali-1.jpg"
                alt="Bali Indonesia Real Estate"
                className="iv-why-banner-img"
              />
            </div>
          </div>

          <div className="iv-pillars-grid">
            {INDOVEST_PILLARS.map((pillar, idx) => (
              <div key={idx} className="iv-pillar-card">
                <div className="iv-pillar-icon">
                  <img src={pillar.icon} alt={pillar.title} />
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EXCLUSIVE PROPERTY INVESTMENTS (4 AUTHENTIC PROPERTIES) */}
      <section id="iv-properties" className="iv-properties-section">
        <div className="iv-container">
          <div className="iv-properties-header">
            <div>
              <h2 className="iv-section-title" style={{ marginBottom: '0.5rem' }}>
                Exclusive Property Investments
              </h2>
              <p className="iv-section-desc">
                The Best Offers Tailored to Your Investment Needs, Providing Exceptional Value
                and Exclusive Opportunities.
              </p>
            </div>

            <div className="iv-filter-pills">
              {['All', 'Villa', 'Hotel', 'Available', 'Sold'].map((f) => (
                <button
                  key={f}
                  type="button"
                  className={`iv-filter-pill ${propertyFilter === f ? 'active' : ''}`}
                  onClick={() => setPropertyFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="iv-property-grid">
            {filteredProperties.map((prop) => (
              <div key={prop.id} className="iv-property-card">
                <div className="iv-property-img-wrap">
                  <img src={prop.image} alt={prop.name} />
                  <span className="iv-property-price-tag">{prop.price}</span>
                  <span
                    className={`iv-property-status-tag ${
                      prop.status === 'Available' ? 'available' : 'sold'
                    }`}
                  >
                    {prop.status}
                  </span>
                </div>

                <div className="iv-property-body">
                  <div className="iv-property-specs">
                    <span className="iv-spec-chip">📍 {prop.location}</span>
                    <span className="iv-spec-chip">🏠 {prop.type}</span>
                    <span className="iv-spec-chip">📐 Land: {prop.area}</span>
                    <span className="iv-spec-chip">🏛 Build: {prop.building}</span>
                  </div>

                  <h3>{prop.name}</h3>
                  <p>{prop.desc}</p>

                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <button
                      type="button"
                      onClick={onOpenInquiryModal}
                      className="iv-btn-primary"
                    >
                      <span>Request Brochure</span>
                      <ArrowUpRight size={15} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INDONESIA'S RISING TOURISM ECONOMY */}
      <section id="iv-tourism" className="iv-tourism-section">
        <div className="iv-container">
          <div style={{ maxWidth: '760px' }}>
            <h2 className="iv-section-title">Indonesia’s Rising Tourism Economy</h2>
            <p className="iv-section-desc">
              Strategic infrastructure growth and increasing international arrivals continue to
              strengthen long-term property demand across Bali, Lombok, and the Indonesian
              archipelago.
            </p>
          </div>

          <div className="iv-tourism-grid">
            {TOURISM_HIGHLIGHTS.map((item, idx) => (
              <div key={idx} className="iv-tourism-card">
                <img src={item.image} alt={item.title} />
                <div className="iv-tourism-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. "YOUR FUTURE STARTS HERE" CONSULTATION SECTION */}
      <section id="iv-future" className="iv-future-section">
        <div className="iv-container">
          <div className="iv-future-grid">
            <div>
              <span className="iv-hero-tag">START YOUR INVESTMENT JOURNEY</span>
              <h2
                style={{
                  fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)',
                  fontWeight: 700,
                  marginBottom: '1.25rem'
                }}
              >
                Your future starts here
              </h2>
              <p style={{ fontSize: '1.08rem', lineHeight: 1.75, opacity: 0.92 }}>
                Take the first step toward a smarter and more strategic investment. Gain access
                to exclusive opportunities designed to deliver long-term growth, security, and
                maximum value for your future.
              </p>
            </div>

            <div className="iv-future-form">
              {consultSubmitted ? (
                <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                  <CheckCircle2
                    size={44}
                    color="var(--iv-primary)"
                    style={{ margin: '0 auto 1rem' }}
                  />
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                    Consultation Request Sent
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#555555', marginBottom: '1.25rem' }}>
                    Our Dutch &amp; Indonesian investment advisors will contact you shortly.
                  </p>
                  <button
                    type="button"
                    className="iv-btn-primary"
                    onClick={() => setConsultSubmitted(false)}
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setConsultSubmitted(true);
                  }}
                >
                  <h3
                    style={{
                      fontSize: '1.35rem',
                      fontWeight: 700,
                      color: 'var(--iv-indigo)',
                      marginBottom: '1.25rem'
                    }}
                  >
                    Schedule a Free Consultation
                  </h3>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    className="iv-input"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    className="iv-input"
                  />
                  <input
                    type="tel"
                    placeholder="Phone / WhatsApp (NL / BE / ID)"
                    className="iv-input"
                  />
                  <button
                    type="submit"
                    className="iv-btn-primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    Submit
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 7. INDOVEST SCOPED FOOTER */}
      <div className="iv-footer">
        <div className="iv-container">
          <div className="iv-footer-grid">
            <div>
              <img
                src="https://indovest.limesight.nl/wp-content/uploads/2026/04/logo-SF-1.png"
                alt="Indovest Group"
                style={{
                  height: '42px',
                  marginBottom: '1rem',
                  background: '#ffffff',
                  padding: '6px 12px',
                  borderRadius: '8px'
                }}
              />
              <p style={{ fontSize: '0.86rem', lineHeight: 1.7, opacity: 0.82 }}>
                IndoVest is an investment platform that connects international investors,
                particularly from the Netherlands and Belgium, with strategic investment
                opportunities in Indonesia—focusing on transparency, security, and long-term
                growth.
              </p>
            </div>

            <div className="iv-footer-col">
              <h4>Company</h4>
              <ul>
                <li>Home</li>
                <li>Project</li>
                <li>How it&apos;s Work</li>
                <li>Track Record</li>
                <li>About</li>
              </ul>
            </div>

            <div className="iv-footer-col">
              <h4>Info</h4>
              <ul>
                <li>Contact</li>
                <li>FAQ</li>
              </ul>
            </div>

            <div className="iv-footer-col">
              <h4>Rules</h4>
              <ul>
                <li>Terms of Service</li>
                <li>Privacy policy</li>
              </ul>
            </div>
          </div>

          <div
            style={{
              paddingTop: '1.75rem',
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '0.82rem',
              opacity: 0.75
            }}
          >
            <span>© 2026 indovest — Indovest Group</span>
            <span>Netherlands · Belgium · Bali &amp; Lombok, Indonesia</span>
          </div>
        </div>
      </div>
    </div>
  );
}

