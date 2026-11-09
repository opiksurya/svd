import { ArrowUp, ArrowUpRight, Send } from 'lucide-react';

export default function SectionContact({ onOpenInquiryModal, onScrollToTop }) {
  return (
    <section id="section-4" className="scroll-section full-overlap-sheet sheet-white overlap-stack-contact">
      <div className="sheet-inner-container">
        <div className="sheet-top-bar">
          <span className="clean-label">08 — CONTACT &amp; COLLABORATION</span>
          <span className="clean-label-muted">SERGIOVANDIJK.COM</span>
        </div>

        <div className="sheet-split-2col">
          {/* LEFT COLUMN: Headline, Subtitle & Action */}
          <div>
            <h2 className="section-headline">
              Let&apos;s Build <span className="highlight">What&apos;s Next</span>.
            </h2>

            <p className="section-subtext">
              For business partnerships, professional collaborations, and international
              opportunities, let&apos;s start a conversation.
            </p>

            <div className="action-group">
              <button className="btn-primary" onClick={onOpenInquiryModal}>
                <span>GET IN TOUCH</span>
                <Send size={15} />
              </button>

              <button className="btn-secondary" onClick={onScrollToTop} title="Back to Top">
                <span>Back to Top</span>
                <ArrowUp size={16} />
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Ultra-Clean Minimalist Contact Channels */}
          <div>
            <div className="contact-clean-grid">
              <div
                className="contact-row-item"
                onClick={() => window.open('mailto:contact@sergiovandijk.com', '_blank')}
              >
                <div style={{ flex: 1 }}>
                  <div className="contact-row-title">Official Inquiries</div>
                  <div className="contact-row-subtitle">contact@sergiovandijk.com</div>
                </div>
                <ArrowUpRight size={18} style={{ color: 'var(--brand-taupe)' }} />
              </div>

              <div className="contact-row-item" onClick={onOpenInquiryModal}>
                <div style={{ flex: 1 }}>
                  <div className="contact-row-title">Mantab One</div>
                  <div className="contact-row-subtitle">
                    Technology, Software &amp; Remote Development Teams
                  </div>
                </div>
                <ArrowUpRight size={18} style={{ color: 'var(--brand-taupe)' }} />
              </div>

              <div
                className="contact-row-item"
                onClick={() => window.open('https://www.linkedin.com', '_blank')}
              >
                <div style={{ flex: 1 }}>
                  <div className="contact-row-title">LinkedIn</div>
                  <div className="contact-row-subtitle">
                    Professional Network &amp; International Profile
                  </div>
                </div>
                <ArrowUpRight size={18} style={{ color: 'var(--brand-taupe)' }} />
              </div>

              <div
                className="contact-row-item"
                onClick={() => window.open('https://www.instagram.com', '_blank')}
              >
                <div style={{ flex: 1 }}>
                  <div className="contact-row-title">Instagram</div>
                  <div className="contact-row-subtitle">Official Social Channel</div>
                </div>
                <ArrowUpRight size={18} style={{ color: 'var(--brand-taupe)' }} />
              </div>
            </div>

            <div
              style={{
                fontSize: '0.76rem',
                fontWeight: 600,
                letterSpacing: '0.06em',
                color: 'var(--text-light)',
                paddingTop: '0.5rem',
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '0.5rem'
              }}
            >
              <span>© {new Date().getFullYear()} sergiovandijk.com. All rights reserved.</span>
              <span>Beyond Football. Beyond Borders.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
