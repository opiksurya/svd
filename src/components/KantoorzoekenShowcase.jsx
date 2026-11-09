import { useState } from 'react';
import {
  ArrowUpRight,
  Building2,
  Zap,
  Wifi,
  Sparkles,
  Coffee,
  FileCheck2,
  ChevronDown,
  ArrowRight
} from 'lucide-react';
import './KantoorzoekenShowcase.css';

const CITIES = [
  'Amsterdam',
  'Rotterdam',
  'Utrecht',
  'The Hague',
  'Eindhoven',
  'Tilburg',
  'Groningen',
  'Brussels',
  'Antwerp',
  'Ghent',
  'Breda',
  'Almere'
];

const REASONS = [
  {
    num: '01',
    title: 'We Find Your Dream Workspace',
    desc: 'We listen carefully to your needs and search the entire market to find the perfect workspace for your business — from a single desk to a full headquarters.'
  },
  {
    num: '02',
    title: 'We Cover the Entire Country',
    desc: 'Active across the Netherlands and Belgium, with local experts available in all major cities including Amsterdam, Rotterdam, Utrecht, The Hague, and Eindhoven.'
  },
  {
    num: '03',
    title: 'We Negotiate Your Best Deal',
    desc: "Thanks to our extensive experience and industry relationships, we negotiate the best price on your behalf — getting you terms you wouldn't achieve alone."
  },
  {
    num: '04',
    title: 'Completely Free of Charge',
    desc: 'Our service and advice are free, impartial, and entirely without obligation. We are paid by the landlord or workspace provider — never by you.'
  }
];

const PROCESS_STEPS = [
  {
    step: '1',
    title: 'Tell Us What You Need',
    desc: 'Share your requirements: location, team size, budget, preferred contract length, and any must-have amenities. A consultation takes less than 15 minutes.'
  },
  {
    step: '2',
    title: 'We Search the Market',
    desc: 'Our local experts search the full Dutch and Belgian workspace market — including options not publicly listed — and present you with a curated shortlist.'
  },
  {
    step: '3',
    title: 'We Negotiate the Best Terms',
    desc: "We handle the negotiation on your behalf, using our industry relationships to secure better pricing and more flexible terms than you'd get alone."
  },
  {
    step: '4',
    title: 'You Move In',
    desc: "Once you've chosen, we handle the paperwork and coordinate the onboarding. You focus on running your business — we handle the rest."
  }
];

const PRICING_ITEMS = [
  {
    icon: Building2,
    title: 'Rent',
    desc: 'Your workspace — hot desk, dedicated desk, private office, or full building. Exactly what you need.'
  },
  {
    icon: Zap,
    title: 'Utilities',
    desc: 'Electricity, heating, and air conditioning included. No surprise invoices at the end of the month.'
  },
  {
    icon: Wifi,
    title: 'High-Speed Internet',
    desc: 'Business-grade Wi-Fi and wired connections included across all locations in our network.'
  },
  {
    icon: Sparkles,
    title: 'Cleaning Services',
    desc: 'Daily or weekly professional cleaning of your workspace and shared areas — always included.'
  },
  {
    icon: Coffee,
    title: 'Shared Amenities',
    desc: 'Access to kitchens, breakout areas, reception, and communal facilities at no extra cost.'
  },
  {
    icon: FileCheck2,
    title: 'Transparent Extras',
    desc: 'Meeting room bookings or printing? Any additional costs are always clearly stated on the listing page — no surprises.'
  }
];

