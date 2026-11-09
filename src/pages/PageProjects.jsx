import { useState, useEffect } from 'react';
import { ArrowUpRight, ArrowLeft, ArrowRight, Check } from 'lucide-react';
import BictrlShowcase from '../components/BictrlShowcase';
import ConsentarchShowcase from '../components/ConsentarchShowcase';
import DrankshopShowcase from '../components/DrankshopShowcase';
import IndovestShowcase from '../components/IndovestShowcase';
import KantoorzoekenShowcase from '../components/KantoorzoekenShowcase';
import MantabOneShowcase from '../components/MantabOneShowcase';
import RegalEstateShowcase from '../components/RegalEstateShowcase';
import SynergizeFlowShowcase from '../components/SynergizeFlowShowcase';

export const PROJECTS_DATA = [
  {
    id: 'bictrl',
    num: '01',
    name: 'BICTRL',
    category: 'Enterprise & Intelligence',
    role: 'MULTI-AGENT AI BI PLATFORM',
    location: 'BICTRL.TECH · GLOBAL',
    title: 'BICTRL (bictrl.tech) — The AI Business Intelligence Platform',
    summary:
      'From raw spreadsheets to executive dashboards in minutes. Powered by 10+ specialized AI agents (CrewAI & LangGraph) for Dashboard Building, Conversational Data Chat, Natural Language SQL, and 365-Day Predictive Forecasting.',
    challenge:
      'Traditional BI tools (Tableau / Power BI) require SQL expertise, separate ML platforms, and weeks of manual dashboard building.',
    approach:
      'BI Controller (bictrl.tech) collapses the data stack into a single AI-native platform—combining multi-provider LLMs (OpenAI, Gemini, Claude), HyDE RAG document intelligence, and self-correcting PostgreSQL agents.',
    highlights: [
      'One-click Goal-Driven Dashboard Builder & Conversational Data Chat',
      'Natural Language SQL Agent with read-only safety & schema awareness',
      'Predictive Analytics (AutoTS/Prophet), HyDE Knowledge Base & Market Intel'
    ]
  },
  {
    id: 'consentarch',
    num: '02',
    name: 'Consentarch',
    category: 'Compliance & Architecture',
    role: 'TONAL SOVEREIGNTY IN DATA PRIVACY',
    location: 'CONSENTARCH.COM · EU / GLOBAL',
    title: 'ConsentArch (consentarch.com) — Architectural Privacy for the Modern Web',
    summary:
      'Move beyond cluttered legal pop-ups. Implement high-end consent structures with Autonomous Compliance Scanning, Cryptographic Legal Shield, and <12kb 0.02ms Zero-Latency Edge Deployment.',
    challenge:
      'Digital organizations operating across GDPR and CCPA jurisdictions face strict regulatory enforcement while heavy legacy consent pop-ups degrade user experience and Lighthouse scores.',
    approach:
      'ConsentArch detects, categorizes, and blocks non-compliant scripts in real-time, cryptographically hashes every consent event for bulletproof audit trails, and delivers via a <12kb global edge script.',
    highlights: [
      'Autonomous Compliance Scanning (real-time GA4, Pixel & tracker detection)',
      'Cryptographic Legal Shield & anonymous regional Consent Insights',
      'Zero-Latency Edge Deployment (<12kb script, 0.02ms avg. global latency)'
    ]
  },
  {
    id: 'drankshop',
    num: '03',
    name: 'Drankshop',
    category: 'Digital Commerce',
    role: 'PREMIUM DUTCH SPIRITS · E-COMMERCE',
    location: 'DRANKSHOP.COM · THE NETHERLANDS',
    title: 'Drankshop (drankshop.com) — "Puur. Vers. Compromisloos."',
    summary:
      'A curated premium gin and alcohol-free spirits brand from the Netherlands — seven distinctive bottles (Arctic, Gin Great Today, Lofi Gin, Spring Kiss, Tickle Me Pink, Yuzzun, Doctor Polidori), one uncompromising standard of quality.',
    challenge:
      'Drankshop had a compelling product and distinct brand voice, requiring a commercial architecture to match and a sustainable direct-to-consumer and multi-channel growth strategy.',
    approach:
      'Defined competitive positioning around "Puur. Vers. Compromisloos.", designed the e-commerce go-to-market model anchored in the 7-SKU collection, and built a 2x channel expansion across DTC, wholesale, and hospitality.',
    highlights: [
      '7 Signature SKUs positioned across Craft Gin & 0.0% Alcohol-Free Spirits',
      '2x channel expansion from single-channel DTC to wholesale & hospitality',
      'Premium pricing & margin architecture protecting brand equity'
    ]
  },
  {
    id: 'indovest',
    num: '04',
    name: 'Indovest',
    category: 'Cross-Border & Investment',
    role: 'REAL ESTATE INDONESIA (9%–24% ROI)',
    location: 'BALI & LOMBOK · NL / BE',
    title: 'Indovest Group (indovest.limesight.nl) — Strategic Property Investment in Indonesia',
    summary:
      'Invest in Indonesia with Indovest Group and achieve realistic top returns between 9% and 24% annually at the most beautiful locations in Bali and Lombok—tailored for Dutch and Belgian investors.',
    challenge:
      'International investors from the Netherlands and Belgium seeking high-yield property investments in Bali and Lombok require local legal guidance, government permit navigation, and vetted luxury developments.',
    approach:
      'Indovest Group provides exclusive access to premium villas and hotels (Canggu, Selong, Gili Air), personalized legal and administrative support, and full risk/return transparency.',
    highlights: [
      'Exclusive Luxury Villas & Hotels in Bali and Lombok (9%–24% annual returns)',
      'Personalized guidance for Dutch & Belgian investors with government relations support',
      'Full project risk analysis, permit handling & local market intelligence'
    ]
  },
  {
    id: 'kantoorzoeken',
    num: '05',
    name: 'Kantoorzoeken',
    category: 'PropTech & Real Estate',
    role: 'OFFICE SEARCH · NL & BE · FREE SERVICE',
    location: 'KANTOORZOEKEN.NL · NL + BE',
    title: 'Kantoorzoeken (kantoorzoeken.nl) — Wij vinden uw droomruimte.',
    summary:
      'We listen to your needs and search the entire Dutch and Belgian market to find the perfect workspace for your business — completely free of charge, covering all major cities with 24/7 AI Concierge.',
    challenge:
      'Organizations searching for flexible or permanent office space across Dutch and Belgian cities face thousands of fragmented listings and commission-biased brokers.',
    approach:
      'Kantoorzoeken.nl combines local real estate experts with a 24/7 AI Concierge to search the entire NL + BE market, negotiate the best terms, and deliver all-inclusive workspaces at € 0 cost to the tenant.',
    highlights: [
      'Full market coverage across 12+ major Dutch & Belgian cities (Amsterdam, Rotterdam, Utrecht, Brussels, Antwerp)',
      '100% free & impartial workspace search + lease negotiation (€ 0 cost to you)',
      'All-inclusive pricing transparency (Rent, Utilities, High-Speed Internet, Cleaning & Amenities)'
    ]
  },
  {
    id: 'mantab-one',
    num: '06',
    name: 'Mantab One',
    category: 'Technology & Remote Teams',
    role: 'IT OUTSTAFFING · REMOTE TALENT · NL',
    location: 'MANTAB.ONE · NETHERLANDS / GLOBAL',
    title: 'Mantab One (mantab.one) — Directly deployable remote talent for your team.',
    summary:
      'Mantab One delivers immediately deployable software developers — without long-term contracts. Trusted by 100+ international companies with 50+ vetted developers, 48h response time, and 98% client satisfaction.',
    challenge:
      'Digital agencies and tech teams in the Netherlands and Europe need reliable, technically screened software developers without long wait times, bureaucracy, or rigid long-term contracts.',
    approach:
      'Mantab One provides vetted Vue JS, PHP, Laravel, Python, ReactJS, and Flutter developers with a 48h matching process, transparent day-rate pricing, and guaranteed continuity with standby replacements.',
    highlights: [
      '50+ vetted software developers (Vue JS, PHP, Laravel, Python, ReactJS, Flutter)',
      'Trusted by 100+ international companies (Unilever, ISID, Kalibr, kkbc, Save the Children)',
      '48h response time, 98% client satisfaction & guaranteed continuity without long-term contracts'
    ]
  },
  {
    id: 'regal-estate-group',
    num: '07',
    name: 'Regal Estate Group',
    category: 'PropTech & Real Estate',
    role: 'FLEXIBLE WORKSPACES · 6,500+ LOCATIONS',
    location: 'REGALESTATEGROUP.COM · GLOBAL',
    title: 'Regal Estate Group (regalestategroup.com) — Your Perfect Workspace Awaits.',
    summary:
      'From a single desk to a full headquarters, discover flexible, cost-effective spaces designed to match your ambition. Search over 6,500 property locations around the globe with 24/7 AI Concierge intelligence.',
    challenge:
      'Traditional commercial real estate suffers from data chaos, commission-motivated broker bottlenecks, rigid long-term leases, and blind location decisions.',
    approach:
      'Regal Estate Group replaces traditional real estate friction with a side-by-side Comparison Hub, 24/7 AI Concierge intelligence, flexible 1-month to multi-year terms, and Strategic Maps for talent pool & commute analysis.',
    highlights: [
      '6,500+ global property locations (from 1 hot desk to 200+ person full buildings)',
      'Comparison Hub, 24/7 AI Concierge & Strategic Maps for talent/commute analysis',
      'Trusted by global leaders including Microsoft, PayPal, Disney, Samsung, Spotify & Uber'
    ]
  },
  {
    id: 'synergizeflow',
    num: '08',
    name: 'SynergizeFlow',
    category: 'Enterprise & Intelligence',
    role: 'AI MARKETING PLATFORM · SEO · GEO',
    location: 'SYNERGIZEFLOW.COM · GLOBAL',
    title: 'SynergizeFlow (synergizeflow.com) — Your AI Marketing Agents for SEO, Content, and AI Visibility.',
    summary:
      'Plan, create, optimize, and publish your marketing content automatically with 8 specialized AI agents built for SEO, Google visibility, and AI search (GEO) — working as one connected system.',
    challenge:
      'Without a connected system, SEO, blogs, landing pages, and social posts move in different directions and fail to capture emerging AI-generated search answers (GEO).',
    approach:
      'SynergizeFlow unites 8 specialized AI agents (Strategy, Blog, SEO, Social, Page Builder, Product, Chat, Monitor) across a 4-step automated workflow integrated with WordPress, WooCommerce, LinkedIn, TikTok, Google, and Instagram.',
    highlights: [
      '8 Specialized AI Agents working as 1 connected marketing system',
      'Optimized for both Traditional Google SEO & AI Visibility (GEO)',
      'Seamless integration with WordPress, WooCommerce, LinkedIn, TikTok, Google & Instagram'
    ]
  }
];

