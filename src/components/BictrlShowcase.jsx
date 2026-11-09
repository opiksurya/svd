import './BictrlShowcase.css';
import { ArrowUpRight } from 'lucide-react';

export default function BictrlShowcase({ onOpenInquiryModal }) {
  return (
    <div className="bictrl-showcase-root">
      {/* 1. TOP MARQUEE BAR (EXACT BICTRL.TECH STYLE) */}
      <div className="bictrl-marquee-container">
        <div className="bictrl-marquee-track">
          <div className="bictrl-marquee-item">
            Analyze your data in natural language — insights in seconds! →
          </div>
          <div className="bictrl-marquee-item">
            Build interactive dashboards without coding →
          </div>
          <div className="bictrl-marquee-item">
            Ask questions directly from your documents and get instant answers. →
          </div>
          <div className="bictrl-marquee-item">
            Analyze your data in natural language — insights in seconds! →
          </div>
          <div className="bictrl-marquee-item">
            Build interactive dashboards without coding →
          </div>
          <div className="bictrl-marquee-item">
            Ask questions directly from your documents and get instant answers. →
          </div>
        </div>
      </div>

      {/* 2. MAIN BICTRL CONTAINER */}
      <div className="bictrl-container">
        {/* HERO SECTION */}
        <section className="bictrl-hero">
          <div className="bictrl-hero-topbar">
            <a
              href="https://bictrl.tech"
              target="_blank"
              rel="noreferrer"
              className="bictrl-brand-logo"
            >
              <img src="https://bictrl.tech/landing/logo.png" alt="BiCtrl Logo" />
            </a>

            <a
              href="https://bictrl.tech"
              target="_blank"
              rel="noreferrer"
              className="bictrl-btn-primary"
            >
              <span>VISIT BICTRL.TECH</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="bictrl-hero-badge">
            <span className="dot" />
            <span>Powered by multi-agent AI • Now in Early Access</span>
          </div>

          <h1>
            <span className="bictrl-title-serif">The AI Business</span>
            <span className="bictrl-title-serif">Intelligence Platform</span>
            <span className="bictrl-title-sans">for your entire org</span>
          </h1>

          <p className="bictrl-hero-subtitle">
            From raw spreadsheets to executive dashboards in minutes. Anyone on your team can
            upload data, ask questions in plain language, and get trusted, actionable insights.
          </p>

          <div className="bictrl-hero-actions">
            <div className="bictrl-corner-box">
              <div className="bictrl-corner tl" />
              <div className="bictrl-corner tr" />
              <div className="bictrl-corner bl" />
              <div className="bictrl-corner br" />
              <a
                href="https://bictrl.tech/login"
                target="_blank"
                rel="noreferrer"
                className="bictrl-btn-primary"
              >
                GET STARTED
              </a>
            </div>

            <button
              type="button"
              onClick={onOpenInquiryModal}
              className="bictrl-btn-outline"
            >
              REQUEST ENTERPRISE DEMO
            </button>
          </div>

          {/* 3-SCREEN FLOATING MOCKUP SHOWCASE */}
          <div className="bictrl-mockup-showcase">
            <div className="bictrl-mockup-item bictrl-mockup-left">
              <img
                src="https://bictrl.tech/landing/p1.png"
                alt="Knowledge Base Interface"
                className="bictrl-mockup-img"
              />
            </div>

            <div className="bictrl-mockup-item bictrl-mockup-center">
              <img
                src="https://bictrl.tech/landing/p2.png"
                alt="Dashboard Builder Interface"
                className="bictrl-mockup-img"
              />
            </div>

            <div className="bictrl-mockup-item bictrl-mockup-right">
              <img
                src="https://bictrl.tech/landing/p3.png"
                alt="Canvas & SQL Agent Interface"
                className="bictrl-mockup-img"
              />
            </div>
          </div>
        </section>

        {/* 3. CAPABILITIES & SPECIALIZED AI AGENTS */}
        <section className="bictrl-capabilities">
          <div className="bictrl-section-header">
            <div className="bictrl-mono-label">Capabilities</div>
            <h2>
              Everything your data team
              <br />
              needs, unified.
            </h2>
            <p className="bictrl-section-desc">
              Ten specialized AI agents working together, each an expert in their domain — from
              SQL to forecasting to competitive intelligence.
            </p>
          </div>

          {/* FEATURE 1: AI DASHBOARDS — DASHBOARD BUILDER */}
          <div className="bictrl-feature-row">
            <div className="bictrl-feature-content">
              <div className="bictrl-feature-tag">AI Dashboards</div>
              <h3>Dashboard Builder</h3>
              <p>
                Type a goal like &ldquo;Monitor employee attrition by department&rdquo; — get a
                complete, multi-section dashboard with KPIs, charts, and insights in one click.
              </p>
            </div>

            <div className="bictrl-feature-visual">
              <div className="bictrl-crosshair-frame">
                <div className="bictrl-crosshair-tl" />
                <div className="bictrl-crosshair-br" />
                <img src="https://bictrl.tech/landing/p2.png" alt="Dashboard Builder" />
              </div>
            </div>
          </div>

          <div className="bictrl-details-grid">
            <div>
              <div className="bictrl-detail-item">
                <h4>Goal-Driven Generation</h4>
                <p>
                  Type a natural language goal like &ldquo;Monitor employee attrition by
                  department&rdquo; and get a complete, multi-section dashboard instantly.
                </p>
              </div>
              <div className="bictrl-detail-item">
                <h4>Multi-Table Intelligence</h4>
                <p>
                  Automatically discovers related tables, detects join paths, and builds
                  cross-table analytics.
                </p>
              </div>
              <div className="bictrl-detail-item">
                <h4>Self-Correcting SQL</h4>
                <p>
                  If a query fails, the AI automatically fixes it using schema awareness and
                  retries — no manual debugging.
                </p>
              </div>
            </div>

            <div>
              <div className="bictrl-detail-item">
                <h4>Smart Chart Selection</h4>
                <p>
                  AI automatically picks the best visualization type (bar, line, pie, heatmap,
                  scatter) based on your data structure.
                </p>
              </div>
              <div className="bictrl-detail-item">
                <h4>Export Anywhere</h4>
                <p>
                  One-click export to PDF reports or PowerPoint presentations with professional
                  formatting.
                </p>
              </div>
            </div>

            <div>
              <div className="bictrl-detail-item">
                <h4>Technical Highlights</h4>
                <ul className="bictrl-tech-list">
                  <li>CrewAI multi-agent pipeline for dashboard design</li>
                  <li>PostgreSQL-optimized SQL generation with type-safe JOINs</li>
                  <li>Real-time data refresh without regeneration</li>
                  <li>Async generation with progress polling</li>
                </ul>
                <div className="bictrl-pill-tags">
                  <span className="bictrl-pill-tag">CrewAI pipeline</span>
                  <span className="bictrl-pill-tag">Auto-SQL</span>
                  <span className="bictrl-pill-tag">PDF Export</span>
                </div>
              </div>
            </div>
          </div>

          {/* FEATURE 2: DATA CHAT — CONVERSATIONAL ANALYSIS */}
          <div className="bictrl-feature-row reverse">
            <div className="bictrl-feature-content">
              <div className="bictrl-feature-tag">Data Chat</div>
              <h3>
                Conversational
                <br />
                Analysis
              </h3>
              <p>
                Ask questions about your data in plain English. Upload CSV, Excel, or SQL — the AI
                responds with statistical insights, visualizations, and recommendations.
              </p>
            </div>

            <div className="bictrl-feature-visual">
              <div className="bictrl-crosshair-frame">
                <div className="bictrl-crosshair-tl" />
                <div className="bictrl-crosshair-br" />
                <img src="https://bictrl.tech/landing/p1.png" alt="Conversational Analysis" />
              </div>
            </div>
          </div>

          <div className="bictrl-details-grid">
            <div>
              <div className="bictrl-detail-item">
                <h4>Natural Language Queries</h4>
                <p>
                  &ldquo;What&apos;s the correlation between salary and tenure?&rdquo; → instant
                  statistical analysis with charts.
                </p>
              </div>
              <div className="bictrl-detail-item">
                <h4>Deep Data Profiling</h4>
                <p>
                  Auto-detects column types, semantic roles, date formats, and relationships before
                  analysis.
                </p>
              </div>
              <div className="bictrl-detail-item">
                <h4>Multi-Table Discovery</h4>
                <p>
                  Automatically finds related tables in your database for richer cross-table
                  insights.
                </p>
              </div>
            </div>

            <div>
              <div className="bictrl-detail-item">
                <h4>Universal Data Import</h4>
                <p>
                  CSV, Excel, SQL dumps, gzip-compressed files, even multi-GB datasets via chunked
                  upload.
                </p>
              </div>
              <div className="bictrl-detail-item">
                <h4>Visual Intelligence</h4>
                <p>Generates charts and visualizations inline as part of the conversation.</p>
              </div>
            </div>

            <div>
              <div className="bictrl-detail-item">
                <h4>Technical Highlights</h4>
                <ul className="bictrl-tech-list">
                  <li>LangGraph-based analytics agent with iterative reasoning</li>
                  <li>Schema profiling with semantic role detection (dimensions vs. metrics)</li>
                  <li>Supports datasets from 100 rows to millions (streaming ingestion)</li>
                  <li>Bulk ingest with progress tracking for enterprise-scale data</li>
                </ul>
                <div className="bictrl-pill-tags">
                  <span className="bictrl-pill-tag">LangGraph agent</span>
                  <span className="bictrl-pill-tag">Multi-GB support</span>
                  <span className="bictrl-pill-tag">Schema profiling</span>
                </div>
              </div>
            </div>
          </div>

          {/* FEATURE 3: SQL AGENT — AI DATABASE ANALYST */}
          <div className="bictrl-feature-row">
            <div className="bictrl-feature-content">
              <div className="bictrl-feature-tag">SQL Agent</div>
              <h3>AI Database Analyst</h3>
              <p>
                &ldquo;Show me top 10 customers by revenue last quarter&rdquo; — translates to
                optimized PostgreSQL, validates, executes, and explains the result in plain
                English.
              </p>
            </div>

            <div className="bictrl-feature-visual">
              <div className="bictrl-crosshair-frame">
                <div className="bictrl-crosshair-tl" />
                <div className="bictrl-crosshair-br" />
                <img src="https://bictrl.tech/landing/p3.png" alt="AI Database Analyst" />
              </div>
            </div>
          </div>

          <div className="bictrl-details-grid">
            <div>
              <div className="bictrl-detail-item">
                <h4>Natural Language SQL</h4>
                <p>
                  &ldquo;Show me top 10 customers by revenue last quarter&rdquo; translates to
                  optimized PostgreSQL.
                </p>
              </div>
              <div className="bictrl-detail-item">
                <h4>Query Explanation</h4>
                <p>Every result comes with the SQL used and a human-readable explanation.</p>
              </div>
              <div className="bictrl-detail-item">
                <h4>SQL Advisory</h4>
                <p>Get optimization suggestions for slow queries automatically.</p>
              </div>
            </div>

            <div>
              <div className="bictrl-detail-item">
                <h4>Smart Validation</h4>
                <p>
                  Checks table ownership, column existence, and query safety before execution.
                </p>
              </div>
              <div className="bictrl-detail-item">
                <h4>Schema Awareness</h4>
                <p>Understands your exact table structure, column types, and relationships.</p>
              </div>
            </div>

            <div>
              <div className="bictrl-detail-item">
                <h4>Technical Highlights</h4>
                <ul className="bictrl-tech-list">
                  <li>LangGraph SQL agent with schema inspection</li>
                  <li>Read-only query enforcement (blocks INSERT/UPDATE/DELETE/DROP)</li>
                  <li>Conversation history for follow-up questions</li>
                  <li>Agent memory learns successful query patterns</li>
                </ul>
                <div className="bictrl-pill-tags">
                  <span className="bictrl-pill-tag">Read-only safe</span>
                  <span className="bictrl-pill-tag">Schema aware</span>
                  <span className="bictrl-pill-tag">Query history</span>
                </div>
              </div>
            </div>
          </div>

          {/* 4. 6-CARD MORE FEATURES GRID */}
          <div className="bictrl-more-grid">
            <div className="bictrl-more-card">
              <div className="bictrl-feature-tag">Forecasting</div>
              <h3>Predictive Analytics</h3>
              <p>
                Predict next month&apos;s revenue — automated time-series models with confidence
                intervals. Auto-ML selects the best algorithm for your data. No data science degree
                needed.
              </p>
              <div className="bictrl-pill-tags">
                <span className="bictrl-pill-tag">AutoTS / Prophet</span>
                <span className="bictrl-pill-tag">365-day horizon</span>
                <span className="bictrl-pill-tag">Code export</span>
              </div>
            </div>

            <div className="bictrl-more-card">
              <div className="bictrl-feature-tag">Knowledge Base</div>
              <h3>Document Intelligence</h3>
              <p>
                Upload PDFs, Word docs, spreadsheets, or images. Ask questions across your entire
                document library and get precise, cited answers powered by vector search.
              </p>
              <div className="bictrl-pill-tags">
                <span className="bictrl-pill-tag">Qdrant vectors</span>
                <span className="bictrl-pill-tag">OCR via LLM</span>
                <span className="bictrl-pill-tag">HyDE retrieval</span>
              </div>
            </div>

            <div className="bictrl-more-card">
              <div className="bictrl-feature-tag">Market Intel</div>
              <h3>Web Research Agent</h3>
              <p>
                Point our AI at any website — extract pricing tables, generate competitive
                summaries, structured data from any modern site. Optional TOR routing for
                anonymity.
              </p>
              <div className="bictrl-pill-tags">
                <span className="bictrl-pill-tag">Playwright browser</span>
                <span className="bictrl-pill-tag">TOR proxy</span>
                <span className="bictrl-pill-tag">Streaming SSE</span>
              </div>
            </div>

            <div className="bictrl-more-card">
              <div className="bictrl-feature-tag">Email AI</div>
              <h3>AI Email Studio</h3>
              <p>
                Describe your intent, get a polished professional email. Strategic, formal, or
                casual — the AI adapts to your style. Send directly via SMTP from the platform.
              </p>
              <div className="bictrl-pill-tags">
                <span className="bictrl-pill-tag">LangGraph agent</span>
                <span className="bictrl-pill-tag">SMTP send</span>
                <span className="bictrl-pill-tag">Campaign studio</span>
              </div>
            </div>

            <div className="bictrl-more-card">
              <div className="bictrl-feature-tag">AI Engine</div>
              <h3>Multi-Provider AI</h3>
              <p>
                Switch between GPT-5, Gemini 2.5, and Claude Sonnet — per request. Use your own API
                keys or our hosted infrastructure. Smart routing auto-selects lightweight models
                for speed.
              </p>
              <div className="bictrl-pill-tags">
                <span className="bictrl-pill-tag">OpenAI</span>
                <span className="bictrl-pill-tag">Gemini</span>
                <span className="bictrl-pill-tag">Claude</span>
              </div>
            </div>

            <div className="bictrl-more-card">
              <div className="bictrl-feature-tag">Enterprise Security</div>
              <h3>Security &amp; Compliance</h3>
              <p>
                Two-factor authentication, role-based access, per-user data isolation, and
                read-only query enforcement. PBKDF2-SHA256 hashing, JWT with expiry, AST-level code
                validation.
              </p>
              <div className="bictrl-pill-tags">
                <span className="bictrl-pill-tag">2FA / RBAC</span>
                <span className="bictrl-pill-tag">Rate limiting</span>
                <span className="bictrl-pill-tag">Circuit breakers</span>
              </div>
            </div>
          </div>
        </section>

        {/* 5. WHY BI CONTROLLER COMPARISON SECTION */}
        <section>
          <div className="bictrl-compare-header">
            <div className="bictrl-mono-label">Why BI Controller</div>
            <h2
              style={{
                fontSize: 'clamp(36px, 4.5vw, 60px)',
                fontWeight: 700,
                color: '#ffffff',
                lineHeight: 1.1,
                marginBottom: '20px'
              }}
            >
              Traditional BI is holding you back.
            </h2>
            <p
              style={{
                fontFamily: 'var(--bi-font-mono)',
                fontSize: '15px',
                color: '#cccccc',
                maxWidth: '780px',
                lineHeight: 1.6
              }}
            >
              Legacy tools require SQL expertise, separate ML platforms, and weeks of setup. BI
              Controller collapses the stack into a single AI-native platform.
            </p>
          </div>

          <div className="bictrl-compare-grid">
            <div className="bictrl-compare-col">
              <div className="bictrl-compare-titlebar">
                Traditional BI (Tableau / Power BI)
              </div>
              <div className="bictrl-compare-body">
                <ul className="bictrl-compare-list" style={{ color: '#cccccc' }}>
                  <li>Manual dashboard building</li>
                  <li>SQL required for data queries</li>
                  <li>Separate ML tools needed</li>
                  <li>Fragmented document storage</li>
                  <li>Manual web research</li>
                  <li>Manual email marketing &amp; campaigns</li>
                  <li>Single LLM provider, lock-in</li>
                  <li>Desktop app or custom hosting setup</li>
                </ul>
              </div>
            </div>

            <div className="bictrl-compare-col">
              <div className="bictrl-compare-titlebar">BI Controller (bictrl.tech)</div>
              <div className="bictrl-compare-body">
                <ul
                  className="bictrl-compare-list"
                  style={{ color: '#ffffff', fontWeight: 700 }}
                >
                  <li>AI generates dashboards from goals</li>
                  <li>Natural language queries — no SQL needed</li>
                  <li>Built-in predictive analytics &amp; forecasting</li>
                  <li>RAG-powered knowledge base with citation</li>
                  <li>Multi-agent AI system with 10+ specialists</li>
                  <li>OpenAI, Gemini, Claude — switch per request</li>
                  <li>Cloud-native web platform, always up-to-date</li>
                </ul>
              </div>
            </div>
          </div>

          {/* POWERED BY AI FRAMEWORKS */}
          <div className="bictrl-powered-strip">
            <div>
              <div className="bictrl-mono-label" style={{ fontSize: '15px', marginBottom: '4px' }}>
                Powered by
              </div>
              <p
                style={{
                  fontFamily: 'var(--bi-font-mono)',
                  fontSize: '13px',
                  color: '#cccccc',
                  margin: 0
                }}
              >
                Built on the world&apos;s most advanced AI models and multi-agent frameworks.
              </p>
            </div>

            <div className="bictrl-powered-logos">
              <span>OpenAI</span>
              <span>Gemini</span>
              <span>Anthropic</span>
              <span>Claude</span>
              <span style={{ fontStyle: 'italic' }}>crewai</span>
              <span>LangGraph</span>
            </div>
          </div>
        </section>

        {/* 6. CTA SECTION ("YOUR DATA IS ALREADY TELLING A STORY.") */}
        <section className="bictrl-cta-section">
          <div className="bictrl-cta-side-grid left" />

          <div className="bictrl-cta-center">
            <div className="bictrl-mono-label" style={{ fontSize: '15px', marginBottom: '24px' }}>
              Get Started Today
            </div>

            <h2>
              Your Data is Already
              <br />
              <span>Telling a Story.</span>
            </h2>

            <p
              style={{
                color: '#cccccc',
                fontSize: '18px',
                maxWidth: '580px',
                marginBottom: '44px'
              }}
            >
              From raw spreadsheets to executive insights — in minutes, not months. No data science
              team required.
            </p>

            <div className="bictrl-hero-actions">
              <div className="bictrl-corner-box">
                <div className="bictrl-corner tl" />
                <div className="bictrl-corner tr" />
                <div className="bictrl-corner bl" />
                <div className="bictrl-corner br" />
                <a
                  href="https://bictrl.tech"
                  target="_blank"
                  rel="noreferrer"
                  className="bictrl-btn-primary"
                >
                  LAUNCH BICTRL.TECH
                </a>
              </div>

              <button
                type="button"
                onClick={onOpenInquiryModal}
                className="bictrl-btn-outline"
              >
                CONTACT PARTNERSHIP DESK
              </button>
            </div>
          </div>

          <div className="bictrl-cta-side-grid right" />
        </section>
      </div>
    </div>
  );
}