const TESTIMONIALS = [
  {
    quote:
      'Als oprichter kan ik niet overal expert in zijn. Kantoor Zoeken gaf ons de internationale vastgoedexpertise die we misten. We hebben ons Europese hoofdkantoor vanuit de VS veiliggesteld zonder ook maar één locatie te bezoeken. Ongelooflijk krachtig.',
    name: 'Raoul Oliemuller',
    role: 'CEO, MantabOne',
    avatarUrl: 'https://oliemuller.nl/wp-content/uploads/2026/09/Container-2-1.png',
    theme: 'dark'
  },
  {
    quote:
      'Het Office Search Platform is een ware krachtvermenigvuldiger. We waren bezig met de planning van onze eerste binnenlandse uitbreiding en alleen al de chattool bespaarde mijn operationele team tientallen uren. We namen datagedreven beslissingen met vertrouwen, niet op basis van gissingen.',
    name: 'Sergio van Dijk',
    role: 'COO, MantabOne',
    avatarUrl: 'https://oliemuller.nl/wp-content/uploads/2026/09/Container-3-1.png',
    theme: 'light'
  }
];

const FAQ_ITEMS = [
  {
    q: 'Waarin verschilt Kantoor Zoeken van een traditionele makelaar?',
    a: 'Wij combineren een digitaal platform en realtime marktinzicht met persoonlijke begeleiding van lokale experts. Waar traditionele makelaars vaak een beperkt netwerk vertegenwoordigen, doorzoeken wij 100% van de Nederlandse en Belgische markt — volledig gratis en onafhankelijk voor de huurder.'
  },
  {
    q: 'Wat betekent "flexibele oplossing" eigenlijk?',
    a: 'Flexibel betekent dat uw kantoorruimte meebeweegt met uw bedrijf. Of u nu een maandelijks opzegbare werkplek zoekt, een privékantoor voor 10 personen met groeimogelijkheden, of een langetermijnhoofdkantoor op maat: wij onderhandelen contractvoorwaarden die passen bij uw groeifase.'
  },
  {
    q: 'Is deze service kosteneffectief voor een kleine startup of freelancer?',
    a: 'Absoluut. Onze dienstverlening is 100% kosteloos voor elke zoekende partij — van zelfstandige professionals en startups tot internationale enterprises. Wij worden vergoed door de verhuurder of operator, zonder dat dit invloed heeft op uw huurprijs.'
  },
  {
    q: 'Wat is bij de prijs inbegrepen? Zijn er verborgen kosten?',
    a: 'Bij vrijwel al onze flexibele kantooroplossingen zijn huur, nutsvoorzieningen (gas, water, licht), zakelijk glasvezelinternet, schoonmaak en gebruik van algemene ruimtes inbegrepen. Eventuele extra opties zoals vergaderruimtes of parkeerplaatsen worden altijd vooraf transparant vermeld.'
  }
];

const ROLE_PILLARS = [
  {
    num: '01',
    title: 'Brand Positioning & Dutch Market Entry',
    desc: "Positioned Kantoorzoeken.nl as the go-to office search concierge for the Dutch and Belgian market — differentiating it from generic listing platforms by leading with the free, full-service search model. The 'Wij vinden uw droomruimte' (We find your dream workspace) brand promise captures the human, service-first approach that sets it apart."
  },
  {
    num: '02',
    title: 'SEO Architecture & Local Content Strategy',
    desc: 'Built the content and SEO strategy around city-level location pages (Amsterdam, Rotterdam, Utrecht, The Hague, Eindhoven) and a Dutch-language blog targeting workspace decision-makers. Topics like all-inclusive business centers and hybrid working positions Kantoorzoeken as a thought leader in the Dutch flexible workspace market.'
  },
  {
    num: '03',
    title: 'Conversion Funnel & Trust Signals',
    desc: "Designed the free-service trust framework — making the no-cost model the central conversion driver rather than a footnote. Structured the testimonial strategy (including Raoul Oliemuller's account of securing a European HQ remotely) and FAQ architecture to pre-empt objections and accelerate lead capture."
  }
];

