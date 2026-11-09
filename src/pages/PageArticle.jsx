import { useState, useMemo } from 'react';
import { 
  ArrowUpRight, 
  ArrowLeft, 
  ArrowRight, 
  Clock, 
  Calendar, 
  Sparkles, 
  TrendingUp, 
  Layers, 
  Search,
  Share2,
  Bookmark
} from 'lucide-react';

export const ARTICLES_DATA = [
  {
    id: 'pitch-to-boardroom',
    num: '01',
    category: 'Leadership & Sports',
    tag: 'Popular',
    date: 'Nov 04, 2026',
    readTime: '5 MIN READ',
    featured: true,
    views: '14.2k reads',
    image: '/sergio-standing.png',
    title: 'From the Stadium to the Boardroom: Why Elite Football Discipline Translates to Business',
    excerpt:
      'What competing across European, Australian, and Indonesian stadiums taught me about preparation, adaptability under extreme pressure, and leading high-performance teams beyond sport.',
    sections: [
      {
        heading: '1. Preparation Happens Long Before Kickoff',
        body: 'In professional football, ninety minutes under stadium lights is only the visible outcome of thousands of hours of structured preparation. Transitioning into entrepreneurship and business leadership requires the exact same respect for fundamentals. Strategy without daily operational discipline rarely survives real-world pressure.'
      },
      {
        heading: '2. Adaptability Across Cultures Is a Competitive Advantage',
        body: 'Moving from the tactical structure of Dutch football to the physical intensity of Australia and the extraordinary passion of Indonesian stadiums forced me to listen, observe, and adapt quickly. In international business, leaders who respect local nuance while maintaining global standards build the strongest partnerships.'
      },
      {
        heading: '3. Individual Talent Wins Moments; Cohesive Teams Build Legacies',
        body: 'Whether representing the Indonesian National Team, playing for Persib Bandung, or building software teams with Mantab One, the principle remains unchanged: clarity of role, mutual trust, and shared accountability turn capable individuals into an unstoppable unit.'
      }
    ],
    takeaway:
      'Success is not defined by where the journey begins, but by what we continue to build along the way.'
  },
  {
    id: 'remote-engineering-teams',
    num: '02',
    category: 'Technology & Remote Teams',
    tag: 'New',
    date: 'Nov 08, 2026',
    readTime: '6 MIN READ',
    featured: false,
    views: '9.8k reads',
    image: 'https://oliemuller.nl/wp-content/uploads/2026/09/Image-Mantab-One-developer-team.jpg',
    title: 'Building Dedicated Remote Development Teams Across Borders with Mantab One',
    excerpt:
      'How modern digital organizations can move beyond transactional outsourcing to build cohesive, long-term remote software engineering teams that feel like an organic extension of headquarters.',
    sections: [
      {
        heading: '1. Moving Beyond Short-Term Outsourcing',
        body: 'Traditional outsourcing often fails because it treats software development as a series of isolated tickets rather than an ongoing product journey. At Mantab One, our focus is on dedicated remote development teams—engineers who understand the business context, product vision, and architectural standards of our partners.'
      },
      {
        heading: '2. Bridging European & Southeast Asian Engineering Cultures',
        body: 'Indonesia possesses a deep, rapidly growing pool of talented software engineers. When paired with clear communication frameworks and international engineering governance, remote teams collaborate seamlessly with European and Australian counterparts.'
      },
      {
        heading: '3. Retention Through Purpose and Growth',
        body: 'Great software is built by teams that stay together. Investing in continuous learning, transparent feedback, and mutual respect ensures engineering continuity and compounding technical knowledge.'
      }
    ],
    takeaway:
      'A great remote team is defined not by geography, but by shared standards, clear communication, and long-term ownership.'
  },
  {
    id: 'proptech-flexible-workspaces',
    num: '03',
    category: 'PropTech & Real Estate',
    tag: 'Popular',
    date: 'Oct 28, 2026',
    readTime: '5 MIN READ',
    featured: false,
    views: '11.4k reads',
    image: 'https://oliemuller.nl/wp-content/uploads/2026/09/Image-Modern-flexible-office-space.png',
    title: 'The Shift to Agile Workspaces: Lessons from Regal Estate Group & Kantoorzoeken',
    excerpt:
      'Commercial real estate is abandoning rigid 10-year commitments. Why transparent, AI-assisted flexible workspace platforms are becoming the global baseline for agile enterprises.',
    sections: [
      {
        heading: '1. The Death of the Rigid 10-Year Commercial Lease',
        body: 'The traditional model of committing companies to multi-year rigid leases no longer reflects operational realities. Fast-scaling organizations need physical footprints that expand and contract as their headcount and regional strategies evolve.'
      },
      {
        heading: '2. Transparency Replaces Broker Opacity',
        body: 'Platforms like Regal Estate Group and Kantoorzoeken.nl demonstrate that transparent, all-inclusive pricing combined with 24/7 AI concierge intelligence accelerates deal velocity and builds authentic trust with tenants.'
      },
      {
        heading: '3. Spatial Intelligence as a Talent Magnet',
        body: 'Selecting office locations is no longer just about square meters; it is about commute catchment zones, proximity to competitive talent pools, and communal hospitality environments that draw teams together.'
      }
    ],
    takeaway:
      'Flexibility is not a compromise—it is the ultimate strategic hedge for modern enterprise growth.'
  },
  {
    id: 'ai-visibility-geo-era',
    num: '04',
    category: 'AI & Digital Growth',
    tag: 'New',
    date: 'Nov 02, 2026',
    readTime: '6 MIN READ',
    featured: false,
    views: '8.6k reads',
    image: 'https://oliemuller.nl/wp-content/uploads/2026/09/synergizeflow-hero-1.png',
    title: 'Beyond Traditional SEO: Optimizing Brands for AI Search & Generative Engine Visibility (GEO)',
    excerpt:
      'People no longer just browse blue links; they ask AI models directly. How SynergizeFlow and multi-agent platforms position your brand to be recommended by ChatGPT, Gemini, and Perplexity.',
    sections: [
      {
        heading: '1. The Paradigm Shift: From Search Queries to Conversational Answers',
        body: 'Traditional search engine optimization centered around keyword volume and backlink stuffing. In the generative era, search engines and LLMs summarize answers and cite trusted entities rather than sending raw traffic down endless links.'
      },
      {
        heading: '2. Entity Authority Over Keyword Matching',
        body: 'To appear in AI answers, your company must build verifiable topical authority. Connected content systems where strategy, articles, product data, and social narratives reinforce each other win the recommendation algorithms.'
      },
      {
        heading: '3. Autonomous Agents as the New Marketing Engine',
        body: 'By leveraging specialized AI marketing agents working in tandem—from strategy and drafting to technical metadata—companies compound their digital presence without linear headcount expansion.'
      }
    ],
    takeaway:
      'In the AI era, you are not competing for clicks; you are competing for authoritative entity recognition.'
  },
  {
    id: 'bali-lombok-cross-border',
    num: '05',
    category: 'Investment & Cross-Border',
    tag: 'Popular',
    date: 'Oct 19, 2026',
    readTime: '5 MIN READ',
    featured: false,
    views: '12.8k reads',
    image: 'https://oliemuller.nl/wp-content/uploads/2026/09/Image-Office-consultation.jpg',
    title: 'Strategic Real Estate in Indonesia: Why European Investors Are Looking at Bali & Lombok',
    excerpt:
      'Navigating cross-border legal structures, realistic 9%–24% annual returns, and bilateral investment conduits between the Netherlands, Belgium, and Southeast Asia.',
    sections: [
      {
        heading: '1. Sustainable Yield Beyond Saturated Markets',
        body: 'With European real estate yields tightening under interest rate pressures, disciplined cross-border investors are discovering the extraordinary growth trajectory of premium hospitality assets in emerging Indonesian destinations.'
      },
      {
        heading: '2. Legal Clarity and Local Administrative Security',
        body: 'Through Indovest Group, the emphasis has always been on bulletproof legal structures, government alignment, and complete risk transparency—ensuring international investors hold rock-solid foundations.'
      },
      {
        heading: '3. Cultural Connection as an Economic Multiplier',
        body: 'Cross-border ventures thrive when there is mutual cultural respect. Having deep family ties and sporting roots in Indonesia allows our group to bridge local execution with European fiduciary standards.'
      }
    ],
    takeaway:
      'High returns require disciplined local navigation, uncompromising legal compliance, and authentic cultural roots.'
  },
  {
    id: 'europe-indonesia-corridor',
    num: '06',
    category: 'Global Connections',
    tag: 'Editorial',
    date: 'Oct 12, 2026',
    readTime: '4 MIN READ',
    featured: false,
    views: '7.4k reads',
    image: 'https://oliemuller.nl/wp-content/uploads/2026/09/Image-Local-Business.jpg',
    title: 'Bridging Markets: Unlocking Bilateral Opportunities Between Europe, Australia & Indonesia',
    excerpt:
      'Why trust, cultural fluency, and authentic relationships remain the most important currency when connecting international businesses across three continents.',
    sections: [
      {
        heading: '1. Seeing Opportunity Through Multiple Lenses',
        body: 'Having lived and worked across The Netherlands, Australia, and Indonesia, I have seen firsthand how much untapped potential exists between these markets. European enterprises bring structured technology and capital; Indonesia offers dynamic scale, talent, and ambition.'
      },
      {
        heading: '2. Relationships Before Transactions',
        body: 'In Southeast Asia, sustainable business is built on personal trust and long-term commitment. Acting as a global connector means bringing the right people to the table and ensuring both sides genuinely understand each other’s priorities.'
      },
      {
        heading: '3. Creating Shared Value Across Borders',
        body: 'The most enduring international collaborations are never one-sided. When technology transfer, talent development, and commercial ambition align, every market grows stronger together.'
      }
    ],
    takeaway:
      'Borders define maps, not opportunities—when connected with trust, cultural understanding, and shared ambition.'
  },
  {
    id: 'learn-create-share',
    num: '07',
    category: 'Philosophy & Life',
    tag: 'Popular',
    date: 'Sep 29, 2026',
    readTime: '4 MIN READ',
    featured: false,
    views: '16.5k reads',
    image: '/sergio-seated.png',
    title: 'Learn. Create. Share. — A Personal Framework for Continuous Evolution',
    excerpt:
      'Reflections on reinventing yourself after a career in professional sport and why curiosity, humility, and generous knowledge-sharing are the ultimate drivers of lifelong fulfillment.',
    sections: [
      {
        heading: '1. Learn: The Courage to Be a Beginner Again',
        body: 'Stepping off the pitch meant entering rooms where my past goals didn’t score points automatically. Embracing the mindset of a lifelong student allowed me to study technology, entrepreneurship, and leadership from the ground up.'
      },
      {
        heading: '2. Create: Turning Vision into Tangible Value',
        body: 'Learning only matters when applied. Through entrepreneurship and associated ventures like Mantab One, the goal is to build real teams, real software solutions, and real cross-border bridges.'
      },
      {
        heading: '3. Share: Elevating Others Along the Way',
        body: 'Every milestone is more meaningful when shared. Opening doors for emerging engineers, founders, and athletes ensures the journey creates a ripple effect far beyond one individual career.'
      }
    ],
    takeaway:
      'Learn continuously. Create purposefully. Share generously.'
  },
  {
    id: 'premium-commerce-drankshop',
    num: '08',
    category: 'Commerce & Brand Building',
    tag: 'Editorial',
    date: 'Sep 15, 2026',
    readTime: '5 MIN READ',
    featured: false,
    views: '6.9k reads',
    image: 'https://oliemuller.nl/wp-content/uploads/2026/09/Image-Drankshop-premium-spirits.png',
    title: 'Crafting Brand Equity: The Architecture Behind Drankshop’s "Puur. Vers. Compromisloos."',
    excerpt:
      'Building a premium consumer spirits brand in the Netherlands through disciplined 7-SKU product differentiation, 0.0% botanical spirits, and multi-channel wholesale expansion.',
    sections: [
      {
        heading: '1. Brand Voice as the First Barrier to Entry',
        body: 'The beverage market is crowded with generic labels. Drankshop established immediate distinction through an uncompromising standard of purity, bespoke bottle aesthetics, and an authentic Dutch craft heritage.'
      },
      {
        heading: '2. The 0.0% Revolution Is Here to Stay',
        body: 'Mindful consumption is not a passing fad; it is a structural cultural shift. Positioning alcohol-free botanical spirits alongside craft gins allowed the brand to capture modern lifestyle venues without compromising taste.'
      },
      {
        heading: '3. Multi-Channel Commercial Distribution',
        body: 'A healthy D2C margin is essential, but true compounding brand value occurs when luxury hospitality and specialty boutique retailers become organic ambassadors for the brand.'
      }
    ],
    takeaway:
      'Uncompromising product quality paired with distinct brand storytelling always outlasts transient marketing trends.'
  }
];

