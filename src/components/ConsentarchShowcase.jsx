import { useState } from 'react';
import './ConsentarchShowcase.css';
import {
  PlayCircle,
  QrCode,
  ShieldCheck,
  BarChart3,
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';

export default function ConsentarchShowcase({ onOpenInquiryModal }) {
  const [activeTab, setActiveTab] = useState('platform');
  const [cookieStatus, setCookieStatus] = useState(null);

  return (
    <div className="consentarch-showcase-root">
      {/* 1. CONSENTARCH INTERNAL NAVBAR (PLATFORM | PRICING + ACTIONS) */}
      <div className="ca-navbar">
        <div className="ca-navbar-inner">
          <a
            href="https://consentarch.com"
            target="_blank"
            rel="noreferrer"
            className="ca-brand"
          >
            ConsentArch
          </a>

          <div className="ca-nav-tabs">
            <button
              type="button"
              className={`ca-nav-tab ${activeTab === 'platform' ? 'active' : ''}`}
              onClick={() => setActiveTab('platform')}
            >
              Platform
            </button>
            <button
              type="button"
              className={`ca-nav-tab ${activeTab === 'pricing' ? 'active' : ''}`}
              onClick={() => setActiveTab('pricing')}
            >
              Pricing
            </button>
          </div>

          <div className="ca-nav-actions">
            <a
              href="https://consentarch.com/panel"
              target="_blank"
              rel="noreferrer"
              className="ca-login-link"
            >
              Login
            </a>
            <a
              href="https://consentarch.com/register"
              target="_blank"
              rel="noreferrer"
              className="ca-btn-gradient"
              style={{ padding: '0.55rem 1.4rem', fontSize: '0.92rem' }}
            >
              <span>Get Started</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </div>

      {/* 2. PLATFORM VIEW (DEFAULT) */}
      {activeTab === 'platform' && (
        <>
          {/* HERO SECTION */}
          <section className="ca-hero">
            <div className="ca-container">
              <div className="ca-hero-grid">
                <div>
                  <span className="ca-badge">Enterprise Compliance</span>

                  <h1 className="ca-hero-title">
                    Architectural <span>Privacy</span> for the Modern Web.
                  </h1>

                  <p className="ca-hero-subtitle">
                    Move beyond cluttered legal pop-ups. Implement high-end consent structures
                    that respect user sovereignty while ensuring global regulatory compliance.
                  </p>

                  <div className="ca-hero-buttons">
                    <a
                      href="https://consentarch.com"
                      target="_blank"
                      rel="noreferrer"
                      className="ca-btn-gradient ca-btn-lg"
                    >
                      <span>Launch Platform</span>
                    </a>

                    <button
                      type="button"
                      onClick={onOpenInquiryModal}
                      className="ca-btn-surface ca-btn-lg"
                    >
                      <PlayCircle size={20} />
                      <span>View Demo</span>
                    </button>
                  </div>
                </div>

                {/* LIVE PREVIEW COMPONENT (SIGNATURE COOKIE BANNER) */}
                <div>
                  <div className="ca-preview-square">
                    <div className="ca-blueprint-bg" />

                    <div className="ca-glass-banner">
                      <div className="ca-glass-banner-inner">
                        <div style={{ flex: 1 }}>
                          <h3>Privacy Preference</h3>
                          <p>
                            {cookieStatus === 'accepted'
                              ? 'All architectural telemetry & compliance logs verified (0.02ms edge sync).'
                              : cookieStatus === 'customized'
                              ? 'Granular GDPR / CCPA sovereignty preferences active.'
                              : 'We use cookies to refine your architectural experience and analyze site traffic.'}
                          </p>
                        </div>

                        <div className="ca-glass-actions">
                          <button
                            type="button"
                            className="ca-banner-accept"
                            onClick={() => setCookieStatus('accepted')}
                          >
                            {cookieStatus === 'accepted' ? '✓ Accepted' : 'Accept All'}
                          </button>
                          <button
                            type="button"
                            className="ca-banner-customize"
                            onClick={() => setCookieStatus('customized')}
                          >
                            {cookieStatus === 'customized' ? '✓ Customized' : 'Customize'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* PRECISION GOVERNANCE — FEATURES BENTO GRID */}
          <section className="ca-bento-section">
            <div className="ca-container">
              <div className="ca-section-heading">
                <h2>Precision Governance</h2>
                <div className="ca-heading-bar" />
              </div>

              <div className="ca-bento-grid">
                {/* Large Feature (2 Cols) */}
                <div className="ca-bento-card-white ca-bento-span-2">
                  <div>
                    <div className="ca-icon-box">
                      <QrCode size={24} />
                    </div>
                    <h3 className="ca-bento-title">Autonomous Compliance Scanning</h3>
                    <p className="ca-bento-desc">
                      Our proprietary engine automatically detects, categorizes, and blocks
                      non-compliant scripts in real-time, ensuring zero-day adherence to GDPR and
                      CCPA.
                    </p>
                  </div>

                  <div className="ca-script-pills">
                    <div className="ca-script-pill">GA4 Detected</div>
                    <div className="ca-script-pill">Facebook Pixel</div>
                    <div className="ca-script-pill blocked">Hotjar Blocked</div>
                  </div>
                </div>

                {/* Small Feature 1 (Legal Shield) */}
                <div className="ca-bento-card-blue">
                  <ShieldCheck size={38} />
                  <div>
                    <h3 className="ca-bento-title" style={{ marginBottom: '0.5rem' }}>
                      Legal Shield
                    </h3>
                    <p
                      style={{
                        color: 'var(--ca-primary-fixed)',
                        fontSize: '0.92rem',
                        lineHeight: 1.6,
                        opacity: 0.92
                      }}
                    >
                      Every consent event is cryptographically hashed and logged for bulletproof
                      audit trails.
                    </p>
                  </div>
                </div>

                {/* Small Feature 2 (Consent Insights) */}
                <div className="ca-bento-card-low">
                  <BarChart3 size={38} color="var(--ca-primary-container)" />
                  <div>
                    <h3 className="ca-bento-title" style={{ marginBottom: '0.5rem' }}>
                      Consent Insights
                    </h3>
                    <p
                      style={{
                        color: 'var(--ca-on-secondary-container)',
                        fontSize: '0.92rem',
                        lineHeight: 1.6
                      }}
                    >
                      Visualize opt-in rates across regions without compromising visitor
                      anonymity.
                    </p>
                  </div>
                </div>

                {/* Mid Feature (2 Cols — Zero-Latency Deployment) */}
                <div className="ca-bento-card-secondary ca-bento-span-2">
                  <div style={{ flex: 1 }}>
                    <h3 className="ca-bento-title">Zero-Latency Deployment</h3>
                    <p
                      style={{
                        color: 'var(--ca-on-secondary-container)',
                        fontSize: '0.95rem',
                        lineHeight: 1.65
                      }}
                    >
                      Our edge-delivered script weighs less than 12kb and executes after your
                      primary content loads, maintaining your 100/100 Lighthouse score.
                    </p>
                  </div>

                  <div className="ca-latency-widget">
                    <div className="ca-cdn-status">
                      <span className="ca-cdn-dot" />
                      <span
                        style={{
                          fontFamily: 'var(--ca-font-headline)',
                          fontSize: '0.75rem',
                          fontWeight: 700
                        }}
                      >
                        CDN Status: Active
                      </span>
                    </div>
                    <div className="ca-latency-num">0.02ms</div>
                    <div
                      style={{
                        fontSize: '10px',
                        color: 'var(--ca-outline)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.14em'
                      }}
                    >
                      Global Avg. Latency
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* TRUSTED BY ARCHITECTURAL PIONEERS */}
          <section className="ca-trust-section">
            <div className="ca-container">
              <h3 className="ca-trust-label">Trusted by Architectural Pioneers</h3>
              <div className="ca-trust-logos">
                <div className="ca-trust-logo-item">STRUCT</div>
                <div className="ca-trust-logo-item">MODULAR.IO</div>
                <div className="ca-trust-logo-item">ESTATE</div>
                <div className="ca-trust-logo-item">VERTEX</div>
                <div className="ca-trust-logo-item">NUCLEUS</div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* 3. ARCHITECTURAL PRICING VIEW (ALWAYS INCLUDED BELOW OR VIA PRICING TAB) */}
      <section className="ca-pricing-section">
        <div className="ca-container">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto' }}>
            <h2
              style={{
                fontFamily: 'var(--ca-font-headline)',
                fontSize: 'clamp(2.2rem, 4vw, 3.3rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                marginBottom: '1rem'
              }}
            >
              Simple, Transparent{' '}
              <span style={{ color: 'var(--ca-primary-container)' }}>Architectural</span>{' '}
              Pricing.
            </h2>
            <p style={{ color: 'var(--ca-on-secondary-container)', fontSize: '1.08rem' }}>
              Choose the structure that fits your compliance needs. From startups to global
              enterprises, we have a plan for everyone.
            </p>
          </div>

          <div className="ca-pricing-grid">
            {/* Foundation Plan */}
            <div className="ca-price-card">
              <div>
                <h3 className="ca-bento-title" style={{ marginBottom: '0.35rem' }}>
                  Foundation
                </h3>
                <p style={{ color: 'var(--ca-on-secondary-container)', fontSize: '0.88rem' }}>
                  For personal projects and low-traffic sites.
                </p>

                <div className="ca-price-amount">
                  <strong>$0</strong>
                  <span style={{ color: 'var(--ca-outline)', fontSize: '0.88rem' }}>/month</span>
                </div>

                <ul className="ca-price-features">
                  <li>
                    <CheckCircle2 size={18} color="var(--ca-primary-container)" />
                    <span>Up to 5,000 monthly visits</span>
                  </li>
                  <li>
                    <CheckCircle2 size={18} color="var(--ca-primary-container)" />
                    <span>Standard cookie banner</span>
                  </li>
                  <li>
                    <CheckCircle2 size={18} color="var(--ca-primary-container)" />
                    <span>Basic compliance scanning</span>
                  </li>
                </ul>
              </div>

              <a
                href="https://consentarch.com/register"
                target="_blank"
                rel="noreferrer"
                className="ca-btn-surface"
                style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}
              >
                Get Started
              </a>
            </div>

            {/* Architect Plan (Most Popular) */}
            <div className="ca-price-card featured">
              <span className="ca-popular-badge">Most Popular</span>
              <div>
                <h3 className="ca-bento-title" style={{ marginBottom: '0.35rem' }}>
                  Architect
                </h3>
                <p style={{ color: 'var(--ca-primary-fixed)', fontSize: '0.88rem', opacity: 0.9 }}>
                  For growing businesses and professional teams.
                </p>

                <div className="ca-price-amount">
                  <strong>$49</strong>
                  <span style={{ color: 'var(--ca-primary-fixed)', fontSize: '0.88rem' }}>
                    /month
                  </span>
                </div>

                <ul className="ca-price-features">
                  <li>
                    <CheckCircle2 size={18} color="#ffffff" />
                    <span>Up to 100,000 monthly visits</span>
                  </li>
                  <li>
                    <CheckCircle2 size={18} color="#ffffff" />
                    <span>Fully customizable design</span>
                  </li>
                  <li>
                    <CheckCircle2 size={18} color="#ffffff" />
                    <span>Advanced legal log auditing</span>
                  </li>
                  <li>
                    <CheckCircle2 size={18} color="#ffffff" />
                    <span>Priority email support</span>
                  </li>
                </ul>
              </div>

              <a
                href="https://consentarch.com/register"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  padding: '1rem',
                  backgroundColor: '#ffffff',
                  color: 'var(--ca-primary)',
                  borderRadius: '9999px',
                  fontWeight: 700
                }}
              >
                Start Free Trial
              </a>
            </div>

            {/* Sovereign Plan */}
            <div className="ca-price-card">
              <div>
                <h3 className="ca-bento-title" style={{ marginBottom: '0.35rem' }}>
                  Sovereign
                </h3>
                <p style={{ color: 'var(--ca-on-secondary-container)', fontSize: '0.88rem' }}>
                  For high-traffic enterprise applications.
                </p>

                <div className="ca-price-amount">
                  <strong>Custom</strong>
                </div>

                <ul className="ca-price-features">
                  <li>
                    <CheckCircle2 size={18} color="var(--ca-primary-container)" />
                    <span>Unlimited monthly visits</span>
                  </li>
                  <li>
                    <CheckCircle2 size={18} color="var(--ca-primary-container)" />
                    <span>Global CDN delivery</span>
                  </li>
                  <li>
                    <CheckCircle2 size={18} color="var(--ca-primary-container)" />
                    <span>Custom legal templates</span>
                  </li>
                  <li>
                    <CheckCircle2 size={18} color="var(--ca-primary-container)" />
                    <span>Dedicated account manager</span>
                  </li>
                </ul>
              </div>

              <button
                type="button"
                onClick={onOpenInquiryModal}
                style={{
                  width: '100%',
                  padding: '1rem',
                  backgroundColor: 'var(--ca-on-surface)',
                  color: '#ffffff',
                  borderRadius: '9999px',
                  fontWeight: 700
                }}
              >
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA SECTION */}
      <section className="ca-cta-section">
        <div className="ca-container" style={{ maxWidth: '780px' }}>
          <h2
            style={{
              fontFamily: 'var(--ca-font-headline)',
              fontSize: 'clamp(2rem, 3.8vw, 3.1rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              marginBottom: '1.25rem'
            }}
          >
            Ready to define your privacy structure?
          </h2>
          <p
            style={{
              color: 'var(--ca-on-secondary-container)',
              fontSize: '1.15rem',
              marginBottom: '2.5rem'
            }}
          >
            Join 4,000+ companies using ConsentArch to build trust through transparent data
            governance.
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1rem'
            }}
          >
            <a
              href="https://consentarch.com/register"
              target="_blank"
              rel="noreferrer"
              className="ca-btn-gradient ca-btn-lg"
            >
              Get Started Free
            </a>
            <button
              type="button"
              onClick={onOpenInquiryModal}
              className="ca-btn-lg"
              style={{
                backgroundColor: '#ffffff',
                color: 'var(--ca-on-surface)',
                borderRadius: '9999px',
                fontWeight: 700,
                border: '1px solid rgba(195, 197, 217, 0.5)'
              }}
            >
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* 5. CONSENTARCH SCOPED FOOTER */}
      <div className="ca-footer">
        <div className="ca-container ca-footer-inner">
          <div>
            <div
              style={{
                fontFamily: 'var(--ca-font-headline)',
                fontSize: '1.15rem',
                fontWeight: 800,
                marginBottom: '0.25rem'
              }}
            >
              ConsentArch
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--ca-on-secondary-container)' }}>
              © 2026 ConsentArch. Tonal Sovereignty in Data Privacy.
            </p>
          </div>

          <div className="ca-footer-links">
            <a
              href="https://consentarch.com/privacy-policy"
              target="_blank"
              rel="noreferrer"
            >
              Privacy Policy
            </a>
            <a
              href="https://consentarch.com/terms-of-service"
              target="_blank"
              rel="noreferrer"
            >
              Terms of Service
            </a>
            <a
              href="https://consentarch.com/cookie-settings"
              target="_blank"
              rel="noreferrer"
            >
              Cookie Settings
            </a>
            <a href="https://consentarch.com/contact" target="_blank" rel="noreferrer">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

