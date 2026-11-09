import {
  ArrowUpRight,
  ArrowRight,
  Zap,
  Search,
  Globe,
  Sparkles,
  Building2,
  Compass,
  Bot,
  Share2,
  FileText,
  Layout,
  ShoppingBag,
  MessageSquare,
  Activity
} from 'lucide-react';
import './SynergizeFlowShowcase.css';

const INTEGRATIONS = [
  'WordPress',
  'WooCommerce',
  'LinkedIn',
  'TikTok',
  'Google',
  'Instagram'
];

const STATS = [
  { value: '8', label: 'Specialized AI Agents' },
  { value: '4', label: 'Simple workflow steps' },
  { value: 'GEO', label: 'AI Visibility optimized' },
  { value: '1', label: 'Connected system' }
];

const PROBLEMS = [
  {
    title: 'Inconsistent Content',
    desc: 'You know your business needs regular content, but planning, writing, and optimizing it every week takes too much time.',
    Icon: Zap
  },
  {
    title: 'SEO Without Structure',
    desc: 'SEO is more than adding keywords. Without a connected system your blogs and metadata fail to support each other.',
    Icon: Search
  },
  {
    title: 'Disconnected Campaigns',
    desc: 'Blog posts, social media, landing pages and product content often move in different directions.',
    Icon: Globe
  },
  {
    title: 'Inconsistent Content',
    desc: "People no longer just click links — they get answers from AI. Most businesses aren't optimized to appear in those answers.",
    Icon: Sparkles
  }
];

const WORKFLOW_STEPS = [
  {
    num: 'STEP 01',
    title: 'Your Business Input',
    desc: 'You share your business profile, target audience, and key product information.',
    theme: 'sf-step-dark',
    Icon: Building2
  },
  {
    num: 'STEP 02',
    title: 'Campaign Builder Strategy',
    desc: 'AI analyzes your brand and builds a full campaign strategy aligned to your goals.',
    theme: 'sf-step-lime',
    Icon: Compass
  },
  {
    num: 'STEP 03',
    title: 'AI Marketing Agents',
    desc: 'Eight agents execute: writing blogs, building pages, posting social, optimizing SEO.',
    theme: 'sf-step-dark',
    Icon: Bot
  },
  {
    num: 'STEP 04',
    title: 'Distribution Layer',
    desc: 'Your campaigns are distributed across channels: Google, social media, and AI search.',
    theme: 'sf-step-lime',
    Icon: Share2
  }
];

const COMPARISON_ROWS = [
  {
    metric: 'Main Objective',
    traditional: 'Focuses on ranking in Google',
    geo: 'Focuses on ranking in Google & AI recommendations',
    tinted: true
  },
  {
    metric: 'Approach',
    traditional: 'Keyword optimisation',
    geo: 'Content and information authority optimisation',
    tinted: false
  },
  {
    metric: 'What Is Optimized',
    traditional: 'Web pages as the target',
    geo: 'Brand / entity as the target',
    tinted: true
  },
  {
    metric: 'Result',
    traditional: 'Traffic from user clicks',
    geo: 'Exposure from AI-generated answers',
    tinted: false
  },
  {
    metric: 'Competition Type',
    traditional: 'Keyword-based competition',
    geo: 'Competition based on credibility and relevance',
    tinted: true
  }
];

const AGENTS = [
  {
    title: 'Strategy Agent',
    desc: 'Analyzes your brand, audience, and goals to build a full campaign strategy.',
    Icon: Compass
  },
  {
    title: 'Blog Agent',
    desc: 'Writes SEO-optimized long-form blog articles that rank and inform.',
    Icon: FileText
  },
  {
    title: 'SEO Agent',
    desc: 'Researches keywords, optimizes on-page elements, and builds topical authority.',
    Icon: Search
  },
  {
    title: 'Social Agent',
    desc: 'Creates platform-native content for LinkedIn, Instagram, TikTok, and more.',
    Icon: Share2
  },
  {
    title: 'Page Builder Agent',
    desc: 'Generates and optimizes landing pages aligned to your campaign goals.',
    Icon: Layout
  },
  {
    title: 'Product Agent',
    desc: 'Writes compelling product descriptions and e-commerce content at scale.',
    Icon: ShoppingBag
  },
  {
    title: 'Chat Agent',
    desc: 'Powers AI chat that captures leads and answers questions 24/7.',
    Icon: MessageSquare
  },
  {
    title: 'Monitor Agent',
    desc: 'Tracks performance across channels and surfaces actionable insights.',
    Icon: Activity
  }
];

