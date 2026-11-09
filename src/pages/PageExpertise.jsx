import { useState } from 'react';
import { 
  ArrowUpRight, 
  ArrowRight, 
  Check, 
  Users, 
  Cpu, 
  Building2, 
  Compass, 
  ShieldCheck, 
  TrendingUp, 
  Globe2, 
  Layers, 
  CheckCircle2, 
  Target,
  Sparkles,
  BarChart3,
  Award
} from 'lucide-react';

const CAPABILITY_PILLARS = [
  {
    id: 'software-teams',
    num: '01',
    category: 'Engineering & Human Capital',
    icon: Users,
    title: 'Dedicated Remote Software Engineering',
    tagline: 'MANTAB ONE · 50+ VETTED DEVELOPERS · ZERO BUREAUCRACY',
    overview:
      'Connecting European, Australian, and international enterprises with top 3% technically screened remote software developers without rigid long-term lock-in.',
    metrics: [
      { label: 'Screened Talent Pool', val: '50+ Developers' },
      { label: 'Matching Turnaround', val: '48 Hours' },
      { label: 'Client Satisfaction', val: '98%' },
      { label: 'Continuity Guarantee', val: 'Standby Backup' }
    ],
    deepDive:
      'Developed from Sergio’s firsthand understanding of team cohesion and high-performance locker room dynamics, Mantab One eliminates the traditional pitfalls of chaotic freelance portals and rigid agency markups. We supply dedicated full-time engineers in Vue.js, PHP, Laravel, Python, ReactJS, and Flutter who integrate directly into your sprint ceremonies, Slack, and Jira.',
    coreOfferings: [
      {
        title: 'Full-Stack & Mobile Engineering Squads',
        desc: 'Dedicated frontend, backend, and cross-platform mobile developers working in your business hours.'
      },
      {
        title: 'Seamless Cultural & Technical Alignment',
        desc: 'Engineers vetted for English fluency, asynchronous communication discipline, and clean code documentation.'
      },
      {
        title: 'Transparent Day-Rate Pricing Model',
        desc: 'Clear, predictable monthly or daily rates with no hidden recruitment fees, buyout clauses, or onboarding overhead.'
      },
      {
        title: 'Guaranteed Knowledge Continuity',
        desc: 'If an engineer falls ill or transitions, our standby talent bench steps in immediately with zero onboarding friction.'
      }
    ],
    caseStudyRef: 'Mantab One is currently trusted by 100+ international agencies and high-growth technology companies across Europe.'
  },
  {
    id: 'ai-platforms',
    num: '02',
    category: 'Artificial Intelligence & SaaS',
    icon: Cpu,
    title: 'AI Intelligence, BI & Privacy Architecture',
    tagline: 'BICTRL · SYNERGIZEFLOW · CONSENTARCH · MODERN SAAS',
    overview:
      'Architecting, structuring, and commercially packaging next-generation AI platforms that collapse data stacks, automate marketing workflows, and safeguard digital compliance.',
    metrics: [
      { label: 'Autonomous Agents', val: '10+ Multi-Agent' },
      { label: 'Search Optimization', val: 'Google + GEO' },
      { label: 'Edge Privacy Latency', val: '<12kb / 0.02ms' },
      { label: 'Prediction Horizon', val: '365-Day TS' }
    ],
    deepDive:
      'Modern businesses cannot afford fragmented point solutions. Across our portfolio, we build unified platforms: BICTRL (bictrl.tech) replaces rigid BI with 10+ autonomous agents capable of conversational SQL and forecasting; SynergizeFlow (synergizeflow.com) bridges traditional SEO and Generative Engine Optimization (GEO); and ConsentArch (consentarch.com) delivers cryptographic, zero-latency privacy shields.',
    coreOfferings: [
      {
        title: 'Multi-Agent Enterprise Intelligence (BICTRL)',
        desc: 'Automating raw spreadsheet-to-executive dashboard conversion with LangGraph and self-correcting PostgreSQL agents.'
      },
      {
        title: 'Generative Engine Optimization & Content Flywheels (SynergizeFlow)',
        desc: 'Positioning brand entities to be cited and recommended directly by LLMs (ChatGPT, Gemini, Perplexity) alongside Google.'
      },
      {
        title: 'Cryptographic Privacy Compliance (ConsentArch)',
        desc: 'Ultra-lightweight edge scripts enforcing GDPR/CCPA compliance without sacrificing PageSpeed scores.'
      },
      {
        title: 'SaaS Go-To-Market & Commercial Packaging',
        desc: 'Structuring free-to-paid funnels, pricing tiers, and retention architecture for enterprise software adoption.'
      }
    ],
    caseStudyRef: 'Deploying agentic systems that turn manual analyst hours into autonomous, real-time executive decision engines.'
  },
  {
    id: 'proptech-real-estate',
    num: '03',
    category: 'PropTech & Asset Investment',
    icon: Building2,
    title: 'PropTech Ecosystems & Cross-Border Real Estate',
    tagline: 'REGAL ESTATE · KANTOORZOEKEN · INDOVEST (9%–24% ROI)',
    overview:
      'Disrupting opaque commercial brokerage with modern tech-driven workspace discovery across Europe while unlocking premier high-yield property ventures in Indonesia.',
    metrics: [
      { label: 'Global Workspaces', val: '6,500+ Locations' },
      { label: 'Concierge Tenant Fee', val: '€ 0 (100% Free)' },
      { label: 'Annual Investment Yield', val: '9% – 24% ROI' },
      { label: 'Coverage Hubs', val: 'NL · BE · Bali · Lombok' }
    ],
    deepDive:
      'Real estate has historically suffered from data chaos, broker monopolies, and bureaucratic inertia. Through Regal Estate Group and Kantoorzoeken.nl, we empower tenants with side-by-side comparison hubs, 24/7 AI concierge guidance, and all-inclusive pricing transparency. Simultaneously, Indovest Group opens vetted, high-return luxury villa and hotel assets in Bali and Lombok to European capital.',
    coreOfferings: [
      {
        title: 'Global Flexible Workspace Platforms (Regal Estate Group)',
        desc: 'Connecting solopreneurs to 200+ desk enterprise headquarters across 6,500 locations with predictive spatial analytics.'
      },
      {
        title: 'Dutch & Belgian Concierge Office Search (Kantoorzoeken.nl)',
        desc: 'Free tenant advisory covering Amsterdam, Rotterdam, Brussels, and Antwerp with verified all-inclusive lease rates.'
      },
      {
        title: 'Indonesian High-Yield Real Estate Syndication (Indovest)',
        desc: 'Tailored property investments in Bali & Lombok with complete legal, regulatory, and permit handling for European buyers.'
      },
      {
        title: 'DTC Brand Building & Commerce (Drankshop.com)',
        desc: 'Strategic omnichannel distribution for premium Dutch craft gin and 0.0% botanical spirits across wholesale & hospitality.'
      }
    ],
    caseStudyRef: 'Enabling remote teams and international investors to secure prime properties and flexible leases with total fiduciary peace of mind.'
  },
  {
    id: 'global-advisory',
    num: '04',
    category: 'Strategic Advisory & Leadership',
    icon: Compass,
    title: 'Cross-Border Advisory & High-Performance Culture',
    tagline: 'EUROPE · AUSTRALIA · INDONESIA · BOARDROOM IMPACT',
    overview:
      'Leveraging 20 years of international competitive football and multicultural business governance to guide market expansions, bilateral partnerships, and executive resilience.',
    metrics: [
      { label: 'Geographic Corridors', val: 'Europe · AU · Indo' },
      { label: 'Pro Football Career', val: '20 Years (152 Goals)' },
      { label: 'A-League Distinction', val: 'Golden Boot Winner' },
      { label: 'Leadership Focus', val: 'Athletes to Founders' }
    ],
    deepDive:
      'Competing at the highest sporting levels across Europe, Australia, and the Indonesian National Team instilled an unshakeable standard of accountability, adaptability, and cultural fluency. In the boardroom, Sergio serves as an executive advisor and strategic connector—bridging Western corporate governance with Southeast Asian relationship-first execution.',
    coreOfferings: [
      {
        title: 'Bilateral Market Entry (Europe ↔ Indonesia)',
        desc: 'Guiding European and Australian enterprises into Indonesian commercial corridors with trusted local stakeholder introductions.'
      },
      {
        title: 'Executive Keynotes on High-Performance Transition',
        desc: 'Inspiring corporations, sports bodies, and founders on handling pressure, continuous reinvention, and team leadership.'
      },
      {
        title: 'Sports Tech & Athlete Transition Mentorship',
        desc: 'Mentoring professional athletes and high-profile figures transitioning into venture capital and entrepreneurship.'
      },
      {
        title: 'Brand Ambassadorship & Strategic Alliances',
        desc: 'Aligning with premium international brands that demand genuine authenticity, resilience, and cross-border credibility.'
      }
    ],
    caseStudyRef: 'Unlocking bilateral trade, strategic investment corridors, and high-trust introductions between continental decision-makers.'
  }
];

