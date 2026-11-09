import { ArrowUpRight, ArrowRight } from 'lucide-react';
import './MantabOneShowcase.css';

const STATS = [
  { value: '50+', label: 'Developer talent' },
  { value: '100+', label: 'International companies' },
  { value: '48h', label: 'Response time' },
  { value: '98%', label: 'Client satisfaction' }
];

const TRUSTED_COMPANIES = ['Unilever', 'ISID', 'Kalibr', 'kkbc', 'Save the Children'];

const ROLE_PILLARS = [
  {
    num: '01',
    title: 'Brand Positioning & Market Entry',
    desc: "Defined Mantab One's positioning in the Dutch and European IT staffing market — differentiating from generic recruitment agencies by leading with continuity guarantees, Dutch-language support, and deep technical vetting. Crafted the messaging that speaks directly to digital agencies and tech teams who need reliable offshore talent."
  },
  {
    num: '02',
    title: 'Commercial Model & Pricing Architecture',
    desc: 'Designed the outstaffing commercial model: transparent day-rate pricing, no minimum commitment tiers, and a milestone-based onboarding process that reduces perceived risk for new clients. Structured the service tiers across solo developer, small team, and dedicated external team placements.'
  },
  {
    num: '03',
    title: 'Client Acquisition & Partnership Strategy',
    desc: "Built the go-to-market funnel targeting Dutch digital agencies and recruiters as primary distribution partners — turning resellers into scalable acquisition channels. Established the initial client relationships that anchored Mantab One's reputation in the Netherlands."
  }
];

const OTHER_PROJECTS = [
  { id: 'drankshop', name: 'Drankshop' },
  { id: 'synergizeflow', name: 'SynergizeFlow' },
  { id: 'regal-estate-group', name: 'Regal Estate Group' },
  { id: 'indovest', name: 'Indovest' },
  { id: 'kantoorzoeken', name: 'Kantoorzoeken' },
  { id: 'bictrl', name: 'BICTRL' },
  { id: 'consentarch', name: 'Consentarch' }
];

