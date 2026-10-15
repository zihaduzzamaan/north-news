import React, { useState, useEffect } from 'react';
import { Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import { tickerNews } from '../data/newsData';

export default function BreakingTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto rotate ticker items smoothly every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % tickerNews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + tickerNews.length) % tickerNews.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % tickerNews.length);
  };

  return (
    <div className="breaking-ticker-bar">
      <div className="news-container ticker-inner">
        {/* Red Breaking Badge */}
        <div className="ticker-badge">
          <Zap size={16} fill="currentColor" />
          <span>সর্বশেষ খবর</span>
        </div>

        {/* Desktop Ticker Items View */}
        <div className="ticker-content" style={{ display: 'flex', alignItems: 'center' }}>
          <div className="ticker-item" title={tickerNews[currentIndex]}>
            <span>{tickerNews[currentIndex]}</span>
            <span className="ticker-bullet">•</span>
            <span>{tickerNews[(currentIndex + 1) % tickerNews.length]}</span>
            <span className="ticker-bullet" style={{ display: 'none' }}>•</span>
            <span style={{ display: 'none' }}>{tickerNews[(currentIndex + 2) % tickerNews.length]}</span>
          </div>
        </div>

        {/* Navigation Arrow Controls */}
        <div className="ticker-nav-controls">
          <button 
            className="ticker-ctrl-btn" 
            onClick={handlePrev} 
            title="পূর্ববর্তী খবর"
            aria-label="Previous headline"
          >
            <ChevronLeft size={16} />
          </button>
          <span>|</span>
          <button 
            className="ticker-ctrl-btn" 
            onClick={handleNext} 
            title="পরবর্তী খবর"
            aria-label="Next headline"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
