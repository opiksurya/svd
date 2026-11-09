import { useState } from 'react';
import { 
  ArrowUpRight, 
  ArrowRight, 
  Award, 
  Globe, 
  Trophy, 
  Briefcase, 
  CheckCircle2, 
  Layers, 
  Flame, 
  Sparkles,
  MapPin,
  Compass
} from 'lucide-react';

const CAREER_STATS = [
  { value: '396', label: 'Senior Club Appearances', meta: 'Europe · Australia · Asia' },
  { value: '152', label: 'Professional Goals', meta: 'All Competitions' },
  { value: 'A-League', label: 'Golden Boot Winner', meta: '2010–11 Top Scorer (Adelaide)' },
  { value: '8', label: 'Active Business Ventures', meta: 'Tech · PropTech · Commerce' }
];

const WIKI_CLUB_MILESTONES = [
  {
    period: '2000 – 2005',
    region: 'The Netherlands',
    club: 'FC Groningen & Helmond Sport',
    role: 'Eredivisie / Eerste Divisie Striker',
    stats: '84 Matches · 13 Goals',
    description:
      'Developed within the prestigious FC Groningen youth academy alongside future global stars (including Arjen Robben). Made senior debut in 2000 helping secure Eredivisie status, followed by 3 impactful developmental seasons leading the line for Helmond Sport.'
  },
  {
    period: '2005 – 2008',
    region: 'The Netherlands',
    club: 'FC Emmen',
    role: 'Key Goalscorer & Offensive Anchor',
    stats: '110 Matches · 40 Goals',
    description:
      'Established a reputation across Dutch professional football as a clinical, physical centre-forward. Maintained a remarkable scoring rate of nearly 1 goal every 2.5 matches across 3 full seasons.'
  },
  {
    period: '2008 – 2012',
    region: 'Australia',
    club: 'Brisbane Roar & Adelaide United',
    role: 'A-League Golden Boot Winner',
    stats: '100 Matches · 48 Goals',
    description:
      'Became one of the most prolific foreign strikers in Australian A-League history. Won the prestigious A-League Golden Boot in 2010–11 with Adelaide United, spearheading campaigns across the domestic league and the AFC Champions League.'
  },
  {
    period: '2013 – 2017',
    region: 'Indonesia & Thailand',
    club: 'Persib Bandung & Suphanburi FC',
    role: 'Iconic Centre-Forward & Indonesian International',
    stats: '95 Matches · 50 Goals',
    description:
      'Became an iconic fan favorite at Persib Bandung across two historic stints (scoring 33 goals for Persib). Represented the Indonesia National Team on the international stage after naturalization, bridging European pedigree with Southeast Asian football passion.'
  },
  {
    period: '2018 – 2020',
    region: 'The Netherlands',
    club: 'VV Pelikaan-S',
    role: 'Final Playing Chapter & Transition to Agency',
    stats: 'Senior Playing Farewell',
    description:
      'Concluded his senior playing career in the Netherlands with VV Pelikaan-S while launching his international sports management and football agency practice, mentoring the next generation of Asian-European football talent.'
  }
];