const CATEGORIES = [
  'All',
  'Technology & Remote Teams',
  'Enterprise & Intelligence',
  'PropTech & Real Estate',
  'Cross-Border & Investment',
  'Digital Commerce',
  'Compliance & Architecture'
];

export default function PageProjects({
  selectedProjectSlug,
  onSelectProjectSlug,
  onSelectPage,
  onOpenInquiryModal
}) {
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedProjectSlug]);

  const activeProject = PROJECTS_DATA.find((p) => p.id === selectedProjectSlug);

  // DEDICATED INDIVIDUAL PROJECT PAGE VIEW
  if (activeProject) {
    const currentIndex = PROJECTS_DATA.findIndex((p) => p.id === activeProject.id);
    const nextProject = PROJECTS_DATA[(currentIndex + 1) % PROJECTS_DATA.length];
    const prevProject =
      PROJECTS_DATA[(currentIndex - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length];

    return (
      <div className="dedicated-page">
        {/* Quick Sub-Nav Bar for all 8 Projects */}
        <div className="project-subnav-bar sheet-white">
          <div className="sheet-inner-container project-subnav-inner">
            <button
              className="page-back-link"
              onClick={() => onSelectProjectSlug(null)}
            >
              <ArrowLeft size={14} />
              <span>ALL PROJECTS</span>
            </button>

            <div className="project-Quick-pills">
              {PROJECTS_DATA.map((proj) => (
                <button
                  key={proj.id}
                  className={`project-quick-pill ${
                    proj.id === activeProject.id ? 'active' : ''
                  }`}
                  onClick={() => onSelectProjectSlug(proj.id)}
                >
                  {proj.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dedicated Project Showcases (BICTRL.TECH, CONSENTARCH.COM, DRANKSHOP, INDOVEST, KANTOORZOEKEN, MANTAB ONE) */}
        {activeProject.id === 'bictrl' ? (
          <BictrlShowcase onOpenInquiryModal={onOpenInquiryModal} />
        ) : activeProject.id === 'consentarch' ? (
          <ConsentarchShowcase onOpenInquiryModal={onOpenInquiryModal} />
        ) : activeProject.id === 'drankshop' ? (
          <DrankshopShowcase
            onSelectProjectSlug={onSelectProjectSlug}
            onOpenInquiryModal={onOpenInquiryModal}
          />
        ) : activeProject.id === 'indovest' ? (
          <IndovestShowcase onOpenInquiryModal={onOpenInquiryModal} />
        ) : activeProject.id === 'kantoorzoeken' ? (
          <KantoorzoekenShowcase
            onSelectProjectSlug={onSelectProjectSlug}
            onOpenInquiryModal={onOpenInquiryModal}
          />
        ) : activeProject.id === 'mantab-one' ? (
          <MantabOneShowcase
            onSelectProjectSlug={onSelectProjectSlug}
            onOpenInquiryModal={onOpenInquiryModal}
          />
        ) : activeProject.id === 'regal-estate-group' ? (
          <RegalEstateShowcase
            onSelectProjectSlug={onSelectProjectSlug}
            onOpenInquiryModal={onOpenInquiryModal}
          />
        ) : activeProject.id === 'synergizeflow' ? (
          <SynergizeFlowShowcase
            onSelectProjectSlug={onSelectProjectSlug}
            onOpenInquiryModal={onOpenInquiryModal}
          />
        ) : (
          <>
            {/* Dedicated Project Hero (Clean White Editorial for other projects) */}
            <section className="page-hero-section sheet-warm-gray" style={{ paddingTop: '5.5rem' }}>
              <div className="sheet-inner-container">
                <div className="sheet-top-bar">
                  <span className="clean-label">
                    PROJECT {activeProject.num} / 08 — {activeProject.name.toUpperCase()}
                  </span>
                  <span className="clean-label-muted">{activeProject.location}</span>
                </div>

                <div className="sheet-header-grid" style={{ marginBottom: '2rem' }}>
                  <div>
                    <div className="section-tag">
                      <span className="section-tag-dot" />
                      <span>{activeProject.category} · {activeProject.role}</span>
                    </div>

                    <h1 className="page-display-title" style={{ marginBottom: 0 }}>
                      {activeProject.name}
                    </h1>
                  </div>

                  <div>
                    <p className="page-lead-paragraph" style={{ marginBottom: '1.5rem' }}>
                      {activeProject.summary}
                    </p>

                    <div className="action-group">
                      <button className="btn-primary" onClick={onOpenInquiryModal}>
                        <span>INQUIRE ABOUT {activeProject.name.toUpperCase()}</span>
                        <ArrowUpRight size={16} />
                      </button>
                      <button
                        className="btn-secondary"
                        onClick={() => onSelectPage('contact')}
                      >
                        <span>PARTNERSHIP DESK</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Dedicated Project Case Breakdown */}
            <section className="page-content-section sheet-white">
              <div className="sheet-inner-container">
                <div className="sheet-top-bar">
                  <span className="clean-label">CASE ARCHITECTURE &amp; EXECUTION</span>
                  <span className="clean-label-muted">{activeProject.title}</span>
                </div>

                <div className="clean-three-col" style={{ marginBottom: '4rem' }}>
                  <div className="clean-col-item">
                    <span className="clean-col-num">01 — THE CHALLENGE</span>
                    <h3>Market &amp; Operational Context</h3>
                    <p>{activeProject.challenge}</p>
                  </div>

                  <div className="clean-col-item">
                    <span className="clean-col-num">02 — THE STRATEGY</span>
                    <h3>Architecture &amp; Execution</h3>
                    <p>{activeProject.approach}</p>
                  </div>

                  <div className="clean-col-item">
                    <span className="clean-col-num">03 — KEY DELIVERABLES</span>
                    <h3>Core Capabilities</h3>
                    <div className="page-deliverables-list" style={{ marginTop: '0.5rem' }}>
                      {activeProject.highlights.map((item, idx) => (
                        <div key={idx} className="page-deliverable-row">
                          <span className="page-deliverable-check">
                            <Check size={14} />
                          </span>
                          <p style={{ fontSize: '0.88rem' }}>{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Previous / Next Project Switcher */}
                <div className="page-article-reader-footer">
                  <div>
                    <span className="clean-label-muted">PREVIOUS PROJECT</span>
                    <h4
                      style={{
                        fontSize: '1.1rem',
                        fontWeight: 800,
                        marginTop: '0.35rem',
                        cursor: 'pointer'
                      }}
                      onClick={() => onSelectProjectSlug(prevProject.id)}
                    >
                      ← {prevProject.num} {prevProject.name}
                    </h4>
                  </div>

                  <button
                    className="btn-secondary"
                    onClick={() => onSelectProjectSlug(null)}
                  >
                    <span>VIEW ALL 8 PROJECTS</span>
                  </button>

                  <div style={{ textAlign: 'right' }}>
                    <span className="clean-label-muted">NEXT PROJECT</span>
                    <h4
                      style={{
                        fontSize: '1.1rem',
                        fontWeight: 800,
                        marginTop: '0.35rem',
                        cursor: 'pointer'
                      }}
                      onClick={() => onSelectProjectSlug(nextProject.id)}
                    >
                      {nextProject.num} {nextProject.name} →
                    </h4>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </div>
    );
  }

  // ALL 8 PROJECTS OVERVIEW VIEW
  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <div className="dedicated-page">
      {/* 1. PROJECTS HERO */}
      <section className="page-hero-section sheet-warm-gray">
        <div className="sheet-inner-container">
          <div className="sheet-top-bar">
            <span className="clean-label">04 — PORTFOLIO OF PROJECTS &amp; VENTURES</span>
            <span className="clean-label-muted">8 SELECTED INITIATIVES</span>
          </div>

          <div className="sheet-header-grid" style={{ marginBottom: '2.5rem' }}>
            <div>
              <div className="section-tag">
                <span className="section-tag-dot" />
                <span>BICTRL · CONSENTARCH · DRANKSHOP · INDOVEST · KANTOORZOEKEN · MANTAB ONE · REGAL ESTATE · SYNERGIZEFLOW</span>
              </div>
              <h1 className="page-display-title" style={{ marginBottom: 0 }}>
                Building Beyond the{' '}
                <span className="highlight">Game.</span>
              </h1>
            </div>

            <div>
              <p className="page-lead-paragraph" style={{ marginBottom: '1.5rem' }}>
                Explore the 8 core projects, platforms, and cross-border ventures spanning
                enterprise software, dedicated remote development teams, PropTech, digital
                commerce, and international investment.
              </p>

              {/* Category Filter Bar */}
              <div className="page-filter-bar">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    className={`page-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ARCHITECTURAL 8-PROJECT INDEX */}
      <section className="page-content-section sheet-white">
        <div className="sheet-inner-container">
          <div className="sheet-top-bar">
            <span className="clean-label">
              SHOWING {filteredProjects.length} OF {PROJECTS_DATA.length} PROJECTS
            </span>
            <span className="clean-label-muted">CLICK ANY PROJECT TO OPEN DEDICATED PAGE</span>
          </div>

          <div className="page-projects-stack">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="page-project-item"
                onClick={() => onSelectProjectSlug(project.id)}
              >
                <div className="page-project-header">
                  <span className="clean-col-num" style={{ marginBottom: 0 }}>
                    {project.num}
                  </span>

                  <div className="page-project-title-block">
                    <span className="page-project-meta">
                      {project.category} · {project.location}
                    </span>
                    <h3>{project.name}</h3>
                    <p
                      style={{
                        fontSize: '0.9rem',
                        color: 'var(--text-muted)',
                        marginTop: '0.35rem',
                        maxWidth: '680px'
                      }}
                    >
                      {project.summary}
                    </p>
                  </div>

                  <div className="page-project-role-badge">{project.role}</div>

                  <button
                    type="button"
                    className="page-project-toggle-btn"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                  >
                    <span>OPEN PROJECT</span>
                    <ArrowUpRight size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