export default function MantabOneShowcase({
  onSelectProjectSlug,
  onOpenInquiryModal
}) {
  return (
    <div className="mantab-showcase-root">
      {/* 1. HERO SECTION (#1B3A8C) */}
      <section className="mo-hero">
        <div className="mo-container">
          <div className="mo-hero-grid">
            <div>
              <div className="mo-breadcrumb">
                <button
                  type="button"
                  className="mo-breadcrumb-link"
                  onClick={() => onSelectProjectSlug && onSelectProjectSlug(null)}
                >
                  Projects
                </button>
                <span className="mo-breadcrumb-sep">/</span>
                <span className="mo-breadcrumb-current">Mantab One</span>
              </div>

              <div className="mo-hero-badge">
                IT Outstaffing &middot; Remote Talent &middot; Netherlands
              </div>

              <h1 className="mo-hero-title">
                Directly deployable remote talent for your team.
              </h1>

              <p className="mo-hero-desc">
                Mantab One delivers immediately deployable software developers — without long-term
                contracts. We work for leading international companies and slot seamlessly into any
                team.
              </p>

              <div className="mo-hero-actions">
                <a
                  href="https://mantab.one"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mo-btn-white"
                >
                  <span>Visit mantab.one</span>
                  <ArrowUpRight size={16} />
                </a>

                <button
                  type="button"
                  className="mo-btn-outline"
                  onClick={() => onSelectProjectSlug && onSelectProjectSlug(null)}
                >
                  <span>All Projects</span>
                </button>
              </div>
            </div>

            <div>
              <img
                src="https://oliemuller.nl/wp-content/uploads/2026/09/Image-Mantab-One-developer-team.jpg"
                alt="Mantab One developer team"
                className="mo-hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. 4-COLUMN STATS BAR (#152D70) */}
      <section className="mo-stats-bar">
        <div className="mo-container">
          <div className="mo-stats-grid">
            {STATS.map((stat) => (
              <div key={stat.label} className="mo-stat-item">
                <h3 className="mo-stat-value">{stat.value}</h3>
                <p className="mo-stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TECHNOLOGY SPECIALISATIONS & TRUSTED BY (#1B3A8C) */}
      <section className="mo-tech-section">
        <div className="mo-container">
          <span className="mo-tech-eyebrow">Step to the Mantab Solution</span>
          <h2 className="mo-tech-title">Our technology specialisations</h2>

          <div className="mo-tech-grid">
            {/* Vue JS */}
            <div className="mo-tech-card">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path
                  d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z"
                  fill="#42B883"
                />
                <path
                  d="M11.3168 11L20.001 26L28.6852 11H31.001L20.001 30L9.00098 11H11.3168ZM15.6589 11L20.001 18.5L24.3431 11H26.6589L20.001 22.5L13.3431 11H15.6589Z"
                  fill="white"
                />
              </svg>
              <h3>Vue JS</h3>
            </div>

            {/* PHP */}
            <div className="mo-tech-card">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path
                  d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z"
                  fill="#8892BE"
                />
                <path
                  d="M18.1495 13.5498L16.4322 22.3844H18.4322L19.2909 17.9671H20.7909C21.3432 17.9671 21.7054 18.4066 21.6001 18.9488L20.9322 22.3844H22.9322L23.6001 18.9488C23.9162 17.3223 22.8293 16.0039 21.1725 16.0039H19.6725L20.1495 13.5498H18.1495ZM10.1724 16.0039H13.9224C15.7173 16.0039 16.8947 17.4323 16.5522 19.1942C16.2097 20.9562 14.477 22.3845 12.6821 22.3845H10.9321L10.4551 24.8386H8.45508L10.1724 16.0039ZM11.3137 20.4212H13.0637C13.7541 20.4212 14.4205 19.8719 14.5522 19.1942C14.684 18.5165 14.2311 17.9672 13.5407 17.9672H11.7907L11.3137 20.4212ZM25.1723 16.0039H28.9223C30.7173 16.0039 31.8947 17.4323 31.5522 19.1942C31.2097 20.9562 29.477 22.3845 27.6821 22.3845H25.9321L25.4551 24.8386H23.4551L25.1723 16.0039ZM26.3137 20.4212H28.0637C28.7541 20.4212 29.4205 19.8719 29.5522 19.1942C29.6839 18.5165 29.2311 17.9672 28.5407 17.9672H26.7907L26.3137 20.4212Z"
                  fill="white"
                />
              </svg>
              <h3>PHP</h3>
            </div>

            {/* Laravel */}
            <div className="mo-tech-card">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path
                  d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z"
                  fill="#FF2D20"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.917 12.255C14.0624 12.2388 14.2094 12.2655 14.3398 12.3317C14.4702 12.398 14.5784 12.501 14.651 12.628L19.641 21.361L25.652 19.903L23.89 17.436C23.8153 17.3312 23.7687 17.209 23.7549 17.081C23.7411 16.953 23.7604 16.8237 23.811 16.7054C23.8616 16.587 23.9419 16.4837 24.044 16.4054C24.1461 16.327 24.2666 16.2763 24.394 16.258L27.894 15.758C28.0206 15.7399 28.1497 15.7545 28.2691 15.8003C28.3884 15.8462 28.4941 15.9218 28.576 16.02L31.076 19.02C31.1576 19.1179 31.2128 19.235 31.2366 19.3602C31.2603 19.4854 31.2518 19.6146 31.2118 19.7356C31.1717 19.8565 31.1016 19.9653 31.0078 20.0517C30.9141 20.138 30.7999 20.199 30.676 20.229L28.163 20.839L30.11 23.564C30.176 23.6564 30.2202 23.7626 30.2392 23.8746C30.2582 23.9866 30.2515 24.1014 30.2196 24.2104C30.1877 24.3194 30.1315 24.4198 30.0552 24.5039C29.9788 24.588 29.8844 24.6537 29.779 24.696L22.279 27.696C22.111 27.7633 21.9243 27.7675 21.7534 27.708C21.5825 27.6485 21.4388 27.5291 21.349 27.372L18.899 23.084L14.177 24.229C14.0071 24.27 13.8281 24.2504 13.6711 24.1736C13.5141 24.0967 13.3888 23.9674 13.317 23.808L8.81701 13.808C8.76854 13.7002 8.74621 13.5826 8.75183 13.4646C8.75744 13.3466 8.79085 13.2316 8.84934 13.129C8.90782 13.0263 8.98972 12.9389 9.08837 12.874C9.18702 12.809 9.29962 12.7682 9.41701 12.755L13.917 12.255ZM18.124 21.729L13.594 13.799L10.607 14.132L14.428 22.624L18.124 21.729ZM20.416 22.716L22.327 26.061L28.334 23.659L26.592 21.219L20.416 22.716ZM27.224 19.523L29.153 19.055L27.692 17.302L25.827 17.568L27.223 19.523H27.224Z"
                  fill="white"
                />
              </svg>
              <h3>Laravel</h3>
            </div>

            {/* Python */}
            <div className="mo-tech-card">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path
                  d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z"
                  fill="#FFD343"
                />
                <path
                  d="M22.2504 8.18L23.1504 8.38L23.8804 8.64L24.4704 8.94L24.9204 9.26L25.2604 9.6L25.5104 9.94L25.6704 10.27L25.7704 10.57L25.8104 10.83L25.8304 11.03L25.8204 11.16V16.5L25.7704 17.13L25.6404 17.68L25.4304 18.14L25.1704 18.52L24.8704 18.83L24.5404 19.08L24.1904 19.27L23.8404 19.41L23.5104 19.51L23.2104 19.58L22.9504 19.62L22.7404 19.64H16.7704L16.0804 19.69L15.4904 19.83L14.9904 20.05L14.5804 20.32L14.2504 20.64L13.9804 20.99L13.7804 21.35L13.6304 21.72L13.5304 22.07L13.4604 22.39L13.4204 22.66L13.4004 22.87V25.93H11.1704L10.9604 25.9L10.6804 25.83L10.3604 25.71L10.0104 25.53L9.65043 25.27L9.29043 24.91L8.94043 24.45L8.62043 23.86L8.34043 23.13L8.13043 22.25L7.99043 21.2L7.94043 19.97L8.00043 18.75L8.16043 17.71L8.40043 16.84L8.72043 16.13L9.08043 15.56L9.48043 15.12L9.90043 14.79L10.3204 14.55L10.7204 14.39L11.0804 14.29L11.4004 14.24L11.6404 14.23H11.8004L11.8604 14.24H20.0204V13.41H14.1804L14.1704 10.66L14.1504 10.29L14.2004 9.95L14.3104 9.64L14.4804 9.36L14.7304 9.1L15.0404 8.87L15.4204 8.67L15.8604 8.49L16.3704 8.34L16.9504 8.22L17.5904 8.12L18.3004 8.06L19.0704 8.02L19.9104 8L21.1804 8.05L22.2504 8.18ZM15.9504 10.16L15.7204 10.49L15.6404 10.9L15.7204 11.31L15.9504 11.65L16.2804 11.87L16.6904 11.96L17.1004 11.87L17.4304 11.65L17.6604 11.31L17.7404 10.9L17.6604 10.49L17.4304 10.16L17.1004 9.94L16.6904 9.85L16.2804 9.94L15.9504 10.16ZM29.0404 14.11L29.3204 14.17L29.6404 14.29L29.9904 14.47L30.3504 14.74L30.7104 15.09L31.0604 15.56L31.3804 16.15L31.6604 16.88L31.8704 17.76L32.0104 18.8L32.0604 20.03L32.0004 21.26L31.8404 22.3L31.6004 23.16L31.2804 23.87L30.9204 24.44L30.5204 24.89L30.1004 25.22L29.6804 25.46L29.2804 25.62L28.9204 25.71L28.6004 25.76L28.3604 25.78L28.2004 25.77H19.9804V26.59H25.8204L25.8304 29.35L25.8504 29.71L25.8004 30.05L25.6904 30.36L25.5204 30.65L25.2704 30.9L24.9604 31.14L24.5804 31.34L24.1404 31.51L23.6304 31.66L23.0504 31.79L22.4104 31.88L21.7004 31.95L20.9304 31.99L20.0904 32L18.8204 31.96L17.7504 31.82L16.8504 31.62L16.1204 31.37L15.5304 31.07L15.0804 31.07L14.7404 30.4L14.4904 30.06L14.3304 29.73L14.2304 29.43L14.1904 29.18L14.1704 28.98L14.1804 28.85V23.51L14.2304 22.87L14.3604 22.33L14.5704 21.87L14.8304 21.49L15.1304 21.17L15.4604 20.93L15.8104 20.73L16.1604 20.59L16.4904 20.49L16.7904 20.43L17.0504 20.39L17.2604 20.37L17.3904 20.36H23.2304L23.9204 20.31L24.5104 20.17L25.0104 19.96L25.4204 19.68L25.7504 19.36L26.0204 19.01L26.2204 18.65L26.3704 18.29L26.4704 17.94L26.5404 17.62L26.5804 17.34L26.6004 17.13V14.07H28.6904L28.8304 14.08L29.0404 14.11ZM22.5704 28.36L22.3404 28.69L22.2604 29.1L22.3404 29.51L22.5704 29.84L22.9004 30.07L23.3104 30.15L23.7204 30.07L24.0504 29.84L24.2804 29.51L24.3604 29.1L24.2804 28.69L24.0504 28.36L23.7204 28.13L23.3104 28.05L22.9004 28.13L22.5704 28.36Z"
                  fill="white"
                />
              </svg>
              <h3>Python</h3>
            </div>

            {/* ReactJS */}
            <div className="mo-tech-card">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path
                  d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z"
                  fill="#61DAFB"
                />
                <path
                  d="M16.5441 11.3453C16.0553 11.3453 15.602 11.4548 15.2004 11.686C13.9453 12.4106 13.4676 14.1765 13.7207 16.375C11.6906 17.2551 10.4004 18.551 10.4004 20C10.4004 21.4491 11.6906 22.745 13.7207 23.625C13.4677 25.8235 13.9453 27.5895 15.2004 28.3141C15.6012 28.5453 16.0545 28.6547 16.5441 28.6547C17.5862 28.6547 18.7907 28.1317 20.0004 27.2344C21.2102 28.1317 22.4161 28.6547 23.4582 28.6547C23.947 28.6547 24.4004 28.5453 24.802 28.3141C26.057 27.5895 26.5348 25.8236 26.2816 23.625C28.311 22.745 29.6004 21.4488 29.6004 20C29.6004 18.551 28.3102 17.2551 26.2801 16.375C26.5331 14.1765 26.0555 12.4106 24.8004 11.686C24.3996 11.454 23.9462 11.3453 23.4566 11.3453C22.4145 11.3453 21.2101 11.8684 20.0004 12.7656C18.7906 11.8684 17.5859 11.3453 16.5441 11.3453ZM20.0004 18.4C19.1164 18.4 18.4004 19.116 18.4004 20C18.4004 20.884 19.1164 21.6 20.0004 21.6C20.8844 21.6 21.6004 20.884 21.6004 20C21.6004 19.116 20.8844 18.4 20.0004 18.4Z"
                  fill="white"
                />
              </svg>
              <h3>ReactJS</h3>
            </div>

            {/* Flutter */}
            <div className="mo-tech-card">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path
                  d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z"
                  fill="#54C5F8"
                />
                <path
                  d="M21.5039 10.001L11.5039 20.001L14.5872 23.0843L27.6673 10.001H21.5039ZM21.4985 19.1989L16.1233 24.6199L21.4956 29.9998H27.6842L22.2975 24.5999L27.6856 19.1998L21.4985 19.1989Z"
                  fill="white"
                />
              </svg>
              <h3>Flutter</h3>
            </div>
          </div>

          <div className="mo-trusted-wrap">
            <span className="mo-trusted-label">Trusted by companies</span>
            <div className="mo-trusted-logos">
              {TRUSTED_COMPANIES.map((brand) => (
                <span key={brand} className="mo-trusted-brand">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS (#FFFFFF) */}
      <section className="mo-how-section">
        <div className="mo-container">
          <div className="mo-how-header">
            <span className="mo-how-eyebrow">HOW IT WORKS</span>
            <h2 className="mo-how-title">
              A simple and transparent process to find your ideal developer.
            </h2>
          </div>

          <div className="mo-how-grid">
            {/* Step 1: Dark Blue Card */}
            <div className="mo-how-card mo-card-dark">
              <div className="mo-how-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path
                    d="M0 16C0 7.16344 7.16344 0 16 0H32C40.8366 0 48 7.16344 48 16V32C48 40.8366 40.8366 48 32 48H16C7.16344 48 0 40.8366 0 32V16Z"
                    fill="white"
                    fillOpacity="0.15"
                  />
                  <path
                    d="M33 20V32.9932C33 33.5501 32.5552 34 32.0066 34H15.9934C15.445 34 15 33.556 15 33.0082V14.9918C15 14.4553 15.4487 14 16.0022 14H26.9968L33 20ZM31 21H26V16H17V32H31V21Z"
                    fill="white"
                  />
                </svg>
              </div>
              <h3>Tell us your needs</h3>
              <p>
                Fill in your project requirements via our simple form — skills, timeline, and
                budget.
              </p>
            </div>

            {/* Step 2: Light Indigo Card */}
            <div className="mo-how-card mo-card-light">
              <div className="mo-how-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path
                    d="M0 16C0 7.16344 7.16344 0 16 0H32C40.8366 0 48 7.16344 48 16V32C48 40.8366 40.8366 48 32 48H16C7.16344 48 0 40.8366 0 32V16Z"
                    fill="#1B3A8C"
                  />
                  <path
                    d="M30.031 28.6168L34.3137 32.8995L32.8995 34.3137L28.6168 30.031C27.0769 31.263 25.124 32 23 32C18.032 32 14 27.968 14 23C14 18.032 18.032 14 23 14C27.968 14 32 18.032 32 23C32 25.124 31.263 27.0769 30.031 28.6168ZM28.0247 27.8748C29.2475 26.6146 30 24.8956 30 23C30 19.1325 26.8675 16 23 16C19.1325 16 16 19.1325 16 23C16 26.8675 19.1325 30 23 30C24.8956 30 26.6146 29.2475 27.8748 28.0247L28.0247 27.8748Z"
                    fill="white"
                  />
                </svg>
              </div>
              <h3>We find the best match</h3>
              <p>We match you with vetted developers that fit your top picks precisely.</p>
            </div>

            {/* Step 3: Dark Blue Card */}
            <div className="mo-how-card mo-card-dark">
              <div className="mo-how-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path
                    d="M0 16C0 7.16344 7.16344 0 16 0H32C40.8366 0 48 7.16344 48 16V32C48 40.8366 40.8366 48 32 48H16C7.16344 48 0 40.8366 0 32V16Z"
                    fill="white"
                    fillOpacity="0.15"
                  />
                  <path
                    d="M23.8611 14.3906C24.8495 13.7316 26.1336 13.718 27.1358 14.3557L31.291 16.9999H32.9998C33.5521 16.9999 33.9998 17.4477 33.9998 17.9999V26.9999C33.9998 27.5522 33.5521 27.9999 32.9998 27.9999H31.4801C31.5396 28.9472 31.0933 29.9102 30.1955 30.4489L25.1021 33.505C24.4591 33.8907 23.6609 33.8817 23.0314 33.4974C22.3311 34.1167 21.2531 34.1849 20.471 33.5704L15.3303 29.5312C14.5639 28.9291 14.3701 27.9003 14.7658 27.0847C14.2825 26.7057 14 26.1254 14 25.5109V18C14 17.4477 14.4477 17 15 17H19.9469L23.8611 14.3906Z"
                    fill="white"
                  />
                </svg>
              </div>
              <h3>Meet &amp; interview</h3>
              <p>Review profiles, check portfolios, and interview your favourite candidates.</p>
            </div>

            {/* Step 4: Light Indigo Card */}
            <div className="mo-how-card mo-card-light">
              <div className="mo-how-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path
                    d="M0 16C0 7.16344 7.16344 0 16 0H32C40.8366 0 48 7.16344 48 16V32C48 40.8366 40.8366 48 32 48H16C7.16344 48 0 40.8366 0 32V16Z"
                    fill="#1B3A8C"
                  />
                  <path
                    d="M27.5018 32.0048C26.8432 33.5841 25.5794 34.848 24 35.5066C22.4206 34.848 21.1568 33.5841 20.4982 32.0048H22.7575C23.0838 32.4934 23.5051 32.9171 24 33.248C24.4949 32.9171 24.9162 32.4934 25.2425 32.0048H27.5018ZM30 26.8095L32 29.0777V31.0048H16V29.0777L18 26.8095V21.0048C18 17.5215 20.5044 14.5582 24 13.46C27.4956 14.5582 30 17.5215 30 21.0048V26.8095ZM29.2692 29.0048L28 27.5653V21.0048C28 18.6869 26.4292 16.5743 24 15.5838C21.5708 16.5743 20 18.6869 20 21.0048V27.5653L18.7308 29.0048H29.2692ZM24 23.0048C22.8954 23.0048 22 22.1093 22 21.0048C22 19.9002 22.8954 19.0048 24 19.0048C25.1046 19.0048 26 19.9002 26 21.0048C26 22.1093 25.1046 23.0048 24 23.0048Z"
                    fill="white"
                  />
                </svg>
              </div>
              <h3>Start &amp; integrate</h3>
              <p>We handle the paperwork. You onboard the developer and kick off your project.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY COMPANIES CHOOSE MANTAB ONE (#EEF2FF) */}
      <section className="mo-why-section">
        <div className="mo-container">
          <h2 className="mo-why-title">Why companies choose Mantab One</h2>

          <div className="mo-why-grid">
            {/* 1 */}
            <div className="mo-why-item">
              <div className="mo-why-badge">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="20" fill="#1B3A8C" />
                  <path
                    d="M16.075 24.5V22.19H18.52V17.525H16.075V15.785C16.545 15.755 17.045 15.66 17.575 15.5C18.115 15.34 18.64 15.14 19.15 14.9C19.66 14.66 20.11 14.415 20.5 14.165H21.505V22.19H23.86V24.5H16.075Z"
                    fill="white"
                  />
                </svg>
              </div>
              <h3>Tell us your needs</h3>
              <p>Flexible and direct — no long wait times, no bureaucracy.</p>
            </div>

            {/* 2 */}
            <div className="mo-why-item">
              <div className="mo-why-badge">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="20" fill="#1B3A8C" />
                  <path
                    d="M15.235 24.5V23.78C15.235 23.36 15.325 22.965 15.505 22.595C15.685 22.215 15.925 21.86 16.225 21.53C16.535 21.19 16.875 20.87 17.245 20.57C17.615 20.26 17.995 19.96 18.385 19.67C18.785 19.37 19.16 19.095 19.51 18.845C19.86 18.595 20.145 18.34 20.365 18.08C20.585 17.82 20.695 17.53 20.695 17.21C20.695 17.02 20.65 16.845 20.56 16.685C20.47 16.515 20.33 16.38 20.14 16.28C19.96 16.17 19.715 16.115 19.405 16.115C19.095 16.115 18.83 16.175 18.61 16.295C18.4 16.415 18.235 16.585 18.115 16.805C18.005 17.015 17.95 17.255 17.95 17.525V17.825H15.28C15.265 16.785 15.425 16.17 15.745 15.65C16.075 15.13 16.565 14.725 17.215 14.435C17.875 14.145 18.7 14 19.69 14C20.3 14 20.85 14.075 21.34 14.225C21.83 14.365 22.245 14.575 22.585 14.855C22.935 15.125 23.2 15.45 23.38 15.83C23.57 16.21 23.665 16.635 23.665 17.105C23.665 17.565 23.58 17.98 23.41 18.35C23.24 18.72 23 19.065 22.69 19.385C22.38 19.705 22.025 20.015 21.625 20.315C21.225 20.615 20.79 20.92 20.32 21.23C20.08 21.39 19.885 21.525 19.735 21.635C19.585 21.735 19.475 21.81 19.405 21.86L19.27 21.965H23.785V24.5H15.235Z"
                    fill="white"
                  />
                </svg>
              </div>
              <h3>We match you</h3>
              <p>Technically screened developers that fit your project precisely.</p>
            </div>

            {/* 3 */}
            <div className="mo-why-item">
              <div className="mo-why-badge">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="20" fill="#1B3A8C" />
                  <path
                    d="M19.525 24.68C18.525 24.68 17.7 24.545 17.05 24.275C16.4 24.005 15.915 23.645 15.595 23.195C15.285 22.745 15.13 22.25 15.13 21.71V21.395H17.77V21.68C17.77 21.94 17.895 22.165 18.145 22.355C18.405 22.535 18.8 22.625 19.33 22.625C19.91 22.625 20.315 22.495 20.545 22.235C20.775 21.975 20.89 21.645 20.89 21.245C20.89 20.995 20.84 20.795 20.74 20.645C20.65 20.485 20.525 20.365 20.365 20.285C20.215 20.205 20.04 20.165 19.84 20.165H18.745V18.32H19.6C19.8 18.32 19.975 18.28 20.125 18.2C20.285 18.12 20.41 18 20.5 17.84C20.6 17.68 20.65 17.48 20.65 17.24C20.65 17.03 20.6 16.835 20.5 16.655C20.4 16.475 20.25 16.33 20.05 16.22C19.86 16.11 19.62 16.055 19.33 16.055C19.08 16.055 18.85 16.105 18.64 16.205C18.43 16.295 18.265 16.415 18.145 16.565C18.025 16.715 17.965 16.875 17.965 17.045V17.195H15.46V16.82C15.46 16.3 15.62 15.83 15.94 15.41C16.26 14.98 16.725 14.64 17.335 14.39C17.955 14.13 18.705 14 19.585 14C20.435 14 21.155 14.13 21.745 14.39C22.345 14.64 22.8 14.98 23.11 15.41C23.42 15.83 23.575 16.295 23.575 16.805C23.575 17.145 23.51 17.47 23.38 17.78C23.26 18.09 23.085 18.36 22.855 18.59C22.635 18.81 22.375 18.975 22.075 19.085V19.145C22.645 19.325 23.085 19.64 23.395 20.09C23.715 20.53 23.875 21.065 23.875 21.695C23.855 22.245 23.685 22.745 23.365 23.195C23.055 23.645 22.585 24.005 21.955 24.275C21.325 24.545 20.515 24.68 19.525 24.68Z"
                    fill="white"
                  />
                </svg>
              </div>
              <h3>Guaranteed continuity</h3>
              <p>A qualified replacement always on standby — no interruptions.</p>
            </div>

            {/* 4 */}
            <div className="mo-why-item">
              <div className="mo-why-badge">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="20" fill="#1B3A8C" />
                  <path
                    d="M19.87 24.5V22.385H14.845V20.15C15.175 19.67 15.515 19.105 15.865 18.455C16.225 17.795 16.57 17.085 16.9 16.325C17.23 15.555 17.505 14.78 17.725 14H20.665C20.625 14.33 20.515 14.705 20.335 15.125C20.155 15.545 19.93 15.99 19.66 16.46C19.39 16.93 19.095 17.395 18.775 17.855C18.455 18.305 18.135 18.735 17.815 19.145C17.495 19.545 17.19 19.89 16.9 20.18H19.87V18.035C20 17.855 20.14 17.635 20.29 17.375C20.45 17.115 20.61 16.845 20.77 16.565C20.93 16.275 21.07 15.995 21.19 15.725C21.31 15.445 21.395 15.2 21.445 14.99H22.72V20.18H24.16V22.385H22.72V24.5H19.87Z"
                    fill="white"
                  />
                </svg>
              </div>
              <h3>Start right away</h3>
              <p>Transparent day rate — no hidden costs or surprises.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OUR ROLE (#FFFFFF, 2-COLUMN SPLIT) */}
      <section className="mo-role-section">
        <div className="mo-container">
          <div className="mo-role-split">
            <div>
              <span className="mo-role-eyebrow">Our Role</span>
              <h2 className="mo-role-title">From talent pool to commercial platform.</h2>
              <p className="mo-role-desc">
                Mantab One had a strong developer network and the operational infrastructure to
                deliver. The challenge: turning an outstaffing operation into a recognisable
                commercial brand trusted by Dutch businesses.
              </p>
            </div>

            <div className="mo-role-list">
              {ROLE_PILLARS.map((item) => (
                <div key={item.num} className="mo-role-item">
                  <span className="mo-role-num">{item.num}</span>
                  <div className="mo-role-content">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA BANNER (#1B3A8C) */}
      <section className="mo-cta-banner">
        <div className="mo-container">
          <div className="mo-cta-inner">
            <span className="mo-cta-eyebrow">Experience the Mantab One advantage</span>
            <h2 className="mo-cta-title">Ready to supercharge your dev team?</h2>
            <p className="mo-cta-desc">
              Discover how Mantab One can scale your engineering team flexibly — saving costs while
              guaranteeing continuity and quality.
            </p>

            <div className="mo-cta-actions">
              <a
                href="https://mantab.one"
                target="_blank"
                rel="noopener noreferrer"
                className="mo-btn-white"
              >
                <span>Visit mantab.one</span>
                <ArrowUpRight size={16} />
              </a>

              <button
                type="button"
                className="mo-btn-cta-outline"
                onClick={onOpenInquiryModal}
              >
                <span>Work with Us</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. OTHER PROJECTS BAR (#EEF2FF) */}
      <section className="mo-other-bar">
        <div className="mo-container">
          <div className="mo-other-inner">
            <h2 className="mo-other-heading">Other Projects</h2>

            <div className="mo-other-pills-grid">
              {OTHER_PROJECTS.map((proj) => (
                <button
                  key={proj.id}
                  type="button"
                  className="mo-other-pill"
                  onClick={() => onSelectProjectSlug && onSelectProjectSlug(proj.id)}
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