const VENTURE_PORTFOLIO_CARDS = [
  {
    id: 'mantab-one',
    num: '01',
    category: 'Technology & Remote Teams',
    name: 'Mantab One',
    url: 'mantab.one',
    summary: 'Directly deployable dedicated remote software development teams across Vue.js, PHP, Laravel, Python, React, and Flutter without rigid lock-in.',
    metrics: '50+ Vetted Engineers · 100+ Global Clients'
  },
  {
    id: 'bictrl',
    num: '02',
    category: 'Enterprise Intelligence',
    name: 'BICTRL',
    url: 'bictrl.tech',
    summary: 'Multi-agent AI Business Intelligence platform featuring 10+ autonomous agents, conversational data chat, natural-language SQL, and 365-day forecasting.',
    metrics: '10+ Autonomous Agents · HyDE RAG'
  },
  {
    id: 'synergizeflow',
    num: '03',
    category: 'AI & Growth Marketing',
    name: 'SynergizeFlow',
    url: 'synergizeflow.com',
    summary: 'AI-powered marketing operating system for Traditional SEO and modern Generative Engine Visibility (GEO), automating end-to-end distribution.',
    metrics: '8 Specialized AI Agents · Google & GEO'
  },
  {
    id: 'consentarch',
    num: '04',
    category: 'Data Privacy Architecture',
    name: 'ConsentArch',
    url: 'consentarch.com',
    summary: 'Architectural privacy infrastructure delivering <12kb zero-latency global edge compliance scanning and cryptographic legal verification.',
    metrics: '<12kb Edge Script · Cryptographic Hash'
  },
  {
    id: 'regal-estate-group',
    num: '05',
    category: 'Global PropTech',
    name: 'Regal Estate Group',
    url: 'regalestategroup.com',
    summary: 'Global flexible workspace and enterprise headquarters discovery platform covering 6,500+ commercial property locations worldwide.',
    metrics: '6,500+ Global Locations · 24/7 AI Concierge'
  },
  {
    id: 'kantoorzoeken',
    num: '06',
    category: 'Dutch & Belgian Real Estate',
    name: 'Kantoorzoeken.nl',
    url: 'kantoorzoeken.nl',
    summary: 'Concierge-led workspace search and lease negotiation service across 12+ major Dutch and Belgian cities, completely free for tenants.',
    metrics: 'Amsterdam, Rotterdam, Brussels · 100% Free'
  },
  {
    id: 'indovest',
    num: '07',
    category: 'Cross-Border Investment',
    name: 'Indovest Group',
    url: 'indovest.limesight.nl',
    summary: 'Strategic real estate investment in Bali and Lombok providing European and international investors realistic 9%–24% annual returns.',
    metrics: '9%–24% Annual Returns · Bali & Lombok'
  },
  {
    id: 'drankshop',
    num: '08',
    category: 'Digital Commerce',
    name: 'Drankshop.com',
    url: 'drankshop.com',
    summary: 'Curated Dutch craft gin and 0.0% botanical spirits brand built on the philosophy of "Puur. Vers. Compromisloos." across D2C and hospitality.',
    metrics: '7 Signature SKUs · Craft & 0.0% Botanical'
  }
];