const WORKING_METHODOLOGY = [
  {
    step: 'PHASE 01',
    title: 'Audit & Objective Calibration',
    desc: 'We analyze your commercial goals, technical bottlenecks, or regional expansion ambitions to identify the highest-leverage intervention.',
    deliverable: 'Strategic Blueprint & Resource Matrix'
  },
  {
    step: 'PHASE 02',
    title: 'Surgical Team & Asset Deployment',
    desc: 'Deploying vetted engineering squads from Mantab One, integrating AI workflows, or activating our bilateral network across Europe and Indonesia.',
    deliverable: 'Rapid 48h Integration & Governance Framework'
  },
  {
    step: 'PHASE 03',
    title: 'Iterative Velocity & Quality Control',
    desc: 'Maintaining elite European engineering benchmarks, continuous delivery pipelines, and transparent weekly progress checkpoints.',
    deliverable: 'Live Telemetry & Production Milestones'
  },
  {
    step: 'PHASE 04',
    title: 'Long-Term Compounding Scale',
    desc: 'Transitioning initial project wins into autonomous operational flywheels, sustainable commercial margins, and permanent competitive moat.',
    deliverable: 'Scalable Enterprise Value & Retention'
  }
];

export default function PageExpertise({ onSelectPage, onOpenInquiryModal }) {
  const [selectedDomain, setSelectedDomain] = useState(CAPABILITY_PILLARS[0].id);
  const activeItem =
    CAPABILITY_PILLARS.find((d) => d.id === selectedDomain) || CAPABILITY_PILLARS[0];

  const ActiveIcon = activeItem.icon;

  return (
    <div className="dedicated-page">
      {/* 1. HERO SECTION */}
      <section className="page-hero-section sheet-warm-gray expertise-hero-head">
        <div className="sheet-inner-container">
          <div className="sheet-top-bar">
            <span className="clean-label">03 — CAPABILITIES &amp; STRATEGIC ADVISORY</span>
            <span className="clean-label-muted">DISCIPLINED EXECUTION · 4 DOMAINS</span>
          </div>

          <div className="sheet-header-grid" style={{ marginBottom: '3rem' }}>
            <div>
              <div className="section-tag">
                <span className="section-tag-dot" />
                <span>TECHNOLOGY · PROPTECH · AI · GLOBAL ADVISORY</span>
              </div>
              <h1 className="page-display-title" style={{ marginBottom: 0 }}>
                High-Performance Solutions.{' '}
                <span className="highlight">Built for Scale.</span>
              </h1>
            </div>

            <div>
              <p className="page-lead-paragraph" style={{ marginBottom: '1.5rem' }}>
                Combining the tactical rigor of top-flight international sport with proven
                entrepreneurship across 8 active ventures. We help organizations deploy dedicated
                software engineering teams, architect AI systems, scale PropTech marketplaces, and
                navigate cross-border European-Indonesian expansion.
              </p>
              <div className="action-group">
                <button className="btn-primary" onClick={onOpenInquiryModal}>
                  <span>DISCUSS A COLLABORATION</span>
                  <ArrowUpRight size={16} />
                </button>
                <button className="btn-secondary" onClick={() => onSelectPage('projects')}>
                  <span>VIEW 8 VENTURES</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Quick Metrics Header Bar */}
          <div className="expertise-hero-metrics-bar sheet-white">
            <div className="expertise-hero-metric-item">
              <span className="expertise-metric-num">50+</span>
              <span className="expertise-metric-lbl">Vetted Software Developers</span>
            </div>
            <div className="expertise-hero-metric-item">
              <span className="expertise-metric-num">6,500+</span>
              <span className="expertise-metric-lbl">Global Workspace Hubs</span>
            </div>
            <div className="expertise-hero-metric-item">
              <span className="expertise-metric-num">8 Active</span>
              <span className="expertise-metric-lbl">Interconnected Ventures</span>
            </div>
            <div className="expertise-hero-metric-item">
              <span className="expertise-metric-num">3 Regions</span>
              <span className="expertise-metric-lbl">Europe · Australia · Indonesia</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE EXPERTISE ARCHITECTURE EXPLORER */}
      <section className="page-content-section sheet-white">
        <div className="sheet-inner-container">
          <div className="sheet-top-bar" style={{ marginBottom: '2.5rem' }}>
            <span className="clean-label">DOMAIN ARCHITECTURE</span>
            <span className="clean-label-muted">SELECT A PILLAR TO INSPECT CAPABILITIES</span>
          </div>

          <div className="page-expertise-interactive-grid">
            {/* Left Pillar Selector Column */}
            <div className="page-expertise-selector">
              {CAPABILITY_PILLARS.map((domain) => {
                const isActive = domain.id === selectedDomain;
                const IconComp = domain.icon;
                return (
                  <button
                    key={domain.id}
                    className={`page-expertise-tab ${isActive ? 'active' : ''}`}
                    onClick={() => setSelectedDomain(domain.id)}
                  >
                    <span className="clean-col-num" style={{ marginBottom: 0 }}>
                      {domain.num}
                    </span>
                    <div className="page-expertise-tab-text">
                      <span className="page-expertise-tab-sub">{domain.category}</span>
                      <h4>{domain.title}</h4>
                    </div>
                    <ArrowRight size={16} className="page-expertise-tab-arrow" />
                  </button>
                );
              })}
            </div>

            {/* Right Detailed Inspection Panel */}
            <div className="page-expertise-detail sheet-warm-gray">
              <div className="expertise-detail-top">
                <div className="expertise-detail-badge">
                  <ActiveIcon size={18} style={{ color: '#0064C2' }} />
                  <span>{activeItem.category}</span>
                </div>
                <span className="clean-label-muted">{activeItem.tagline}</span>
              </div>

              <h2 className="section-headline" style={{ fontSize: '2.3rem', marginBottom: '1rem' }}>
                {activeItem.title}
              </h2>

              <p className="page-lead-paragraph" style={{ marginBottom: '1.75rem' }}>
                {activeItem.overview}
              </p>

              {/* 4 Key Metrics Grid */}
              <div className="expertise-stats-pills-grid">
                {activeItem.metrics.map((m, idx) => (
                  <div key={idx} className="expertise-stat-pill-card sheet-white">
                    <span className="expertise-pill-val">{m.val}</span>
                    <span className="expertise-pill-lbl">{m.label}</span>
                  </div>
                ))}
              </div>

              {/* Deep Dive Narrative */}
              <div className="expertise-deep-dive-card sheet-white">
                <span className="clean-label" style={{ marginBottom: '0.5rem', display: 'block' }}>
                  OPERATIONAL METHODOLOGY &amp; PHILOSOPHY
                </span>
                <p>{activeItem.deepDive}</p>
              </div>

              {/* 4 Core Offerings Grid */}
              <div className="clean-label" style={{ marginBottom: '1.25rem', marginTop: '2rem' }}>
                KEY DELIVERABLES &amp; STRATEGIC SOLUTIONS
              </div>

              <div className="expertise-offerings-grid">
                {activeItem.coreOfferings.map((offering, idx) => (
                  <div key={idx} className="expertise-offering-item sheet-white">
                    <div className="expertise-offering-check">
                      <CheckCircle2 size={16} style={{ color: '#0064C2' }} />
                    </div>
                    <div>
                      <h5>{offering.title}</h5>
                      <p>{offering.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Verified Trust Tagline */}
              <div className="expertise-proof-banner">
                <Award size={18} style={{ color: '#0064C2', flexShrink: 0 }} />
                <span>{activeItem.caseStudyRef}</span>
              </div>

              {/* Action Buttons */}
              <div className="expertise-detail-cta-row">
                <button className="btn-primary" onClick={onOpenInquiryModal}>
                  <span>Inquire Regarding {activeItem.title}</span>
                  <ArrowUpRight size={16} />
                </button>
                <button className="btn-secondary" onClick={() => onSelectPage('projects')}>
                  <span>View Project Case Studies</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WORKING METHODOLOGY: HOW WE ENGAGE */}
      <section className="page-content-section sheet-warm-gray">
        <div className="sheet-inner-container">
          <div className="sheet-top-bar">
            <span className="clean-label">ENGAGEMENT FRAMEWORK</span>
            <span className="clean-label-muted">FROM CONCEPT TO COMPOUNDING EXECUTION</span>
          </div>

          <div className="sheet-header-grid" style={{ marginBottom: '3rem' }}>
            <div>
              <div className="section-tag">
                <Target size={14} style={{ color: '#0064C2' }} />
                <span>STRUCTURED DISCIPLINE</span>
              </div>
              <h2 className="section-headline" style={{ marginBottom: 0 }}>
                Rigorous Process.{' '}
                <span className="highlight">Uncompromising Quality.</span>
              </h2>
            </div>
            <div>
              <p className="section-subtext" style={{ marginBottom: 0 }}>
                Whether assembling a dedicated software engineering squad with Mantab One, launching
                an AI platform, or orchestrating cross-border European-Asian expansion, every
                initiative follows a proven 4-stage framework.
              </p>
            </div>
          </div>

          {/* 4 Step Methodology Cards */}
          <div className="expertise-methodology-grid">
            {WORKING_METHODOLOGY.map((m, idx) => (
              <div key={idx} className="expertise-methodology-card sheet-white">
                <div className="expertise-method-top">
                  <span className="expertise-method-step">{m.step}</span>
                  <span className="expertise-method-num">0{idx + 1}</span>
                </div>
                <h3 className="expertise-method-title">{m.title}</h3>
                <p className="expertise-method-desc">{m.desc}</p>
                <div className="expertise-method-footer">
                  <span className="expertise-method-deliverable-lbl">Deliverable:</span>
                  <span className="expertise-method-deliverable-val">{m.deliverable}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Consultation Banner */}
          <div className="expertise-bottom-banner sheet-white">
            <div>
              <span className="clean-label-muted">READY TO SCALE?</span>
              <h3>Need a dedicated tech team, AI architecture, or international market access?</h3>
              <p>Let&apos;s schedule an executive intake call to examine your requirements.</p>
            </div>
            <button className="btn-primary" onClick={onOpenInquiryModal}>
              <span>Start an Executive Inquiry</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