const ARTICLE_TABS = [
  { id: 'all', label: 'All Articles' },
  { id: 'popular', label: 'Popular Insights' },
  { id: 'new', label: 'Latest / New' },
  { id: 'leadership', label: 'Leadership & Sports' },
  { id: 'tech', label: 'Tech & AI' },
  { id: 'ventures', label: 'Cross-Border & Ventures' }
];

export default function PageArticle({ onOpenInquiryModal }) {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticleId, setSelectedArticleId] = useState(null);

  const selectedArticle = ARTICLES_DATA.find((a) => a.id === selectedArticleId);

  // Grouped datasets
  const popularArticles = useMemo(
    () => ARTICLES_DATA.filter((a) => a.tag === 'Popular'),
    []
  );

  const newArticles = useMemo(
    () => ARTICLES_DATA.filter((a) => a.tag === 'New'),
    []
  );

  const featuredArticle = ARTICLES_DATA[0];

  // Tab Filtering & Search
  const filteredArticles = useMemo(() => {
    return ARTICLES_DATA.filter((item) => {
      // Category / Tab filter
      let matchesTab = true;
      if (activeTab === 'popular') matchesTab = item.tag === 'Popular';
      else if (activeTab === 'new') matchesTab = item.tag === 'New';
      else if (activeTab === 'leadership') matchesTab = item.category.includes('Leadership') || item.category.includes('Philosophy');
      else if (activeTab === 'tech') matchesTab = item.category.includes('Technology') || item.category.includes('AI');
      else if (activeTab === 'ventures') matchesTab = item.category.includes('PropTech') || item.category.includes('Investment') || item.category.includes('Commerce') || item.category.includes('Global');

      // Search text query
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.excerpt.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);

      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  const handleOpenArticle = (id) => {
    setSelectedArticleId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // FULL EDITORIAL READER VIEW
  if (selectedArticle) {
    const currentIndex = ARTICLES_DATA.findIndex((a) => a.id === selectedArticle.id);
    const nextArticle = ARTICLES_DATA[(currentIndex + 1) % ARTICLES_DATA.length];
    const prevArticle = ARTICLES_DATA[(currentIndex - 1 + ARTICLES_DATA.length) % ARTICLES_DATA.length];

    return (
      <div className="dedicated-page">
        <section className="page-hero-section sheet-white article-reader-section">
          <div className="sheet-inner-container" style={{ maxWidth: '960px' }}>
            {/* Top Bar with Return & Meta */}
            <div className="sheet-top-bar">
              <button
                type="button"
                className="page-back-link"
                onClick={() => setSelectedArticleId(null)}
              >
                <ArrowLeft size={16} />
                <span>BACK TO ARTICLES</span>
              </button>
              <div className="article-meta-badges">
                <span className="article-pill-tag">{selectedArticle.category}</span>
                <span className="clean-label-muted">{selectedArticle.readTime}</span>
              </div>
            </div>

            {/* Headline Block */}
            <div className="article-reader-header">
              <div className="article-date-row">
                <span className="article-publish-date">
                  <Calendar size={13} />
                  {selectedArticle.date}
                </span>
                <span>·</span>
                <span className="article-views-count">
                  <TrendingUp size={13} />
                  {selectedArticle.views}
                </span>
                <span>·</span>
                <span>By Sergio van Dijk</span>
              </div>

              <h1 className="page-display-title article-reader-title">
                {selectedArticle.title}
              </h1>

              <p className="page-lead-paragraph article-reader-lead">
                {selectedArticle.excerpt}
              </p>
            </div>

            {/* Featured Article Cover Image */}
            <div className="article-reader-cover-wrap">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="article-reader-cover-img"
              />
              <div className="article-reader-cover-caption">
                <span>ESSAY {selectedArticle.num} / 08 · SERGIOVAN DIJK.COM</span>
                <span>{selectedArticle.category.toUpperCase()}</span>
              </div>
            </div>

            {/* Article Body Sections */}
            <div className="page-article-reader-body">
              {selectedArticle.sections.map((sec, idx) => (
                <div key={idx} className="page-article-section-block">
                  <h3>{sec.heading}</h3>
                  <p>{sec.body}</p>
                </div>
              ))}
            </div>

            {/* Key Takeaway Pullquote */}
            <blockquote className="sheet-editorial-quote article-pullquote">
              <Sparkles size={20} className="article-pullquote-icon" />
              <span>&ldquo;{selectedArticle.takeaway}&rdquo;</span>
            </blockquote>

            {/* Article Footer & Prev/Next Switcher */}
            <div className="article-reader-nav-footer">
              <div 
                className="article-nav-prev"
                onClick={() => handleOpenArticle(prevArticle.id)}
              >
                <span className="clean-label-muted">PREVIOUS ESSAY</span>
                <h4>← {prevArticle.title}</h4>
              </div>

              <div 
                className="article-nav-next"
                onClick={() => handleOpenArticle(nextArticle.id)}
              >
                <span className="clean-label-muted">NEXT ESSAY</span>
                <h4>{nextArticle.title} →</h4>
              </div>
            </div>

            {/* Back Button & Inquiry */}
            <div className="article-reader-bottom-cta sheet-warm-gray">
              <div>
                <span className="clean-label">EXPLORE PARTNERSHIPS</span>
                <h3>Have thoughts or interested in a collaboration?</h3>
                <p>Let&apos;s discuss speaking engagements, strategic advisory, or venture opportunities.</p>
              </div>
              <button className="btn-primary" onClick={onOpenInquiryModal}>
                <span>Get in Touch</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // DEFAULT EDITORIAL JOURNAL OVERVIEW
  return (
    <div className="dedicated-page">
      {/* 1. EDITORIAL HEADER & FILTER BAR */}
      <section className="page-hero-section sheet-warm-gray article-hero-head">
        <div className="sheet-inner-container">
          <div className="sheet-top-bar">
            <span className="clean-label">05 — EDITORIAL PERSPECTIVES &amp; ARTICLES</span>
            <span className="clean-label-muted">LEARN · CREATE · SHARE · 8 ESSAYS</span>
          </div>

          <div className="sheet-header-grid" style={{ marginBottom: '2.5rem' }}>
            <div>
              <div className="section-tag">
                <span className="section-tag-dot" />
                <span>ESSAYS &amp; STRATEGIC DISPATCHES</span>
              </div>
              <h1 className="page-display-title" style={{ marginBottom: 0 }}>
                Perspectives Beyond the{' '}
                <span className="highlight">Boundaries.</span>
              </h1>
            </div>

            <div>
              <p className="page-lead-paragraph" style={{ marginBottom: '1.5rem' }}>
                Reflections and field notes by Sergio van Dijk on leadership, building remote
                software engineering teams with Mantab One, PropTech marketplaces, AI visibility,
                and cross-border European-Indonesian ventures.
              </p>

              {/* Search Bar Input */}
              <div className="article-search-bar">
                <Search size={16} className="article-search-icon" />
                <input
                  type="text"
                  placeholder="Search articles by title, topic, or keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="article-search-input"
                />
                {searchQuery && (
                  <button 
                    type="button" 
                    className="article-search-clear"
                    onClick={() => setSearchQuery('')}
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Interactive Editorial Tab Navigation */}
          <div className="article-tabs-scroller">
            {ARTICLE_TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`article-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.id === 'popular' && <TrendingUp size={13} style={{ marginRight: '5px' }} />}
                {tab.id === 'new' && <Sparkles size={13} style={{ marginRight: '5px' }} />}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. SPOTLIGHT HERO: FEATURED ESSAY (CARD WITH IMAGE) */}
      {activeTab === 'all' && !searchQuery && (
        <section className="page-content-section sheet-white" style={{ paddingBottom: '3rem' }}>
          <div className="sheet-inner-container">
            <div className="sheet-top-bar" style={{ marginBottom: '1.5rem' }}>
              <span className="clean-label">EDITOR&apos;S CHOICE</span>
              <span className="clean-label-muted">FEATURED ESSAY OF THE MONTH</span>
            </div>

            <div
              className="article-spotlight-card"
              onClick={() => handleOpenArticle(featuredArticle.id)}
            >
              <div className="article-spotlight-visual">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="article-spotlight-img"
                />
                <span className="article-badge-floating">
                  <Sparkles size={12} />
                  Featured
                </span>
              </div>

              <div className="article-spotlight-body">
                <div className="article-card-meta">
                  <span className="article-pill-tag">{featuredArticle.category}</span>
                  <span className="article-card-readtime">
                    <Clock size={12} />
                    {featuredArticle.readTime}
                  </span>
                  <span className="article-card-views">
                    <TrendingUp size={12} />
                    {featuredArticle.views}
                  </span>
                </div>

                <h2 className="article-spotlight-title">
                  {featuredArticle.title}
                </h2>

                <p className="article-spotlight-excerpt">
                  {featuredArticle.excerpt}
                </p>

                <div className="article-spotlight-footer">
                  <div className="article-author-info">
                    <img 
                      src="/sergio-standing.png" 
                      alt="Sergio van Dijk" 
                      className="article-author-avatar"
                    />
                    <div>
                      <span className="article-author-name">Sergio van Dijk</span>
                      <span className="article-author-date">{featuredArticle.date}</span>
                    </div>
                  </div>

                  <span className="article-read-btn">
                    <span>Read Essay</span>
                    <ArrowUpRight size={15} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. POPULAR & NEW HORIZONTAL STRIP (WHEN ON ALL TAB) */}
      {activeTab === 'all' && !searchQuery && (
        <section className="page-content-section sheet-warm-gray" style={{ padding: '4rem 0' }}>
          <div className="sheet-inner-container">
            <div className="article-section-header">
              <div>
                <div className="clean-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <TrendingUp size={14} color="#0064C2" />
                  <span>MOST READ &amp; POPULAR INSIGHTS</span>
                </div>
                <h3 className="section-headline" style={{ fontSize: '1.75rem', marginTop: '0.25rem', marginBottom: 0 }}>
                  High-Impact Perspectives
                </h3>
              </div>
              <button 
                type="button" 
                className="article-inline-filter-link"
                onClick={() => setActiveTab('popular')}
              >
                <span>View all popular ({popularArticles.length})</span>
                <ArrowRight size={14} />
              </button>
            </div>

            <div className="article-tri-grid">
              {popularArticles.slice(0, 3).map((art) => (
                <div
                  key={art.id}
                  className="article-visual-card sheet-white"
                  onClick={() => handleOpenArticle(art.id)}
                >
                  <div className="article-card-thumb-wrap">
                    <img
                      src={art.image}
                      alt={art.title}
                      className="article-card-thumb"
                      loading="lazy"
                    />
                    <span className="article-badge-tag tag-popular">
                      <TrendingUp size={11} />
                      Popular
                    </span>
                  </div>

                  <div className="article-card-content">
                    <div className="article-card-meta">
                      <span className="article-pill-tag">{art.category}</span>
                      <span className="article-card-readtime">
                        <Clock size={12} />
                        {art.readTime}
                      </span>
                    </div>

                    <h4 className="article-card-title">{art.title}</h4>

                    <p className="article-card-desc">{art.excerpt}</p>

                    <div className="article-card-footer">
                      <span className="article-card-date">{art.date}</span>
                      <span className="article-card-link">
                        <span>Read</span>
                        <ArrowUpRight size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. MAIN ARTICLE ARCHIVE: FILTERED RESULTS GRID */}
      <section className="page-content-section sheet-white">
        <div className="sheet-inner-container">
          <div className="article-section-header" style={{ marginBottom: '2.5rem' }}>
            <div>
              <span className="clean-label">
                {activeTab === 'all'
                  ? 'FULL EDITORIAL CATALOG'
                  : activeTab === 'popular'
                  ? 'MOST POPULAR ESSAYS'
                  : activeTab === 'new'
                  ? 'RECENTLY PUBLISHED'
                  : 'CATEGORY ARCHIVE'}
              </span>
              <h3 className="section-headline" style={{ fontSize: '1.85rem', marginTop: '0.25rem', marginBottom: 0 }}>
                {searchQuery
                  ? `Search Results for "${searchQuery}" (${filteredArticles.length})`
                  : activeTab === 'all'
                  ? `All Published Articles (${filteredArticles.length})`
                  : `${ARTICLE_TABS.find((t) => t.id === activeTab)?.label} (${filteredArticles.length})`}
              </h3>
            </div>

            <span className="clean-label-muted">
              SHOWING {filteredArticles.length} OF {ARTICLES_DATA.length} ESSAYS
            </span>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="article-empty-state sheet-warm-gray">
              <Layers size={36} style={{ color: 'var(--brand-taupe)', marginBottom: '1rem' }} />
              <h4>No matching articles found</h4>
              <p>Try searching for a different keyword or switch to another category tab.</p>
              <button
                type="button"
                className="btn-secondary"
                onClick={() => {
                  setSearchQuery('');
                  setActiveTab('all');
                }}
              >
                <span>Reset Filters</span>
              </button>
            </div>
          ) : (
            <div className="article-magazine-grid">
              {filteredArticles.map((article) => (
                <div
                  key={article.id}
                  className="article-magazine-item"
                  onClick={() => handleOpenArticle(article.id)}
                >
                  <div className="article-magazine-thumb-wrap">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="article-magazine-thumb"
                      loading="lazy"
                    />
                    {article.tag && (
                      <span
                        className={`article-badge-tag ${
                          article.tag === 'Popular'
                            ? 'tag-popular'
                            : article.tag === 'New'
                            ? 'tag-new'
                            : 'tag-editorial'
                        }`}
                      >
                        {article.tag === 'Popular' && <TrendingUp size={11} />}
                        {article.tag === 'New' && <Sparkles size={11} />}
                        {article.tag}
                      </span>
                    )}
                  </div>

                  <div className="article-magazine-content">
                    <div className="article-card-meta">
                      <span className="article-pill-tag">{article.category}</span>
                      <span className="article-card-readtime">
                        <Clock size={12} />
                        {article.readTime}
                      </span>
                    </div>

                    <h4 className="article-magazine-title">{article.title}</h4>

                    <p className="article-magazine-desc">{article.excerpt}</p>

                    <div className="article-magazine-footer">
                      <span className="article-card-date">{article.date}</span>
                      <span className="article-card-link">
                        <span>Read Essay</span>
                        <ArrowUpRight size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Bottom Newsletter / Speaking Advisory Banner */}
          <div className="article-newsletter-panel sheet-warm-gray">
            <div className="article-newsletter-left">
              <span className="clean-label-muted">THOUGHT LEADERSHIP &amp; SPEAKING</span>
              <h3>Interested in inviting Sergio van Dijk for an executive keynote or podcast?</h3>
              <p>
                From elite professional football discipline to scaling 8 cross-border ventures,
                Sergio shares keynotes and insights for international corporate forums.
              </p>
            </div>
            <button className="btn-primary" onClick={onOpenInquiryModal}>
              <span>Request Media / Keynote</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
