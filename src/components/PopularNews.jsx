import React, { useState } from 'react';
import { Newspaper } from 'lucide-react';
import { popularNewsData } from '../data/newsData';

export default function PopularNews({ onOpenArticle }) {
  const [activeTab, setActiveTab] = useState('mostRead');

  const getList = () => {
    if (activeTab === 'latest') return popularNewsData.latest;
    if (activeTab === 'mostCommented') return popularNewsData.mostCommented;
    return popularNewsData.mostRead;
  };

  const list = getList();

  return (
    <div className="popular-column">
      <div className="popular-card">
        {/* Section Header */}
        <div className="popular-header">
          <Newspaper size={20} className="popular-header-icon" />
          <span>জনপ্রিয় খবর</span>
        </div>

        {/* Tab Controls */}
        <div className="popular-tabs">
          <button 
            className={`popular-tab-btn ${activeTab === 'mostRead' ? 'active' : ''}`}
            onClick={() => setActiveTab('mostRead')}
          >
            সর্বাধিক পঠিত
          </button>
          <button 
            className={`popular-tab-btn ${activeTab === 'latest' ? 'active' : ''}`}
            onClick={() => setActiveTab('latest')}
          >
            সর্বশেষ
          </button>
          <button 
            className={`popular-tab-btn ${activeTab === 'mostCommented' ? 'active' : ''}`}
            onClick={() => setActiveTab('mostCommented')}
          >
            সর্বাধিক মন্তব্য
          </button>
        </div>

        {/* Ranked Items (1 to 5) */}
        <div className="popular-list">
          {list.map((item) => (
            <div 
              key={item.id} 
              className="popular-item"
              onClick={() => onOpenArticle(item)}
            >
              {/* Rank Badge */}
              <div className="popular-rank-badge">
                {item.rank}
              </div>

              {/* Thumbnail */}
              <img 
                src={item.image} 
                alt={item.title} 
                className="popular-item-thumb" 
              />

              {/* Text Info */}
              <div className="popular-item-info">
                <h4 className="popular-item-title">
                  {item.title}
                </h4>
                <div className="popular-item-views">
                  {item.views}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
