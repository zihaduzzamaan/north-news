import React, { useState } from 'react';
import Header from './components/Header';
import BreakingTicker from './components/BreakingTicker';
import HeroSection from './components/HeroSection';
import MobileCategoryPills from './components/MobileCategoryPills';
import RangpurSection from './components/RangpurSection';
import VideoSection from './components/VideoSection';
import Footer from './components/Footer';
import MobileBottomNav from './components/MobileBottomNav';
import ArticleModal from './components/ArticleModal';
import { navCategories } from './data/newsData';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeMobileTab, setActiveMobileTab] = useState('home');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleSelectCategory = (catId) => {
    setActiveCategory(catId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMobileTab = (tabId) => {
    setActiveMobileTab(tabId);
    if (tabId === 'home') {
      setActiveCategory('all');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (tabId === 'categories') {
      const el = document.getElementById('mobile-categories-anchor');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (tabId === 'video') {
      const el = document.getElementById('video-section-anchor');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="daily-herald-app">
      {/* Header */}
      <Header 
        activeCategory={activeCategory} 
        onSelectCategory={handleSelectCategory} 
      />

      {/* Breaking News Ticker */}
      <BreakingTicker />

      {/* Main Container */}
      <main className="news-container">
        {/* Active Category Header if filtered */}
        {activeCategory !== 'all' && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 16px',
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            marginBottom: '16px',
            borderLeft: '4px solid var(--primary-red)'
          }}>
            <h2 style={{ fontSize: '20px', fontWeight: 700 }}>
              বিভাগ: {navCategories.find((c) => c.id === activeCategory)?.label || activeCategory}
            </h2>
            <button 
              onClick={() => setActiveCategory('all')}
              style={{
                color: 'var(--primary-red)',
                fontSize: '14px',
                fontWeight: 600
              }}
            >
              সব খবর দেখুন
            </button>
          </div>
        )}

        {/* Hero 3-Column Section */}
        <HeroSection onOpenArticle={setSelectedArticle} />

        {/* Mobile Quick Category Strip (Matches mobile.jpg) */}
        <div id="mobile-categories-anchor">
          <MobileCategoryPills onSelectCategory={handleSelectCategory} />
        </div>

        {/* Lower Section (Rangpur Division + Video) */}
        <div className="lower-sections-grid">
          <div className="lower-left-col">
            <RangpurSection onOpenArticle={setSelectedArticle} />
          </div>
          <div className="lower-right-col" id="video-section-anchor">
            <VideoSection />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Fixed Bottom Navigation (Matches mobile.jpg) */}
      <MobileBottomNav 
        activeTab={activeMobileTab} 
        onSelectTab={handleMobileTab} 
      />

      {/* Interactive Article Modal */}
      <ArticleModal 
        article={selectedArticle} 
        onClose={() => setSelectedArticle(null)} 
      />
    </div>
  );
}
