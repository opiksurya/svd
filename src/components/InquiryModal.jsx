import { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';

export default function InquiryModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Business Partnership & Collaboration',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 2200);
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 800 }}>
            Let&apos;s Build What&apos;s Next
          </h3>
          <button 
            onClick={onClose} 
            style={{ width: 32, height: 32, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {isSubmitted ? (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <CheckCircle2 size={48} color="#10b981" style={{ margin: '0 auto 1rem' }} />
            <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              Inquiry Sent Successfully!
            </h4>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              Thank you for reaching out. Your inquiry regarding Sergio van Dijk&apos;s partnerships and ventures has been received.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Full Name &amp; Organization</label>
              <input 
                type="text" 
                required
                className="form-input" 
                placeholder="Your name and company"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input 
                type="email" 
                required
                className="form-input" 
                placeholder="name@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Discussion Focus</label>
              <select 
                className="form-input"
                value={formData.topic}
                onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
              >
                <option value="Business Partnership & Collaboration">Business Partnership &amp; Collaboration</option>
                <option value="Mantab One — Software & Remote Teams">Mantab One — Software &amp; Remote Teams</option>
                <option value="International Opportunity & Networking">International Opportunity &amp; Networking</option>
                <option value="Speaking & Media Inquiry">Speaking &amp; Media Inquiry</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Project Scope &amp; Message</label>
              <textarea 
                rows="3"
                required
                className="form-textarea" 
                placeholder="Share a brief overview of your partnership or collaboration inquiry..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="btn-primary" 
              style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}
            >
              <span>GET IN TOUCH</span>
              <Send size={15} />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