const OTHER_PROJECTS = [
  {
    id: 'drankshop',
    category: 'Digital Commerce · Benelux',
    name: 'Drankshop',
    desc: 'High-conversion B2C & B2B beverage digital commerce and automated fulfillment architecture.'
  },
  {
    id: 'synergizeflow',
    category: 'Enterprise & Intelligence',
    name: 'SynergizeFlow',
    desc: 'End-to-end workflow orchestration and continuous operational improvement engine.'
  },
  {
    id: 'consentarch',
    category: 'Compliance & Privacy',
    name: 'Consentarch',
    desc: 'Architectural privacy, autonomous compliance scanning, and zero-latency edge deployment.'
  },
  {
    id: 'indovest',
    category: 'Cross-Border Investment',
    name: 'Indovest',
    desc: 'Strategic real estate investment in Bali and Lombok with 9%–24% annual returns.'
  },
  {
    id: 'regal-estate-group',
    category: 'PropTech & Real Estate',
    name: 'Regal Estate Group',
    desc: 'Strategic real estate portfolio advisory and institutional brand positioning.'
  },
  {
    id: 'bictrl',
    category: 'Multi-Agent AI BI',
    name: 'BICTRL',
    desc: 'From raw spreadsheets to executive dashboards in minutes with 10+ specialized AI agents.'
  }
];