const USE_CASES = [
  {
    title: 'Local Business',
    desc: 'Improve local visibility and reach more local customers through consistent SEO and AI presence.',
    image: 'https://oliemuller.nl/wp-content/uploads/2026/09/Image-Local-Business.jpg'
  },
  {
    title: 'E-commerce',
    desc: 'Generate high-converting product descriptions, capturing high-intent keywords and increasing sales.',
    image: 'https://oliemuller.nl/wp-content/uploads/2026/09/Image-E-commerce.jpg'
  },
  {
    title: 'Service Business',
    desc: 'Build content that converts browsers into clients — service pages, FAQs, and case studies on autopilot.',
    image:
      'https://oliemuller.nl/wp-content/uploads/2026/09/Image-Mantab-One-developer-team.jpg'
  },
  {
    title: 'Marketing Agency',
    desc: 'Scale deliverables across clients: blog posts, SEO audits, and reports — without scaling headcount.',
    image:
      'https://oliemuller.nl/wp-content/uploads/2026/09/Image-Marketing-Agency.jpg'
  }
];

const ROLE_ITEMS = [
  {
    num: '01',
    title: 'Product Positioning & Go-To-Market',
    desc: "Defined SynergizeFlow's market position at the intersection of traditional SEO and the emerging AI Visibility (GEO) category. Crafted messaging that speaks to business owners who are frustrated with fragmented marketing tools — leading with the 'one connected AI system' differentiator."
  },
  {
    num: '02',
    title: 'Commercial Architecture & Packaging',
    desc: 'Structured the product tiers and agent bundles into an accessible commercial model. Designed the free-to-paid funnel and identified the key activation moments that convert trial users into long-term subscribers.'
  },
  {
    num: '03',
    title: 'Content & SEO Strategy',
    desc: "Built the content and SEO flywheel for SynergizeFlow itself — using the platform's own AI agents to establish topical authority in AI marketing, GEO, and content automation. Practising what we preach: the platform's own content strategy is its best case study."
  }
];

const OTHER_PROJECTS = [
  { id: 'drankshop', name: 'Drankshop' },
  { id: 'mantab-one', name: 'Mantab One' },
  { id: 'regal-estate-group', name: 'Regal Estate Group' },
  { id: 'indovest', name: 'Indovest' },
  { id: 'kantoorzoeken', name: 'Kantoorzoeken' },
  { id: 'bictrl', name: 'BICTRL' },
  { id: 'consentarch', name: 'Consentarch' }
];

