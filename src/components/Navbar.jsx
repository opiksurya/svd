import { useState, useEffect, useRef } from 'react';
import {
  Globe,
  Check,
  Sun,
  Moon,
  ArrowRight,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';
import { PROJECTS_DATA } from '../pages/PageProjects';

export const EUROPEAN_LANGUAGES = [
  { code: 'en', short: 'EN', label: 'English', region: 'Default (UK / International)' },
  { code: 'nl', short: 'NL', label: 'Nederlands', region: 'Nederland & België' },
  { code: 'de', short: 'DE', label: 'Deutsch', region: 'Deutschland · Österreich · Schweiz' },
  { code: 'fr', short: 'FR', label: 'Français', region: 'France · Belgique · Suisse' },
  { code: 'es', short: 'ES', label: 'Español', region: 'España' },
  { code: 'it', short: 'IT', label: 'Italiano', region: 'Italia · Svizzera' },
  { code: 'pt', short: 'PT', label: 'Português', region: 'Portugal' }
];

const NAV_TRANSLATIONS = {
  en: {
    home: 'Home',
    about: 'About',
    expertise: 'Expertise',
    projects: 'Projects',
    article: 'Article',
    contact: 'Contact',
    allProjects: 'All Projects Overview',
    cta: 'Get In Touch',
    langHeading: 'European Languages'
  },
  nl: {
    home: 'Home',
    about: 'Over Ons',
    expertise: 'Expertise',
    projects: 'Projecten',
    article: 'Artikelen',
    contact: 'Contact',
    allProjects: 'Alle Projecten Overzicht',
    cta: 'Neem Contact Op',
    langHeading: 'Europese Talen'
  },
  de: {
    home: 'Startseite',
    about: 'Über Uns',
    expertise: 'Expertise',
    projects: 'Projekte',
    article: 'Artikel',
    contact: 'Kontakt',
    allProjects: 'Alle Projekte Übersicht',
    cta: 'Kontakt Aufnehmen',
    langHeading: 'Europäische Sprachen'
  },
  fr: {
    home: 'Accueil',
    about: 'À Propos',
    expertise: 'Expertise',
    projects: 'Projets',
    article: 'Articles',
    contact: 'Contact',
    allProjects: 'Aperçu de Tous les Projets',
    cta: 'Nous Contacter',
    langHeading: 'Langues Européennes'
  },
  es: {
    home: 'Inicio',
    about: 'Sobre Mí',
    expertise: 'Experiencia',
    projects: 'Proyectos',
    article: 'Artículos',
    contact: 'Contacto',
    allProjects: 'Ver Todos los Proyectos',
    cta: 'Contactar',
    langHeading: 'Idiomas Europeos'
  },
  it: {
    home: 'Home',
    about: 'Chi Sono',
    expertise: 'Competenze',
    projects: 'Progetti',
    article: 'Articoli',
    contact: 'Contatti',
    allProjects: 'Panoramica Progetti',
    cta: 'Contattaci',
    langHeading: 'Lingue Europee'
  },
  pt: {
    home: 'Início',
    about: 'Sobre',
    expertise: 'Especialidades',
    projects: 'Projetos',
    article: 'Artigos',
    contact: 'Contacto',
    allProjects: 'Visão Geral dos Projetos',
    cta: 'Entrar em Contacto',
    langHeading: 'Idiomas Europeus'
  }
};

const NAV_PAGES = [
  { id: 'home', num: '01' },
  { id: 'about', num: '02' },
  { id: 'expertise', num: '03' },
  { id: 'projects', num: '04', hasDropdown: true },
  { id: 'article', num: '05' },
  { id: 'contact', num: '06' }
];

export default function Navbar({
  activePage,
  selectedProjectSlug,
  onSelectPage,
  onSelectProject,
  language = 'en',
  onSelectLanguage,
  isDarkTheme,
  onToggleTheme,
  onOpenInquiryModal
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const langDropdownRef = useRef(null);

  const t = NAV_TRANSLATIONS[language] || NAV_TRANSLATIONS.en;
  const activeLangObj =
    EUROPEAN_LANGUAGES.find((l) => l.code === language) || EUROPEAN_LANGUAGES[0];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProjectsDropdownOpen(false);
      }
      if (langDropdownRef.current && !langDropdownRef.current.contains(e.target)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (pageId) => {
    onSelectPage(pageId);
    setProjectsDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  const handleProjectItemClick = (projectSlug) => {
    onSelectProject(projectSlug);
    setProjectsDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  const handleLanguageSelect = (langCode) => {
    if (onSelectLanguage) {
      onSelectLanguage(langCode);
    }
    setLangDropdownOpen(false);
  };

  return (
    <>
      <header
        className={`navbar-wrapper notranslate ${
          isScrolled || activePage !== 'home' ? 'navbar-scrolled' : ''
        }`}
      >
        {/* Brand Identity */}
        <div
          className="navbar-brand-wrapper"
          onClick={() => handleNavClick('home')}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          title="Sergio van Dijk — Home"
        >
          <img
            src="/logo.png"
            alt="sergiovandijk.com"
            className="navbar-logo-img"
          />
        </div>

        {/* 6 Dedicated Page Navigation Links + Projects Dropdown */}
        <nav className="navbar-links" aria-label="Main Page Navigation">
          {NAV_PAGES.map((item) => {
            const label = t[item.id] || item.id;
            if (item.hasDropdown) {
              return (
                <div
                  key={item.id}
                  ref={dropdownRef}
                  className="navbar-dropdown-container"
                  onMouseEnter={() => setProjectsDropdownOpen(true)}
                  onMouseLeave={() => setProjectsDropdownOpen(false)}
                >
                  <button
                    className={`navbar-link-btn ${activePage === 'projects' ? 'active' : ''}`}
                    onClick={() => handleNavClick('projects')}
                  >
                    <span>{item.num}</span>
                    <span>{label}</span>
                    <ChevronDown
                      size={14}
                      style={{
                        transition: 'transform 0.2s ease',
                        transform: projectsDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                      }}
                    />
                  </button>

                  {projectsDropdownOpen && (
                    <div className="navbar-projects-dropdown">
                      <div className="navbar-dropdown-inner">
                        <button
                          className={`navbar-dropdown-item navbar-dropdown-overview ${
                            activePage === 'projects' && !selectedProjectSlug ? 'active' : ''
                          }`}
                          onClick={() => handleProjectItemClick(null)}
                        >
                          <span>{t.allProjects}</span>
                          <ArrowRight size={13} />
                        </button>

                        {PROJECTS_DATA.map((proj) => (
                          <button
                            key={proj.id}
                            className={`navbar-dropdown-item ${
                              activePage === 'projects' && selectedProjectSlug === proj.id
                                ? 'active'
                                : ''
                            }`}
                            onClick={() => handleProjectItemClick(proj.id)}
                          >
                            <span>{proj.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <button
                key={item.id}
                className={`navbar-link-btn ${activePage === item.id ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                <span>{item.num}</span>
                <span>{label}</span>
              </button>
            );
          })}
        </nav>

        {/* Utility Actions: European Multi-Language Switcher + Theme Toggle + CTA */}
        <div className="navbar-actions">
          {/* European Multi-Language Switcher (Replaces Volume Icon) */}
          <div
            ref={langDropdownRef}
            className="navbar-dropdown-container"
            onMouseEnter={() => setLangDropdownOpen(true)}
            onMouseLeave={() => setLangDropdownOpen(false)}
          >
            <button
              type="button"
              className="navbar-lang-btn"
              onClick={() => setLangDropdownOpen((prev) => !prev)}
              title={`Language: ${activeLangObj.label} (${activeLangObj.short})`}
              aria-label="Select European Language"
            >
              <Globe size={15} />
              <span>{activeLangObj.short}</span>
              <ChevronDown
                size={13}
                style={{
                  transition: 'transform 0.2s ease',
                  transform: langDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                }}
              />
            </button>

            {langDropdownOpen && (
              <div className="navbar-lang-dropdown">
                <div className="navbar-dropdown-inner">
                  <div className="navbar-lang-header">{t.langHeading}</div>
                  {EUROPEAN_LANGUAGES.map((lang) => {
                    const isSelected = lang.code === language;
                    return (
                      <button
                        key={lang.code}
                        type="button"
                        className={`navbar-dropdown-item navbar-lang-item ${
                          isSelected ? 'active' : ''
                        }`}
                        onClick={() => handleLanguageSelect(lang.code)}
                      >
                        <div className="navbar-lang-item-left">
                          <span className="navbar-lang-code">{lang.short}</span>
                          <div className="navbar-lang-meta">
                            <span className="navbar-lang-name">{lang.label}</span>
                            <span className="navbar-lang-region">{lang.region}</span>
                          </div>
                        </div>
                        {isSelected && <Check size={14} />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <button
            className="navbar-icon-btn"
            onClick={onToggleTheme}
            title="Toggle Theme (Light / Dark)"
            aria-label="Toggle theme"
          >
            {isDarkTheme ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button className="navbar-cta-btn" onClick={onOpenInquiryModal}>
            <span>{t.cta}</span>
            <ArrowRight size={15} />
          </button>

          <button
            className="navbar-icon-btn navbar-mobile-toggle"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="navbar-mobile-drawer notranslate">
          <div className="navbar-mobile-list">
            {NAV_PAGES.map((item) => {
              const label = t[item.id] || item.id;
              return (
                <div key={item.id}>
                  <button
                    className={`navbar-mobile-link ${activePage === item.id ? 'active' : ''}`}
                    onClick={() => handleNavClick(item.id)}
                    style={{ width: '100%' }}
                  >
                    <span className="clean-col-num" style={{ marginBottom: 0 }}>
                      {item.num}
                    </span>
                    <span>{label}</span>
                  </button>

                  {item.hasDropdown && (
                    <div className="navbar-mobile-subprojects">
                      {PROJECTS_DATA.map((proj) => (
                        <button
                          key={proj.id}
                          className={`navbar-mobile-sublink ${
                            activePage === 'projects' && selectedProjectSlug === proj.id
                              ? 'active'
                              : ''
                          }`}
                          onClick={() => handleProjectItemClick(proj.id)}
                        >
                          {proj.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Mobile Language Selector */}
            <div className="navbar-mobile-lang-row">
              <span className="clean-label-muted" style={{ display: 'block', marginBottom: '0.5rem' }}>
                {t.langHeading}
              </span>
              <div className="navbar-mobile-subprojects" style={{ paddingLeft: 0, borderBottom: 'none' }}>
                {EUROPEAN_LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    type="button"
                    className={`navbar-mobile-sublink ${language === lang.code ? 'active' : ''}`}
                    onClick={() => handleLanguageSelect(lang.code)}
                  >
                    {lang.short} · {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
