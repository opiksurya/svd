import { useState } from 'react';
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  XCircle,
  CheckCircle2,
  LayoutGrid,
  Sparkles,
  CalendarClock,
  MapPin,
  ChevronDown
} from 'lucide-react';
import './RegalEstateShowcase.css';

const STATS = [
  { value: '6,500+', label: 'Global property locations' },
  { value: '1–200+', label: 'Desks or full buildings' },
  { value: '24/7', label: 'AI Concierge intelligence' },
  { value: '1 month', label: 'Minimum flexible term' }
];

const OLD_WAY_ITEMS = [
  {
    title: 'Data Chaos',
    desc: 'Juggling endless emails and messy spreadsheets just to compare a handful of options.'
  },
  {
    title: 'Broker Bottlenecks',
    desc: 'Waiting days for answers to simple questions from commission-motivated intermediaries.'
  },
  {
    title: 'Rigid, Long-Term Leases',
    desc: "Locked into expensive commitments that don't match your growth or downturn needs."
  },
  {
    title: 'Blind Decisions',
    desc: "Lacking the tools to truly understand a location's value — commute times, talent pools, cost benchmarks."
  }
];

const REGAL_WAY_ITEMS = [
  {
    title: 'Instant Clarity',
    desc: 'A powerful dashboard to compare choices side-by-side — price, amenities, location, and availability.'
  },
  {
    title: '24/7 Intelligence',
    desc: 'Get immediate answers from our AI Concierge — no waiting, no back-and-forth, no hidden agendas.'
  },
  {
    title: 'Ultimate Flexibility',
    desc: 'Choose terms that work for you. Scale up or down with ease — from one month to multi-year.'
  },
  {
    title: 'Strategic Insight',
    desc: 'Use maps to analyze talent pools and commute times before you commit to a single square meter.'
  }
];

const PLATFORM_FEATURES = [
  {
    title: 'Comparison Hub',
    desc: 'Compare spaces side-by-side on price, size, location score, amenities, and contract terms — all in one dashboard.',
    theme: 'rg-feature-navy',
    Icon: LayoutGrid
  },
  {
    title: 'AI Concierge',
    desc: 'Get instant, 24/7 answers about locations, pricing, and availability — without waiting for a broker to call you back.',
    theme: 'rg-feature-ice',
    Icon: Sparkles
  },
  {
    title: 'Flexible Terms',
    desc: 'Rent from one month to several years. Scale desks up or down without the penalty costs of traditional leases.',
    theme: 'rg-feature-blue',
    Icon: CalendarClock
  },
  {
    title: 'Strategic Maps',
    desc: 'Visualize talent pools, commute catchment areas, and competing office clusters before making your location decision.',
    theme: 'rg-feature-ice',
    Icon: MapPin
  }
];

const TESTIMONIALS = [
  {
    quote:
      "As a founder, I can't be an expert in everything. Regal Estate Group gave us the international real estate expertise we lacked. We secured our European HQ from the US without a single site visit. Unbelievably powerful.",
    name: 'Raoul Oliemuller',
    role: 'CEO, MantabOne',
    avatar: 'https://oliemuller.nl/wp-content/uploads/2026/09/Container-5.png'
  },
  {
    quote:
      'The Regal platform is a force multiplier. We were planning our first domestic expansion and the comparison tool alone saved my operations team dozens of hours. We made a data-backed decision with confidence, not guesswork.',
    name: 'Sergio van Dijk',
    role: 'COO, MantabOne',
    avatar: 'https://oliemuller.nl/wp-content/uploads/2026/09/Container-1-2.png'
  }
];

const TRUSTED_LOGOS = [
  'Microsoft',
  'PayPal',
  'Disney',
  'Samsung',
  'Spotify',
  'HSBC',
  'Accenture',
  'Uber'
];

const FAQ_ITEMS = [
  {
    q: 'How does Regal Estate Group differ from a traditional broker?',
    a: 'While traditional brokers work on commission and often have a limited portfolio, we are a technology platform providing direct access to thousands of global locations. We give you the tools (like our comparison hub and AI concierge) to make your own informed decisions with speed and transparency, without the sales pressure.'
  },
  {
    q: 'What does "flexible solution" really mean?',
    a: 'Flexible means your workspace adapts to your business trajectory. Whether you need a monthly rolling hot desk, a private office for 15 people with expansion options, or a custom multi-year enterprise headquarters, you can scale up or down without rigid lease penalties.'
  },
  {
    q: 'Is this service cost-effective for a small startup or freelancer?',
    a: 'Absolutely. Our platform is free to search and compare, and flexible workspace solutions eliminate upfront fit-out capex and long-term liabilities — making it ideal for solo founders, remote professionals, and fast-growing startups.'
  },
  {
    q: "What's included in the price? Are there hidden fees?",
    a: 'Workspace listings on Regal Estate Group clearly break down all-inclusive amenities — including high-speed internet, utilities, cleaning, reception, and meeting room access — so you can compare true total cost side-by-side with zero hidden surprises.'
  }
];

