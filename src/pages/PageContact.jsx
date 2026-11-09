import { useState } from 'react';
import {
  Mail,
  Globe,
  Share2,
  ArrowUpRight,
  CheckCircle2,
  MapPin
} from 'lucide-react';

export default function PageContact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    organization: '',
    topic: 'Mantab One — Remote Development Teams',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="dedicated-page">
      {/* 1. CONTACT HERO & DIRECT INQUIRY WORKSPACE */}
      <section className="page-hero-section sheet-warm-gray">
        <div className="sheet-inner-container">
          <div className="sheet-top-bar">
            <span className="clean-label">06 — CONTACT &amp; COLLABORATION</span>
            <span className="clean-label-muted">EUROPE · AUSTRALIA · INDONESIA</span>
          </div>

          <div className="page-contact-grid">
            {/* Left Column: Editorial Headline + Direct Channels */}
            <div>
              <div className="section-tag">
                <span className="section-tag-dot" />
                <span>PARTNERSHIPS &amp; INQUIRIES</span>
              </div>

              <h1 className="page-display-title">
                Let&apos;s Build{' '}
                <span className="highlight">What&apos;s Next.</span>
              </h1>

              <p className="page-lead-paragraph" style={{ marginBottom: '2.5rem' }}>
                For business partnerships, Mantab One software development and remote team
                collaborations, or international opportunities across Europe, Australia, and
                Indonesia—let&apos;s start a conversation.
              </p>

              <div className="clean-label" style={{ marginBottom: '1rem' }}>
                DIRECT CHANNELS
              </div>

              <div className="contact-clean-grid" style={{ marginBottom: '2.5rem' }}>
                <a
                  href="mailto:contact@sergiovandijk.com"
                  className="contact-row-item"
                >
                  <div className="contact-row-icon">
                    <Mail size={18} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div className="contact-row-title">Direct Partnership Desk</div>
                    <div className="contact-row-subtitle">contact@sergiovandijk.com</div>
                  </div>
                  <ArrowUpRight size={16} color="var(--brand-taupe)" />
                </a>

                <a
                  href="https://sergiovandijk.com"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-row-item"
                >
                  <div className="contact-row-icon">
                    <Globe size={18} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div className="contact-row-title">Mantab One &amp; Official Portal</div>
                    <div className="contact-row-subtitle">
                      Technology · Software Development · Remote Teams
                    </div>
                  </div>
                  <ArrowUpRight size={16} color="var(--brand-taupe)" />
                </a>

                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-row-item"
                >
                  <div className="contact-row-icon">
                    <Share2 size={18} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div className="contact-row-title">Professional Socials</div>
                    <div className="contact-row-subtitle">
                      LinkedIn · Instagram (@sergiovandijk)
                    </div>
                  </div>
                  <ArrowUpRight size={16} color="var(--brand-taupe)" />
                </a>
              </div>
            </div>

            {/* Right Column: Embedded Clean Inquiry Form */}
            <div className="page-contact-form-panel sheet-white">
              {submitted ? (
                <div style={{ padding: '2rem 0', textAlign: 'left' }}>
                  <CheckCircle2
                    size={42}
                    color="var(--brand-taupe)"
                    style={{ marginBottom: '1rem' }}
                  />
                  <h3 className="section-headline" style={{ fontSize: '1.8rem' }}>
                    Inquiry Received.
                  </h3>
                  <p className="section-subtext">
                    Thank you, <strong>{formState.name}</strong>. Your message regarding{' '}
                    <strong>{formState.topic}</strong> has been logged for Sergio van Dijk&apos;s
                    team. We will respond via <strong>{formState.email}</strong> shortly.
                  </p>
                  <button
                    className="btn-primary"
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({
                        name: '',
                        email: '',
                        organization: '',
                        topic: 'Mantab One — Remote Development Teams',
                        message: ''
                      });
                    }}
                  >
                    <span>SEND ANOTHER MESSAGE</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="sheet-top-bar" style={{ marginBottom: '1.75rem' }}>
                    <span className="clean-label">DIRECT MESSAGE</span>
                    <span className="clean-label-muted">CONFIDENTIAL DISPATCH</span>
                  </div>

                  <div className="form-group">
                    <label className="form-label">FULL NAME *</label>
                    <input
                      type="text"
                      required
                      className="form-input"
                      placeholder="Your full name"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                    />
                  </div>

                  <div className="page-form-row-2col">
                    <div className="form-group">
                      <label className="form-label">WORK EMAIL *</label>
                      <input
                        type="email"
                        required
                        className="form-input"
                        placeholder="name@company.com"
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">ORGANIZATION / COMPANY</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="Company or venture"
                        value={formState.organization}
                        onChange={(e) =>
                          setFormState({ ...formState, organization: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">INQUIRY TOPIC *</label>
                    <select
                      className="form-input"
                      value={formState.topic}
                      onChange={(e) =>
                        setFormState({ ...formState, topic: e.target.value })
                      }
                    >
                      <option value="Mantab One — Remote Development Teams">
                        Mantab One — Dedicated Remote Development Teams
                      </option>
                      <option value="Mantab One — Custom Software Development">
                        Mantab One — Custom Software Development
                      </option>
                      <option value="Cross-Border Business Collaboration">
                        Cross-Border Business Collaboration (Europe / Australia / Indonesia)
                      </option>
                      <option value="Executive Speaking, Leadership & Brand">
                        Executive Speaking, Leadership &amp; Brand Representation
                      </option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">PROJECT OR PARTNERSHIP BRIEF *</label>
                    <textarea
                      rows={4}
                      required
                      className="form-textarea"
                      placeholder="Share your goals, timeline, or how we can collaborate..."
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}
                  >
                    <span>SEND PARTNERSHIP INQUIRY</span>
                    <ArrowUpRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTERNATIONAL CORRIDORS SECTION */}
      <section className="page-content-section sheet-white">
        <div className="sheet-inner-container">
          <div className="sheet-top-bar">
            <span className="clean-label">OPERATING CORRIDORS</span>
            <span className="clean-label-muted">GLOBAL PRESENCE</span>
          </div>

          <div className="clean-three-col">
            <div className="clean-col-item">
              <span className="clean-col-num">
                <MapPin size={13} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
                CORRIDOR 01
              </span>
              <h3>Europe — The Netherlands</h3>
              <p>
                Executive partnerships, technology advisory, and connecting European enterprises with
                dedicated remote engineering teams and Southeast Asian growth markets.
              </p>
            </div>

            <div className="clean-col-item">
              <span className="clean-col-num">
                <MapPin size={13} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
                CORRIDOR 02
              </span>
              <h3>Indonesia — Jakarta &amp; Bandung</h3>
              <p>
                Software engineering operations with Mantab One, bilateral business development, and
                enduring relationships across Indonesia&apos;s technology and sporting ecosystems.
              </p>
            </div>

            <div className="clean-col-item">
              <span className="clean-col-num">
                <MapPin size={13} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
                CORRIDOR 03
              </span>
              <h3>Australia &amp; Asia-Pacific</h3>
              <p>
                Cross-border collaboration, leadership engagements, and strategic network
                introductions across the Australian and broader Asia-Pacific region.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

