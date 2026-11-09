import { useState, useEffect } from 'react';
import { assetUrl } from './utils/assetUrl';
import Navbar from './components/Navbar';
import VideoBackground from './components/VideoBackground';
import SectionHero from './components/SectionHero';
import SectionPillars from './components/SectionPillars';
import SectionVelocityOverlap from './components/SectionVelocityOverlap';
import SectionScrollVideo from './components/SectionScrollVideo';
import SectionContact from './components/SectionContact';
import InquiryModal from './components/InquiryModal';

// Dedicated Pages
import PageAbout from './pages/PageAbout';
import PageExpertise from './pages/PageExpertise';
import PageProjects from './pages/PageProjects';
import PageArticle from './pages/PageArticle';
import PageContact from './pages/PageContact';

export default function App() {
  const [duration, setDuration] = useState(10);
  const [isMuted] = useState(true);

  // European Language State (Default: 'en' English; supports 'nl', 'de', 'fr', 'es', 'it', 'pt')
  const [language, setLanguage] = useState('en');

  // Appearance — Default to Ultra-Clean Pure White (#FFFFFF) Light Style
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const overlayTheme = isDarkTheme ? 'cinematic' : 'studio';
  const overlayOpacity = 0.96;

  // Multi-Page Navigation State: 'home' | 'about' | 'expertise' | 'projects' | 'article' | 'contact'
  const [activePage, setActivePage] = useState('home');
  const [selectedProjectSlug, setSelectedProjectSlug] = useState(null);

  // Inquiry Modal
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  // Sync theme attribute to HTML element
  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [isDarkTheme]);

  // Switch European language & sync full-page translation
  const handleSelectLanguage = (langCode) => {
    setLanguage(langCode);
    document.documentElement.setAttribute('lang', langCode);

    const applyTranslation = () => {
      const combo = document.querySelector('.goog-te-combo');
      if (combo) {
        combo.value = langCode;
        combo.dispatchEvent(new Event('change'));
        return true;
      }
      return false;
    };

    if (!applyTranslation()) {
      // Set googtrans cookie as fallback and retry once script is ready
      document.cookie = `googtrans=/en/${langCode}; path=/`;
      setTimeout(applyTranslation, 400);
    }
  };

  // Select dedicated page and scroll to top
  const handleSelectPage = (pageId) => {
    setActivePage(pageId);
    if (pageId !== 'projects') {
      setSelectedProjectSlug(null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Select a specific project from Navbar dropdown or Projects page
  const handleSelectProject = (projectSlug) => {
    setActivePage('projects');
    setSelectedProjectSlug(projectSlug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Smooth in-page section navigation (for Home page buttons)
  const handleNavigateSection = (sectionId) => {
    if (activePage !== 'home') {
      setActivePage('home');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 80);
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container">
      {/* 1. Fullscreen Background Video (Active only on Home Page Sections 1-3) */}
      {activePage === 'home' && (
        <VideoBackground
          overlayTheme={overlayTheme}
          overlayOpacity={overlayOpacity}
          isAutoPlay={false}
          isMuted={isMuted}
          onDurationChange={(dur) => setDuration(dur)}
        />
      )}

      {/* 2. Top Navigation Bar with 6 Dedicated Page Links, 8-Project Dropdown & European Multi-Language Switcher */}
      <Navbar
        activePage={activePage}
        selectedProjectSlug={selectedProjectSlug}
        onSelectPage={handleSelectPage}
        onSelectProject={handleSelectProject}
        language={language}
        onSelectLanguage={handleSelectLanguage}
        isDarkTheme={isDarkTheme}
        onToggleTheme={() => setIsDarkTheme((prev) => !prev)}
        onOpenInquiryModal={() => setIsInquiryModalOpen(true)}
      />

      {/* 3. Page Router View */}
      {activePage === 'home' && (
        <main className="scroll-container">
          {/* Section 1: Hero Overview ("BEYOND FOOTBALL. BEYOND BORDERS.") */}
          <SectionHero
            onExploreClick={() => handleNavigateSection('section-2')}
            onConsultClick={() => setIsInquiryModalOpen(true)}
          />

          {/* Section 2 & 3: Football Legacy & Business (Mantab One / Global Connections) */}
          <SectionPillars
            onNextClick={handleNavigateSection}
            onOpenInquiryModal={() => setIsInquiryModalOpen(true)}
          />

          {/* 4 Additional Overlapping Sections with Velocity Scroll Physics (No Video) */}
          <SectionVelocityOverlap
            onNavigate={handleNavigateSection}
            onSelectProject={handleSelectProject}
            onOpenInquiryModal={() => setIsInquiryModalOpen(true)}
          />

          {/* Pre-Footer Scroll-Scrubbed Video Showcase (vid2.mp4) */}
          <SectionScrollVideo
            overlayTheme={overlayTheme}
            overlayOpacity={overlayOpacity}
            onNextClick={() => handleNavigateSection('section-4')}
            onOpenInquiryModal={() => setIsInquiryModalOpen(true)}
          />

          {/* Home Contact & Collaboration (Footer) */}
          <SectionContact
            onOpenInquiryModal={() => setIsInquiryModalOpen(true)}
            onScrollToTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
        </main>
      )}

      {activePage === 'about' && (
        <PageAbout
          onSelectPage={handleSelectPage}
          onOpenInquiryModal={() => setIsInquiryModalOpen(true)}
        />
      )}

      {activePage === 'expertise' && (
        <PageExpertise
          onSelectPage={handleSelectPage}
          onOpenInquiryModal={() => setIsInquiryModalOpen(true)}
        />
      )}

      {activePage === 'projects' && (
        <PageProjects
          selectedProjectSlug={selectedProjectSlug}
          onSelectProjectSlug={setSelectedProjectSlug}
          onSelectPage={handleSelectPage}
          onOpenInquiryModal={() => setIsInquiryModalOpen(true)}
        />
      )}

      {activePage === 'article' && (
        <PageArticle
          onSelectPage={handleSelectPage}
          onOpenInquiryModal={() => setIsInquiryModalOpen(true)}
        />
      )}

      {activePage === 'contact' && <PageContact />}

      {/* Clean White Shared Footer for Dedicated Inner Pages */}
      {activePage !== 'home' && (
        <footer className="dedicated-page-footer sheet-white">
          <div className="sheet-inner-container">
            <div className="dedicated-footer-top">
              <div>
                <img
                  src={assetUrl('/logo.png')}
                  alt="sergiovandijk.com"
                  className="navbar-logo-img"
                  style={{ height: '26px', width: 'auto', marginBottom: '0.75rem' }}
                />
                <p style={{ color: 'var(--text-light)', fontSize: '0.82rem', fontWeight: 600 }}>
                  BEYOND FOOTBALL. BEYOND BORDERS. — Learn. Create. Share.
                </p>
              </div>

              <div className="dedicated-footer-nav">
                {['home', 'about', 'expertise', 'projects', 'article', 'contact'].map((page) => (
                  <button
                    key={page}
                    className={`dedicated-footer-link ${activePage === page ? 'active' : ''}`}
                    onClick={() => handleSelectPage(page)}
                  >
                    {page.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <div className="dedicated-footer-bottom">
              <span>© {new Date().getFullYear()} SERGIO VAN DIJK. ALL RIGHTS RESERVED.</span>
              <span>EUROPE · AUSTRALIA · INDONESIA</span>
            </div>
          </div>
        </footer>
      )}

      {/* 4. Interactive Inquiry Modal */}
      <InquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
      />
    </div>
  );
}
