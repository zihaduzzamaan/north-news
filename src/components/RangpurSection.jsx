import React from 'react';
import { Clock, Eye, ArrowRight } from 'lucide-react';
import { rangpurDivisionNews } from '../data/newsData';

export default function RangpurSection({ onOpenArticle }) {
  return (
    <div className="rangpur-section-wrapper">
      {/* Header */}
      <div className="section-header-bar">
        <div className="section-title-wrap">
          <div className="section-vertical-bar" />
          <h2 className="section-title-text">রংপুর বিভাগ</h2>
        </div>
        <a href="#rangpur-more" className="section-see-all">
          <span>সব দেখুন</span>
          <ArrowRight size={16} />
        </a>
      </div>

      {/* Grid of 4 Cards */}
      <div className="division-cards-grid no-scrollbar">
        {rangpurDivisionNews.map((item) => (
          <div 
            key={item.id} 
            className="division-card"
            onClick={() => onOpenArticle(item)}
          >
            <div className="division-card-img-wrapper">
              <img 
                src={item.image} 
                alt={item.title} 
                className="division-card-img" 
              />
            </div>

            <div className="division-card-content">
              <h3 className="division-card-title">
                {item.title}
              </h3>
              <div className="division-card-meta">
                <span className="meta-item">
                  <Clock size={13} />
                  <span>{item.date}</span>
                </span>
                <span className="meta-item">
                  <Eye size={13} />
                  <span>{item.views}</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