const ROLE_ITEMS = [
  {
    num: '01',
    title: 'Platform Strategy & Market Positioning',
    desc: "Positioned Regal Estate Group at the intersection of PropTech and enterprise flexibility — not as a broker, but as a technology platform. The 'From a single desk to a full headquarters' framing captures the full spectrum of clients while anchoring the value proposition in freedom and scale."
  },
  {
    num: '02',
    title: 'Content & SEO Architecture',
    desc: 'Built the content strategy around 6,500+ location pages and a high-authority blog targeting workspace decision-makers. Topics like predictive spatial analytics and distributed team design establish Regal as a thought leader in the future of work — not just a listings site.'
  },
  {
    num: '03',
    title: 'Conversion & Trust Funnel',
    desc: "Designed the comparison hub, AI Concierge positioning, and testimonial strategy (including Raoul Oliemuller's first-person account of securing a European HQ remotely) to convert search traffic into qualified leads — reducing the gap between 'browsing' and 'booking'."
  }
];

const OTHER_PROJECTS = [
  { id: 'drankshop', name: 'Drankshop' },
  { id: 'synergizeflow', name: 'SynergizeFlow' },
  { id: 'consentarch', name: 'Consentarch' },
  { id: 'indovest', name: 'Indovest' },
  { id: 'kantoorzoeken', name: 'Kantoorzoeken' },
  { id: 'bictrl', name: 'BICTRL' },
  { id: 'mantab-one', name: 'Mantab One' }
];