export default function SynergizeFlowShowcase({
  onSelectProjectSlug,
  onOpenInquiryModal
}) {
  return (
    <div className="synergize-showcase-root">
      {/* 1. HERO SECTION */}
      <section className="sf-hero">
        <div className="sf-container">
          <div className="sf-hero-grid">
            <div>
              <div className="sf-breadcrumb">
                <button
                  type="button"
                  className="sf-breadcrumb-link"
                  onClick={() => onSelectProjectSlug && onSelectProjectSlug(null)}
                >
                  Projects
                </button>
                <span>/</span>
                <span className="sf-breadcrumb-current">SynergizeFlow</span>
              </div>

              <div className="sf-hero-badge">
                AI Marketing Platform · SEO · GEO
              </div>

              <h1 className="sf-hero-title">
                Your AI Marketing Agents
                <br />
                <span>for SEO, Content,</span> and AI Visibility.
              </h1>

              <p className="sf-hero-desc">
                Plan, create, optimize, and publish your marketing content
                automatically with AI agents built for SEO, Google visibility, and
                AI search.
              </p>

              <div className="sf-hero-actions">
                <a
                  href="https://synergizeflow.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sf-btn-dark"
                >
                  <span>Visit synergizeflow.com</span>
                  <ArrowUpRight size={15} />
                </a>

                <button
                  type="button"
                  className="sf-btn-outline-light"
                  onClick={() => onSelectProjectSlug && onSelectProjectSlug(null)}
                >
                  <span>All Projects</span>
                </button>
              </div>

              <div className="sf-integrates-row">
                <span className="sf-integrates-label">Integrates with:</span>
                {INTEGRATIONS.map((item) => (
                  <span key={item} className="sf-integrate-pill">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="sf-hero-visual">
              <img
                src="https://oliemuller.nl/wp-content/uploads/2026/09/synergizeflow-hero-1.png"
                alt="SynergizeFlow AI Marketing Platform"
                className="sf-hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. 4-COLUMN STATS BAR (#1A1A1A) */}
      <section className="sf-stats-bar">
        <div className="sf-container">
          <div className="sf-stats-grid">
            {STATS.map((stat, idx) => (
              <div key={idx} className="sf-stat-item">
                <p className="sf-stat-value">{stat.value}</p>
                <p className="sf-stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE PLATFORM (#F5F7F0) */}
      <section className="sf-section-sage">
        <div className="sf-container">
          <div className="sf-platform-split">
            <div className="sf-platform-copy">
              <span className="sf-eyebrow">The Platform</span>
              <h2 className="sf-section-title">
                Your marketing is active, <span>but not connected.</span>
              </h2>
              <p>
                Creating content is not enough. Without a connected system, your
                SEO, blogs, landing pages, and social posts work separately instead
                of building visibility together. SynergizeFlow fixes that.
              </p>
              <p>
                SynergizeFlow is an AI-powered marketing team that works as{' '}
                <strong>one connected system</strong>. Eight specialized AI agents
                collaborate — from strategy to distribution — so your marketing
                compounds instead of just accumulating.
              </p>
              <p>
                From local businesses and e-commerce brands to agencies and service
                companies, SynergizeFlow helps businesses create content, improve
                SEO, capture leads, and grow visibility with AI agents.
              </p>
            </div>

            <div className="sf-problems-grid">
              {PROBLEMS.map((prob, idx) => {
                const IconComponent = prob.Icon;
                return (
                  <div key={idx} className="sf-problem-card">
                    <div className="sf-icon-badge-lime">
                      <IconComponent size={19} />
                    </div>
                    <h3>{prob.title}</h3>
                    <p>{prob.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS (4 Alternating Step Cards + Comparison Table) */}
      <section className="sf-section-white">
        <div className="sf-container">
          <div className="sf-header-center">
            <span className="sf-eyebrow">How It Works</span>
            <h2 className="sf-section-title">
              How <span>SynergizeFlow</span> works
            </h2>
            <p className="sf-section-subtitle">
              SynergizeFlow simplifies complex marketing into a clear step-by-step
              system — managed through one connected AI system.
            </p>
          </div>

          <div className="sf-steps-grid">
            {WORKFLOW_STEPS.map((step, idx) => {
              const IconComponent = step.Icon;
              return (
                <div key={idx} className={`sf-step-card ${step.theme}`}>
                  <div className="sf-step-top">
                    <span className="sf-step-icon">
                      <IconComponent size={22} />
                    </span>
                    <span className="sf-step-num">{step.num}</span>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              );
            })}
          </div>

          {/* 3-Column Comparison Table: Traditional SEO vs AI Visibility (GEO) */}
          <div className="sf-compare-table">
            <div className="sf-compare-row sf-compare-header">
              <div className="sf-compare-cell sf-cell-header-sage" />
              <div className="sf-compare-cell sf-cell-header-sage">
                Traditional SEO
              </div>
              <div className="sf-compare-cell sf-cell-header-lime">
                AI Visibility (GEO)
              </div>
            </div>

            {COMPARISON_ROWS.map((row, idx) => (
              <div key={idx} className="sf-compare-row">
                <div className="sf-compare-cell sf-cell-metric">
                  {row.metric}
                </div>
                <div className="sf-compare-cell sf-cell-trad">
                  {row.traditional}
                </div>
                <div
                  className={`sf-compare-cell ${
                    row.tinted ? 'sf-cell-geo-tint' : 'sf-cell-geo-white'
                  }`}
                >
                  {row.geo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. THE AGENTS (8 Specialized Agents) */}
      <section className="sf-section-sage">
        <div className="sf-container">
          <div className="sf-header-center">
            <span className="sf-eyebrow">The Agents</span>
            <h2 className="sf-section-title">
              Eight specialized agents.
              <br />
              Four simple steps.
            </h2>
            <p className="sf-section-subtitle">
              Built to grow your online presence — automatically, consistently, and
              at scale.
            </p>
          </div>

          <div className="sf-agents-grid">
            {AGENTS.map((agent, idx) => {
              const IconComponent = agent.Icon;
              return (
                <div key={idx} className="sf-agent-card">
                  <div className="sf-agent-icon">
                    <IconComponent size={22} />
                  </div>
                  <h3>{agent.title}</h3>
                  <p>{agent.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. USE CASES (AI Marketing Workflows for Every Business) */}
      <section className="sf-section-white">
        <div className="sf-container">
          <div className="sf-header-center">
            <span className="sf-eyebrow">Use Cases</span>
            <h2 className="sf-section-title">
              AI Marketing Workflows
              <br />
              for <span>Every Business</span>
            </h2>
          </div>

          <div className="sf-usecases-grid">
            {USE_CASES.map((uc, idx) => (
              <div key={idx} className="sf-usecase-card">
                <img
                  src={uc.image}
                  alt={uc.title}
                  className="sf-usecase-img"
                />
                <div className="sf-usecase-body">
                  <h3>{uc.title}</h3>
                  <p>{uc.desc}</p>
                  <a
                    href="https://synergizeflow.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sf-usecase-link"
                  >
                    <span>Learn more</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. OUR ROLE (2-Column Split with 01, 02, 03) */}
      <section className="sf-section-sage">
        <div className="sf-container">
          <div className="sf-role-split">
            <div>
              <span className="sf-role-eyebrow">Our Role</span>
              <h2 className="sf-role-title">
                From marketing tool to growth system.
              </h2>
              <p className="sf-role-desc">
                SynergizeFlow had a powerful product. The challenge was positioning
                it in a noisy market — competing with large agencies, freelancers,
                and a dozen point solutions — while educating buyers on an entirely
                new category: AI Visibility.
              </p>
            </div>

            <div className="sf-role-list">
              {ROLE_ITEMS.map((role) => (
                <div key={role.num} className="sf-role-item">
                  <span className="sf-role-num">{role.num}</span>
                  <div className="sf-role-content">
                    <h3>{role.title}</h3>
                    <p>{role.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA BANNER (#1A1A1A) */}
      <section className="sf-cta-banner">
        <div className="sf-container">
          <div className="sf-cta-inner">
            <span className="sf-cta-eyebrow">
              Be visible in Google. Be chosen by AI.
            </span>
            <h2 className="sf-cta-title">
              Ready to automate
              <br />
              your marketing?
            </h2>
            <p className="sf-cta-desc">
              Discover how SynergizeFlow turns your business into a continuous
              marketing engine — with eight AI agents working 24/7.
            </p>
            <div className="sf-cta-actions">
              <a
                href="https://synergizeflow.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="sf-btn-lime"
              >
                <span>Visit synergizeflow.com</span>
                <ArrowUpRight size={15} />
              </a>

              <button
                type="button"
                className="sf-btn-outline-dark"
                onClick={onOpenInquiryModal}
              >
                <span>Work with Us</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 9. OTHER PROJECTS BAR (#F5F7F0) */}
      <section className="sf-other-bar">
        <div className="sf-container">
          <div className="sf-other-inner">
            <h3 className="sf-other-heading">
              Other
              <br />
              Projects
            </h3>
            <div className="sf-other-pills-grid">
              {OTHER_PROJECTS.map((proj) => (
                <button
                  key={proj.id}
                  type="button"
                  className="sf-other-pill"
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