export default function KantoorzoekenShowcase({
  onSelectProjectSlug,
  onOpenInquiryModal
}) {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="kantoorzoeken-showcase-root">
      {/* 1. HERO SECTION (#1B2F32) */}
      <section className="kz-hero">
        <div className="kz-container">
          <div className="kz-hero-grid">
            <div>
              <div className="kz-breadcrumb">
                <button
                  type="button"
                  className="kz-breadcrumb-link"
                  onClick={() => onSelectProjectSlug && onSelectProjectSlug(null)}
                >
                  PROJECTS
                </button>
                <span className="kz-breadcrumb-sep">/</span>
                <span className="kz-breadcrumb-current">KANTOORZOEKEN</span>
              </div>

              <div className="kz-hero-badge">
                <span className="kz-hero-badge-dot" />
                <span className="kz-hero-badge-text">
                  Office Search · Netherlands &amp; Belgium · Free Service
                </span>
              </div>

              <h1 className="kz-hero-title">Wij vinden uw droomruimte.</h1>
              <p className="kz-hero-subtitle-en">&ldquo;We find your dream workspace.&rdquo;</p>

              <p className="kz-hero-desc">
                We listen to your needs and search the entire Dutch and Belgian market to find the
                perfect workspace for your business — completely free of charge.
              </p>

              <div className="kz-hero-actions">
                <a
                  href="https://kantoorzoeken.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="kz-btn-primary"
                >
                  <span>Visit kantoorzoeken.nl</span>
                  <ArrowUpRight size={16} />
                </a>

                <button
                  type="button"
                  className="kz-btn-outline"
                  onClick={() => onSelectProjectSlug && onSelectProjectSlug(null)}
                >
                  <span>All Projects</span>
                </button>
              </div>
            </div>

            <div className="kz-hero-visual">
              <img
                src="https://oliemuller.nl/wp-content/uploads/2026/09/Image-Modern-Dutch-office-workspace.jpg"
                alt="Modern Dutch office workspace — Kantoorzoeken.nl"
                className="kz-hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. 4-COLUMN STATS BAR (#52696C) */}
      <section className="kz-stats-bar">
        <div className="kz-container">
          <div className="kz-stats-grid">
            <div className="kz-stat-item">
              <div className="kz-stat-value">NL + BE</div>
              <div className="kz-stat-label">Netherlands &amp; Belgium</div>
            </div>

            <div className="kz-stat-item">
              <div className="kz-stat-value">&euro; 0</div>
              <div className="kz-stat-label">Cost to you — always free</div>
            </div>

            <div className="kz-stat-item">
              <div className="kz-stat-value">All</div>
              <div className="kz-stat-label">Major cities covered</div>
            </div>

            <div className="kz-stat-item">
              <div className="kz-stat-value">24/7</div>
              <div className="kz-stat-label">AI Concierge available</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE PLATFORM SECTION */}
      <section className="kz-section kz-section-white">
        <div className="kz-container">
          <div className="kz-platform-grid">
            <div className="kz-platform-copy">
              <span className="kz-eyebrow">The Platform</span>
              <h2 className="kz-section-title">Not a listing site. A search partner.</h2>
              <p>
                Kantoorzoeken.nl is a Dutch office search concierge platform that does the hard
                work for you. Instead of browsing thousands of listings yourself, you simply tell
                us what you need — and our local experts search the entire Dutch and Belgian market
                on your behalf.
              </p>
              <p>
                We are active across the Netherlands and Belgium, with local experts available in
                all major cities. Whether you need a single hot desk in Amsterdam or a full
                headquarters in Rotterdam, we find it, negotiate it, and hand it over.
              </p>
              <p>
                The service is completely free. Our advice is unbiased and without obligation — we
                are compensated by workspace providers, never by you.
              </p>
            </div>

            <div>
              <div className="kz-cities-box">
                <h3 className="kz-cities-title">Cities we cover</h3>
                <div className="kz-cities-pills">
                  {CITIES.map((city) => (
                    <span key={city} className="kz-city-pill">
                      <span className="kz-city-pill-dot" />
                      {city}
                    </span>
                  ))}
                </div>
              </div>

              <img
                src="https://oliemuller.nl/wp-content/uploads/2026/09/Image-Office-consultation.jpg"
                alt="Kantoorzoeken office consultation"
                className="kz-platform-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY KANTOORZOEKEN */}
      <section className="kz-section kz-section-mint">
        <div className="kz-container">
          <span className="kz-eyebrow">Why Kantoorzoeken</span>
          <h2 className="kz-section-title">Four reasons to let us find your workspace.</h2>
          <p className="kz-section-subtitle">
            From independent startups to international headquarters, we remove the friction from
            commercial real estate across the Benelux.
          </p>

          <div className="kz-reasons-grid">
            {REASONS.map((item) => (
              <div key={item.num} className="kz-reason-card">
                <div className="kz-reason-num">{item.num}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROCESS (HOW KANTOORZOEKEN WORKS) */}
      <section className="kz-section kz-section-white">
        <div className="kz-container">
          <span className="kz-eyebrow">Process</span>
          <h2 className="kz-section-title">How Kantoorzoeken works.</h2>
          <p className="kz-section-subtitle">
            From your first conversation to moving in — we handle every step. No complex platform
            to learn, no spreadsheets to manage, no broker pushing you toward the option with the
            highest commission.
          </p>

          <div className="kz-process-grid">
            {PROCESS_STEPS.map((item) => (
              <div key={item.step} className="kz-process-step">
                <div className="kz-process-step-badge">{item.step}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PRICING (ALL-INCLUSIVE) */}
      <section className="kz-section kz-section-mint">
        <div className="kz-container">
          <span className="kz-eyebrow">Pricing</span>
          <h2 className="kz-section-title">All-inclusive. No hidden fees.</h2>
          <p className="kz-section-subtitle">
            Most of our workspace listings include everything you need. The price you see is the
            price you pay.
          </p>

          <div className="kz-pricing-grid">
            {PRICING_ITEMS.map((item) => {
              const IconComponent = item.icon;
              return (
                <div key={item.title} className="kz-pricing-card">
                  <div className="kz-pricing-icon">
                    <IconComponent size={20} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="kz-section kz-section-white">
        <div className="kz-container">
          <span className="kz-eyebrow">Vertrouwd door leiders</span>
          <h2 className="kz-section-title" style={{ marginBottom: '36px' }}>
            Trusted by leaders and the world&rsquo;s largest companies.
          </h2>

          <div className="kz-testimonials-grid">
            {TESTIMONIALS.map((item) => (
              <div
                key={item.name}
                className={`kz-testimonial-card ${
                  item.theme === 'dark' ? 'kz-testimonial-dark' : 'kz-testimonial-light'
                }`}
              >
                <div>
                  <span className="kz-testimonial-quote-mark">&ldquo;</span>
                  <p className="kz-testimonial-quote">{item.quote}</p>
                </div>
                <div className="kz-testimonial-author">
                  <img
                    src={item.avatarUrl}
                    alt={item.name}
                    className="kz-testimonial-avatar-img"
                  />
                  <div>
                    <p className="kz-testimonial-name">{item.name}</p>
                    <p className="kz-testimonial-role">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ (VEELGESTELDE VRAGEN) */}
      <section className="kz-section kz-section-mint">
        <div className="kz-container">
          <span className="kz-eyebrow">Veelgestelde vragen</span>
          <h2 className="kz-section-title" style={{ marginBottom: '32px' }}>
            Frequently Asked Questions
          </h2>

          <div className="kz-faq-list">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`kz-faq-item ${isOpen ? 'open' : ''}`}>
                  <button
                    type="button"
                    className="kz-faq-trigger"
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                  >
                    <span>{item.q}</span>
                    <span className="kz-faq-icon">
                      <ChevronDown size={16} />
                    </span>
                  </button>
                  {isOpen && <div className="kz-faq-body">{item.a}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. OUR ROLE */}
      <section className="kz-section kz-section-white">
        <div className="kz-container">
          <div className="kz-role-split">
            <div className="kz-role-intro">
              <span className="kz-eyebrow">Our Role</span>
              <h2 className="kz-section-title">
                From search platform to trusted workspace partner.
              </h2>
              <p>
                The Dutch workspace market is fragmented — traditional brokers, listing sites, and
                coworking operators each push their own agenda. Kantoorzoeken.nl needed to stand out
                as the trusted, impartial guide in a noisy market.
              </p>
            </div>

            <div className="kz-role-list">
              {ROLE_PILLARS.map((pillar) => (
                <div key={pillar.num} className="kz-role-item">
                  <span className="kz-role-num">{pillar.num}</span>
                  <div className="kz-role-content">
                    <h3>{pillar.title}</h3>
                    <p>{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. CTA BANNER (#1B2F32) */}
      <section className="kz-cta-banner">
        <div className="kz-container">
          <div className="kz-cta-inner">
            <h2 className="kz-cta-title">Vind jouw ruimte om te bloeien.</h2>
            <p className="kz-cta-subtitle-en">Your time is too valuable for guesswork.</p>
            <p className="kz-cta-desc">
              Stop browsing endless office listings. Tell us what your team needs and let our Dutch
              and Belgian workspace experts find and negotiate your ideal office — 100% free.
            </p>

            <div className="kz-cta-actions">
              <a
                href="https://kantoorzoeken.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="kz-btn-primary"
              >
                <span>Visit kantoorzoeken.nl</span>
                <ArrowUpRight size={16} />
              </a>

              <button
                type="button"
                className="kz-btn-outline"
                onClick={onOpenInquiryModal}
              >
                <span>Work with Us</span>
                <ArrowRight size={16} />
              </button>
            </div>

            <p className="kz-cta-address">
              Industrieweg Oost 7b, 6662 NE Elst, Nederland &middot; info@kantoorzoeken.nl
            </p>
          </div>
        </div>
      </section>

      {/* 11. OTHER PROJECTS GRID */}
      <section className="kz-section kz-section-mint">
        <div className="kz-container">
          <span className="kz-eyebrow">More Case Studies</span>
          <h2 className="kz-section-title" style={{ marginBottom: '32px' }}>
            Explore Other Projects
          </h2>

          <div className="kz-other-projects-grid">
            {OTHER_PROJECTS.map((proj) => (
              <button
                key={proj.id}
                type="button"
                className="kz-other-card"
                onClick={() => onSelectProjectSlug && onSelectProjectSlug(proj.id)}
              >
                <div>
                  <span className="kz-other-card-cat">{proj.category}</span>
                  <h4>{proj.name}</h4>
                  <p>{proj.desc}</p>
                </div>
                <span className="kz-other-card-link">
                  <span>View Project</span>
                  <ArrowRight size={14} />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

