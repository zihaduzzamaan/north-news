import React, { useState } from 'react';
import { navCategories } from '../data/newsData';

export default function Header({ activeCategory, onSelectCategory }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="header-wrapper">
      <div className="news-container">
        {/* Top Header Bar */}
        <div className="header-top">
          {/* Logo */}
          <div className="brand-logo-container">
            <a href="/" onClick={(e) => { e.preventDefault(); onSelectCategory('all'); }}>
              <img 
                src="/assets/logo.png" 
                alt="Northern Herald - Truth . Trust . Facts" 
                className="brand-logo-img"
              />
            </a>
          </div>

          {/* Right Header items */}
          <div className="header-right">
            {/* Desktop Social Media Icons (Authentic SVGs) */}
            <div className="social-links">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                className="social-btn facebook" 
                title="Facebook"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer" 
                className="social-btn youtube" 
                title="YouTube"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a 
                href="https://x.com" 
                target="_blank" 
                rel="noreferrer" 
                className="social-btn twitter" 
                title="X (Twitter)"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <button 
                onClick={() => setSearchOpen(!searchOpen)} 
                className="social-btn search" 
                title="অনুসন্ধান"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
            </div>

            {/* Weather Widget with Authentic Sun & Cloud */}
            <div className="weather-widget">
              <svg width="28" height="28" viewBox="0 0 32 32">
                <circle cx="19" cy="12" r="6" fill="#FBBF24" />
                <path d="M19 3v3M19 21v3M10 12H7M31 12h-3M12.6 5.6l2.1 2.1M23.3 16.3l2.1 2.1M12.6 18.4l2.1-2.1M23.3 7.7l2.1-2.1" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" />
                <path d="M22 25H9.5a5.5 5.5 0 0 1-1.3-10.8A6.5 6.5 0 0 1 20.8 12a5 5 0 0 1 1.2 13z" fill="#FFFFFF" opacity="0.95" />
              </svg>
              <span className="weather-temp">28°C</span>
              <div className="weather-details">
                <span className="weather-city">রংপুর</span>
                <span className="weather-condition">আংশিক মেঘলা</span>
              </div>
            </div>

            {/* Mobile Header Tools: Search & Menu (Hidden on Desktop) */}
            <div className="mobile-header-tools">
              <button 
                className="mobile-icon-btn"
                onClick={() => setSearchOpen(!searchOpen)}
                title="অনুসন্ধান"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
              <button 
                className="mobile-icon-btn" 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                title="মেনু"
              >
                {mobileMenuOpen ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Search Input Bar */}
      {searchOpen && (
        <div style={{
          backgroundColor: '#ffffff',
          padding: '12px 16px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          color: '#111'
        }}>
          <div className="news-container" style={{ display: 'flex', gap: '8px' }}>
            <input 
              type="text" 
              placeholder="খবর অনুসন্ধান করুন..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                flex: 1,
                padding: '8px 14px',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '15px',
                fontFamily: 'inherit'
              }}
            />
            <button 
              style={{
                backgroundColor: 'var(--primary-red)',
                color: '#fff',
                padding: '8px 18px',
                borderRadius: '6px',
                fontWeight: 600
              }}
              onClick={() => alert(`অনুসন্ধান: ${searchQuery}`)}
            >
              খুঁজুন
            </button>
          </div>
        </div>
      )}

      {/* Main Red Navigation Bar */}
      <nav className="main-nav-bar">
        <div className="news-container nav-inner">
          <ul className="nav-links-list no-scrollbar">
            {/* Home Icon Link */}
            <li className="nav-item">
              <a 
                href="/" 
                className={`nav-link ${activeCategory === 'all' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); onSelectCategory('all'); }}
                title="হোম"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </svg>
              </a>
            </li>

            {/* Category Links */}
            {navCategories.map((cat) => (
              <li key={cat.id} className="nav-item">
                <a 
                  href={`#${cat.id}`}
                  className={`nav-link ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={(e) => { 
                    e.preventDefault(); 
                    onSelectCategory(cat.id); 
                  }}
                >
                  {cat.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Hamburger menu button */}
          <button 
            className="desktop-menu-btn" 
            title="মেনু"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.65)',
          zIndex: 999,
          display: 'flex',
          justifyContent: 'flex-end'
        }} onClick={() => setMobileMenuOpen(false)}>
          <div style={{
            width: '280px',
            height: '100%',
            backgroundColor: '#ffffff',
            color: '#111827',
            padding: '20px',
            overflowY: 'auto'
          }} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <img src="/assets/logo.png" alt="Logo" style={{ height: '36px' }} />
              <button onClick={() => setMobileMenuOpen(false)}>
                ✕
              </button>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>
                <button 
                  onClick={() => { onSelectCategory('all'); setMobileMenuOpen(false); }}
                  style={{ width: '100%', textAlign: 'left', padding: '10px 12px', fontWeight: 600, fontSize: '16px', borderRadius: '6px', backgroundColor: activeCategory === 'all' ? '#fee2e2' : 'transparent', color: activeCategory === 'all' ? 'var(--primary-red)' : '#111' }}
                >
                  হোম
                </button>
              </li>
              {navCategories.map((c) => (
                <li key={c.id}>
                  <button 
                    onClick={() => { onSelectCategory(c.id); setMobileMenuOpen(false); }}
                    style={{ width: '100%', textAlign: 'left', padding: '10px 12px', fontWeight: 600, fontSize: '16px', borderRadius: '6px', backgroundColor: activeCategory === c.id ? '#fee2e2' : 'transparent', color: activeCategory === c.id ? 'var(--primary-red)' : '#111' }}
                  >
                    {c.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