export default function PageAbout({ onSelectPage, onOpenInquiryModal }) {
  const [activeEra, setActiveEra] = useState(0);

  return (
    <div className="dedicated-page">
      {/* 1. HERO SECTION: PORTRAIT & BIOGRAPHICAL INTRODUCTION */}
      <section className="page-hero-section sheet-warm-gray">
        <div className="sheet-inner-container">
          <div className="sheet-top-bar">
            <span className="clean-label">02 — BIOGRAPHY &amp; EXECUTIVE PROFILE</span>
            <span className="clean-label-muted">SERGINHO &ldquo;SERGIO&rdquo; VAN DIJK</span>
          </div>

          <div className="page-about-hero-grid">
            <div>
              <div className="section-tag">
                <span className="section-tag-dot" />
                <span>FORMER INTERNATIONAL FOOTBALLER · MULTI-VENTURE FOUNDER · GLOBAL CONNECTOR</span>
              </div>

              <h1 className="page-display-title">
                More Than a Career.{' '}
                <span className="highlight">A Journey of Evolution.</span>
              </h1>

              <p className="page-lead-paragraph">
                Born in Assen, Netherlands, Sergio van Dijk carved out an illustrious 20-year career
                as an elite professional striker across Europe, the Australian A-League, and
                Indonesia, before translating elite sports discipline into a multi-venture business
                ecosystem spanning technology, PropTech, and international investment.
              </p>

              <p className="section-subtext" style={{ marginBottom: '2rem' }}>
                Having scored over 150 professional goals, won the A-League Golden Boot, and represented
                the Indonesian National Team, Sergio now acts as a high-trust bridge between European
                standards and Asia-Pacific opportunities—leading and co-founding 8 active initiatives
                across remote software engineering (<strong>Mantab One</strong>), AI intelligence
                (<strong>BICTRL</strong>, <strong>SynergizeFlow</strong>, <strong>ConsentArch</strong>),
                PropTech (<strong>Regal Estate Group</strong>, <strong>Kantoorzoeken</strong>),
                cross-border real estate (<strong>Indovest</strong>), and premium commerce (<strong>Drankshop</strong>).
              </p>

              <div className="action-group">
                <button className="btn-primary" onClick={() => onSelectPage('projects')}>
                  <span>EXPLORE 8 VENTURES</span>
                  <ArrowRight size={16} />
                </button>
                <button className="btn-secondary" onClick={onOpenInquiryModal}>
                  <span>PARTNERSHIP DESK</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>

            {/* Editorial Portrait Frame */}
            <div className="page-portrait-frame">
              <img
                src="/sergio-standing.png"
                alt="Sergio van Dijk Portrait"
                className="page-portrait-img"
              />
              <div className="page-portrait-caption">
                <span>SERGIO VAN DIJK</span>
                <span>THE NETHERLANDS · AUSTRALIA · INDONESIA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CAREER AT A GLANCE (METRICS STRIP) */}
      <section className="page-content-section sheet-white" style={{ padding: '3.5rem 0' }}>
        <div className="sheet-inner-container">
          <div className="about-stats-grid">
            {CAREER_STATS.map((stat, idx) => (
              <div key={idx} className="about-stat-card sheet-warm-gray">
                <span className="about-stat-val">{stat.value}</span>
                <span className="about-stat-label">{stat.label}</span>
                <span className="about-stat-meta">{stat.meta}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CHAPTER I: DETAILED FOOTBALL LEGACY TIMELINE (WIKIPEDIA DATA) */}
      <section className="page-content-section sheet-warm-gray">
        <div className="sheet-inner-container">
          <div className="sheet-top-bar">
            <span className="clean-label">CHAPTER I — FOOTBALL CAREER &amp; HONOURS</span>
            <span className="clean-label-muted">2000 – 2020 · 396 MATCHES · 152 GOALS</span>
          </div>

          <div className="sheet-header-grid" style={{ marginBottom: '3rem' }}>
            <div>
              <div className="section-tag">
                <Trophy size={14} style={{ color: '#0064C2' }} />
                <span>VERIFIABLE CAREER MILESTONES</span>
              </div>
              <h2 className="section-headline" style={{ marginBottom: 0 }}>
                From Eredivisie to Asian Stadiums.{' '}
                <span className="highlight">A Masterclass in Adaptability.</span>
              </h2>
            </div>
            <div>
              <p className="section-subtext" style={{ marginBottom: 0 }}>
                A striker&apos;s journey across three continents: learning the discipline of Dutch
                tactical school, breaking records in the Australian A-League, and igniting passionate
                stadiums across Indonesia.
              </p>
            </div>
          </div>

          {/* Interactive Career Milestones Timeline */}
          <div className="about-career-timeline">
            {WIKI_CLUB_MILESTONES.map((item, idx) => (
              <div
                key={idx}
                className={`about-timeline-item ${activeEra === idx ? 'active' : ''}`}
                onClick={() => setActiveEra(idx)}
              >
                <div className="about-timeline-left">
                  <span className="about-timeline-period">{item.period}</span>
                  <span className="about-timeline-region">
                    <MapPin size={12} />
                    {item.region}
                  </span>
                </div>

                <div className="about-timeline-body">
                  <div className="about-timeline-head">
                    <div>
                      <h3 className="about-timeline-club">{item.club}</h3>
                      <span className="about-timeline-role">{item.role}</span>
                    </div>
                    <span className="about-timeline-stat-pill">{item.stats}</span>
                  </div>
                  <p className="about-timeline-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CHAPTER II: THE 8-VENTURE BUSINESS ECOSYSTEM */}
      <section className="page-content-section sheet-white">
        <div className="sheet-inner-container">
          <div className="sheet-top-bar">
            <span className="clean-label">CHAPTER II — BUSINESS &amp; VENTURE PORTFOLIO</span>
            <span className="clean-label-muted">8 ACTIVE INITIATIVES ACROSS BORDERS</span>
          </div>

          <div className="sheet-header-grid" style={{ marginBottom: '3rem' }}>
            <div>
              <div className="section-tag">
                <Briefcase size={14} style={{ color: '#0064C2' }} />
                <span>BUILDING BEYOND THE PITCH</span>
              </div>
              <h2 className="section-headline" style={{ marginBottom: 0 }}>
                Entrepreneurship at Scale.{' '}
                <span className="highlight">One Connected Ecosystem.</span>
              </h2>
            </div>
            <div>
              <p className="section-subtext" style={{ marginBottom: 0 }}>
                Sergio translates the accountability, tactical awareness, and resilience of top-flight
                sport into founding and scaling businesses across software engineering, artificial
                intelligence, PropTech, and international investment.
              </p>
            </div>
          </div>

          {/* 8-Venture Interactive Cards Grid */}
          <div className="about-ventures-grid">
            {VENTURE_PORTFOLIO_CARDS.map((v) => (
              <div
                key={v.id}
                className="about-venture-card sheet-warm-gray"
                onClick={() => onSelectPage('projects')}
              >
                <div className="about-venture-top">
                  <span className="about-venture-num">{v.num}</span>
                  <span className="about-venture-cat">{v.category}</span>
                </div>

                <h3 className="about-venture-name">{v.name}</h3>
                <span className="about-venture-url">{v.url}</span>

                <p className="about-venture-summary">{v.summary}</p>

                <div className="about-venture-footer">
                  <span className="about-venture-metric">{v.metrics}</span>
                  <span className="about-venture-link">
                    <span>Explore</span>
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CHAPTER III: BRAND VALUES & CORE PHILOSOPHY */}
      <section className="page-content-section sheet-warm-gray">
        <div className="sheet-inner-container">
          <div className="sheet-top-bar">
            <span className="clean-label">CHAPTER III — BRAND IDENTITY &amp; CORE VALUES</span>
            <span className="clean-label-muted">LEARN · CREATE · SHARE</span>
          </div>

          <div className="sheet-header-grid" style={{ marginBottom: '3rem' }}>
            <div>
              <h2 className="section-headline" style={{ marginBottom: 0 }}>
                Guided by Purpose.{' '}
                <span className="highlight">Built to Connect.</span>
              </h2>
            </div>
            <div>
              <p className="section-subtext" style={{ marginBottom: 0 }}>
                Every milestone achieved—whether scoring in a continental final or orchestrating
                distributed engineering teams—stems from three unwavering pillars:
              </p>
            </div>
          </div>

          <div className="clean-three-col" style={{ marginBottom: '4rem' }}>
            <div className="clean-col-item">
              <span className="clean-col-num">01 · LEARN</span>
              <h3>Continuous Adaptability</h3>
              <p>
                Embracing every market transition with humility and intense curiosity. Moving from
                the football pitch into technical boardrooms demanded unlearning old certainties and
                mastering software architecture, commercial contracts, and international compliance.
              </p>
            </div>

            <div className="clean-col-item">
              <span className="clean-col-num">02 · CREATE</span>
              <h3>Enduring Tangible Value</h3>
              <p>
                Building products, platforms, and teams that outlast transient hype. Through Mantab One,
                BICTRL, Regal Estate Group, and Indovest, the mission is to create genuine commercial
                utility, jobs, and cross-border partnerships.
              </p>
            </div>

            <div className="clean-col-item">
              <span className="clean-col-num">03 · SHARE</span>
              <h3>Generous Connectivity</h3>
              <p>
                Opening doors for emerging athletes, developers, and founders between Europe and
                Southeast Asia. Mentorship and knowledge transfer turn personal success into collective
                progress for global communities.
              </p>
            </div>
          </div>

          {/* Secondary Portrait + Philosophy Quote */}
          <div className="page-about-philosophy-banner sheet-white">
            <div className="page-about-philosophy-content">
              <span className="clean-label-muted">EXECUTIVE PHILOSOPHY</span>
              <h3 className="section-headline" style={{ color: 'var(--text-main)', marginTop: '0.75rem' }}>
                &ldquo;Success is not defined by where the journey begins, but by what we continue
                to build along the way.&rdquo;
              </h3>
              <p style={{ color: 'var(--brand-taupe)', fontSize: '0.84rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                SERGIO VAN DIJK — BEYOND FOOTBALL. BEYOND BORDERS.
              </p>
            </div>
            <div className="page-about-philosophy-image">
              <img src="/sergio-seated.png" alt="Sergio van Dijk Seated" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
