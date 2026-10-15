import React, { useState } from 'react';
import { 
  Home, 
  Search, 
  Menu, 
  X, 
  Sun, 
  CloudSun, 
  Facebook, 
  Youtube, 
  Twitter 
} from 'lucide-react';
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

          {/* Right Header items (Desktop: Social + Weather, Mobile: Weather + Search + Menu) */}
          <div className="header-right">
            {/* Desktop Social Media Icons */}
            <div className="social-links" style={{ display: 'flex' }}>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                className="social-btn facebook" 
                title="Facebook"
              >
                <Facebook size={16} fill="currentColor" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer" 
                className="social-btn youtube" 
                title="YouTube"
              >
                <Youtube size={16} fill="currentColor" />
              </a>
              <a 
                href="https://x.com" 
                target="_blank" 
                rel="noreferrer" 
                className="social-btn twitter" 
                title="X (Twitter)"
              >
                <Twitter size={15} fill="currentColor" />
              </a>
              <button 
                onClick={() => setSearchOpen(!searchOpen)} 
                className="social-btn search" 
                title="অনুসন্ধান"
              >
                <Search size={16} />
              </button>
            </div>

            {/* Weather Widget */}
            <div className="weather-widget">
              <CloudSun size={26} color="#fbbf24" />
              <span className="weather-temp">28°C</span>
              <div className="weather-details">
                <span className="weather-city">রংপুর</span>
                <span className="weather-condition">আংশিক মেঘলা</span>
              </div>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button 
              className="nav-menu-btn" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ display: 'none' }}
              id="mobile-menu-trigger"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Search Input Bar (Dropdown) */}
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

      {/* Main Red Nav Bar */}
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
                <Home size={18} />
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
            className="nav-menu-btn" 
            title="মেনু"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.6)',
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
                <X size={24} />
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