export default function RegalEstateShowcase({
  onSelectProjectSlug,
  onOpenInquiryModal
}) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  return (
    <div className="regal-showcase-root">
      {/* 1. HERO SECTION (#0A1628) */}
      <section className="rg-hero">
        <div className="rg-container">
          <div className="rg-hero-grid">
            <div>
              <div className="rg-breadcrumb">
                <button
                  type="button"
                  className="rg-breadcrumb-link"
                  onClick={() => onSelectProjectSlug && onSelectProjectSlug(null)}
                >
                  Projects
                </button>
                <span>/</span>
                <span className="rg-breadcrumb-current">Regal Estate Group</span>
              </div>

              <div className="rg-hero-badge">
                PropTech · Flexible Workspaces · Global Platform
              </div>

              <h1 className="rg-hero-title">Your Perfect Workspace Awaits.</h1>

              <p className="rg-hero-desc">
                From a single desk to a full headquarters, discover flexible,
                cost-effective spaces designed to match your ambition. Search over
                6,500 property locations around the globe.
              </p>

              <div className="rg-hero-actions">
                <a
                  href="https://regalestategroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rg-btn-blue"
                >
                  <span>Visit regalestategroup.com</span>
                  <ArrowUpRight size={15} />
                </a>

                <button
                  type="button"
                  className="rg-btn-outline"
                  onClick={() => onSelectProjectSlug && onSelectProjectSlug(null)}
                >
                  <span>All Projects</span>
                </button>
              </div>
            </div>

            <div className="rg-hero-visual">
              <img
                src="https://oliemuller.nl/wp-content/uploads/2026/09/Image-Modern-flexible-office-space.png"
                alt="Modern flexible office space — Regal Estate Group"
                className="rg-hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. 4-COLUMN STATS BAR (#0064C2) */}
      <section className="rg-stats-bar">
        <div className="rg-container">
          <div className="rg-stats-grid">
            {STATS.map((stat, idx) => (
              <div key={idx} className="rg-stat-item">
                <p className="rg-stat-value">{stat.value}</p>
                <p className="rg-stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE PLATFORM (Solutions for Every Scale — 2 Scale Cards) */}
      <section className="rg-section-white">
        <div className="rg-container">
          <div className="rg-header-center">
            <span className="rg-eyebrow">The Platform</span>
            <h2 className="rg-section-title">Solutions for Every Scale</h2>
            <p className="rg-section-subtitle">
              Whether you&apos;re a solo professional or a growing enterprise, our
              platform provides the flexibility to find exactly what you need, when
              you need it.
            </p>
          </div>

          <div className="rg-scale-grid">
            {/* Card 1: For the Individual (Light) */}
            <div className="rg-scale-card rg-scale-light">
              <img
                src="https://oliemuller.nl/wp-content/uploads/2026/09/Image-Individual-workspace.jpg"
                alt="Individual workspace"
                className="rg-scale-img"
              />
              <div className="rg-scale-body">
                <span className="rg-scale-pill-light">For the Individual</span>
                <h3>Professional access without long-term commitment.</h3>
                <p>
                  Perfect for freelancers, remote workers, and consultants who need
                  a professional environment without locking into expensive leases.
                </p>
                <ul className="rg-scale-checklist">
                  <li>
                    <Check size={16} color="#0064C2" />
                    <span>Cost-effective hot desks and dedicated desks</span>
                  </li>
                  <li>
                    <Check size={16} color="#0064C2" />
                    <span>Access to professional meeting rooms and amenities</span>
                  </li>
                  <li>
                    <Check size={16} color="#0064C2" />
                    <span>Flexible monthly terms</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2: For the Team (Dark Navy #0A1628) */}
            <div className="rg-scale-card rg-scale-dark">
              <img
                src="https://oliemuller.nl/wp-content/uploads/2026/09/Image-Team-office-space.jpg"
                alt="Team office space"
                className="rg-scale-img"
              />
              <div className="rg-scale-body">
                <span className="rg-scale-pill-dark">For the Team</span>
                <h3>
                  Private offices that reflect your brand and support your growth.
                </h3>
                <p>
                  Find a private office or an entire building that scales with you —
                  from two-person teams to full enterprise headquarters.
                </p>
                <ul className="rg-scale-checklist">
                  <li>
                    <Check size={16} color="#60A5FA" />
                    <span>Private offices for teams of 2 to 200+</span>
                  </li>
                  <li>
                    <Check size={16} color="#60A5FA" />
                    <span>Customizable full-floor and building solutions</span>
                  </li>
                  <li>
                    <Check size={16} color="#60A5FA" />
                    <span>Seamlessly scale your space as you grow</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY REGAL (The Smartest Way to Find Your Space — Old Way vs Regal Way) */}
      <section className="rg-section-ice">
        <div className="rg-container">
          <div className="rg-header-center">
            <span className="rg-eyebrow">Why Regal</span>
            <h2 className="rg-section-title">The Smartest Way to Find Your Space</h2>
            <p className="rg-section-subtitle">
              We replaced the frustration of traditional real estate with a platform
              built for clarity, flexibility, and speed.
            </p>
          </div>

          <div className="rg-compare-grid">
            {/* Left Card: The Frustrating Old Way */}
            <div className="rg-compare-card rg-compare-old">
              <div className="rg-compare-header">
                <XCircle size={22} color="#DC2626" />
                <h3>The Frustrating Old Way</h3>
              </div>
              <div className="rg-compare-list">
                {OLD_WAY_ITEMS.map((item, idx) => (
                  <div key={idx} className="rg-compare-item">
                    <span className="rg-compare-dot-old" />
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Card: The Regal Estate Group Way */}
            <div className="rg-compare-card rg-compare-new">
              <div className="rg-compare-header">
                <CheckCircle2 size={22} color="#60A5FA" />
                <h3>The Regal Estate Group Way</h3>
              </div>
              <div className="rg-compare-list">
                {REGAL_WAY_ITEMS.map((item, idx) => (
                  <div key={idx} className="rg-compare-item">
                    <span className="rg-compare-dot-new" />
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PLATFORM FEATURES (4 Alternating Cards) */}
      <section className="rg-section-white">
        <div className="rg-container">
          <div className="rg-header-center">
            <span className="rg-eyebrow">Platform Features</span>
            <h2 className="rg-section-title">
              Built for clarity, flexibility, and speed.
            </h2>
          </div>

          <div className="rg-features-grid">
            {PLATFORM_FEATURES.map((feat, idx) => {
              const IconComponent = feat.Icon;
              return (
                <div key={idx} className={`rg-feature-card ${feat.theme}`}>
                  <div className="rg-feature-icon">
                    <IconComponent size={20} />
                  </div>
                  <h3>{feat.title}</h3>
                  <p>{feat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. TRUSTED BY LEADERS (Testimonials + 8 Enterprise Logos) */}
      <section className="rg-section-ice">
        <div className="rg-container">
          <div className="rg-header-center">
            <span className="rg-eyebrow">Trusted by Leaders</span>
            <h2 className="rg-section-title">
              How Leaders Use Regal to Scale Smarter
            </h2>
          </div>

          <div className="rg-testimonials-grid">
            {TESTIMONIALS.map((item, idx) => (
              <div key={idx} className="rg-testimonial-card">
                <div>
                  <span className="rg-testimonial-quote-mark">&ldquo;</span>
                  <p className="rg-testimonial-quote">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
                <div className="rg-testimonial-author">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="rg-testimonial-avatar"
                  />
                  <div>
                    <p className="rg-testimonial-name">{item.name}</p>
                    <p className="rg-testimonial-role">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="rg-logos-wrap">
            <span className="rg-logos-title">Also trusted by</span>
            <div className="rg-logos-row">
              {TRUSTED_LOGOS.map((brand) => (
                <span key={brand} className="rg-logo-brand">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION (2-Column Split with Interactive Accordion) */}
      <section className="rg-section-white">
        <div className="rg-container">
          <div className="rg-faq-split">
            <div>
              <span className="rg-eyebrow">FAQ</span>
              <h2 className="rg-section-title" style={{ marginBottom: '14px' }}>
                Frequently Asked Questions
              </h2>
              <p className="rg-section-subtitle">
                Everything you need to know about finding and booking your perfect
                workspace through Regal Estate Group.
              </p>
            </div>

            <div className="rg-faq-box">
              {FAQ_ITEMS.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`rg-faq-item ${isOpen ? 'open' : ''}`}
                  >
                    <button
                      type="button"
                      className="rg-faq-trigger"
                      onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                    >
                      <span>{faq.q}</span>
                      <ChevronDown size={18} className="rg-faq-chevron" />
                    </button>
                    {isOpen && <div className="rg-faq-body">{faq.a}</div>}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 8. OUR ROLE (2-Column Split with 01, 02, 03) */}
      <section className="rg-section-ice">
        <div className="rg-container">
          <div className="rg-role-split">
            <div>
              <span className="rg-role-eyebrow">Our Role</span>
              <h2 className="rg-role-title">
                From listings platform to workspace authority.
              </h2>
              <p className="rg-role-desc">
                Regal Estate Group operates in a market dominated by opaque broker
                relationships and commission-driven advice. The opportunity: build a
                brand that stands for transparency, technology, and trust — and let
                the platform&apos;s tools do the selling.
              </p>
            </div>

            <div className="rg-role-list">
              {ROLE_ITEMS.map((role) => (
                <div key={role.num} className="rg-role-item">
                  <span className="rg-role-num">{role.num}</span>
                  <div className="rg-role-content">
                    <h3>{role.title}</h3>
                    <p>{role.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. CTA BANNER (#0A1628) */}
      <section className="rg-cta-banner">
        <div className="rg-container">
          <div className="rg-cta-inner">
            <span className="rg-cta-eyebrow">Find your space to thrive</span>
            <h2 className="rg-cta-title">
              Your time is too valuable for <span>guesswork.</span>
            </h2>
            <p className="rg-cta-desc">
              Take control of your search and discover your company&apos;s next home
              with the clarity and confidence you deserve.
            </p>
            <div className="rg-cta-actions">
              <a
                href="https://regalestategroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rg-btn-blue"
              >
                <span>Find Your Location</span>
                <ArrowUpRight size={15} />
              </a>

              <button
                type="button"
                className="rg-btn-outline"
                onClick={onOpenInquiryModal}
              >
                <span>Work with Us</span>
              </button>
            </div>
            <p className="rg-cta-footnote">
              Industrieweg Oost 7b, 6662 NE Elst, Nederland · All prices valid at
              time of inquiry, based on 24-month contracts.
            </p>
          </div>
        </div>
      </section>

      {/* 10. OTHER PROJECTS BAR (#F4F7FB) */}
      <section className="rg-other-bar">
        <div className="rg-container">
          <div className="rg-other-inner">
            <h3 className="rg-other-heading">Other Projects</h3>
            <div className="rg-other-pills-grid">
              {OTHER_PROJECTS.map((proj) => (
                <button
                  key={proj.id}
                  type="button"
                  className="rg-other-pill"
                  onClick={() =>
                    onSelectProjectSlug && onSelectProjectSlug(proj.id)
                  }
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

