import React, { useState, useEffect } from 'react';
import { Clock, Eye, ArrowRight } from 'lucide-react';
import { heroCarousel, middleStories } from '../data/newsData';
import PopularNews from './PopularNews';

export default function HeroSection({ onOpenArticle }) {
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto transition hero carousel
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroCarousel.length);
    }, 6000);
    return () => clearInterval(slideTimer);
  }, []);

  const currentHero = heroCarousel[activeSlide];

  return (
    <div className="hero-grid-wrapper">
      <div className="hero-grid">
        {/* Column 1: Big Feature Story Carousel */}
        <div 
          className="hero-card"
          onClick={() => onOpenArticle(currentHero)}
        >
          <img 
            src={currentHero.image} 
            alt={currentHero.title} 
            className="hero-img"
          />

          {/* Gradient Overlay & Content */}
          <div className="hero-gradient-overlay">
            <span className="category-tag">{currentHero.tag}</span>

            <h1 className="hero-title">
              {currentHero.title}
            </h1>

            <p className="hero-description">
              {currentHero.description}
            </p>

            <div className="hero-meta-row">
              <div className="meta-info">
                <span className="meta-item">
                  <Clock size={14} />
                  <span>{currentHero.date}</span>
                </span>
                <span className="meta-item">
                  <Eye size={14} />
                  <span>{currentHero.views}</span>
                </span>
              </div>

              {/* Slider Dots */}
              <div 
                className="carousel-dots" 
                onClick={(e) => e.stopPropagation()}
              >
                {heroCarousel.map((item, idx) => (
                  <button
                    key={item.id}
                    className={`dot-btn ${activeSlide === idx ? 'active' : ''}`}
                    onClick={() => setActiveSlide(idx)}
                    title={`Slide ${idx + 1}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Section Header for Regional Stories (Visible only on mobile) */}
        <div className="section-header-bar mobile-section-header">
          <div className="section-title-wrap">
            <div className="section-vertical-bar" />
            <h2 className="section-title-text">সর্বশেষ খবর</h2>
          </div>
          <a href="#latest" className="section-see-all">
            <span>সব দেখুন</span>
            <ArrowRight size={15} />
          </a>
        </div>

        {/* Column 2: 3 Regional News Stories */}
        <div className="middle-column">
          {/* Top Train Card */}
          <div 
            className="middle-top-card"
            onClick={() => onOpenArticle(middleStories[0])}
          >
            <div className="middle-top-img-wrapper">
              <img 
                src={middleStories[0].image} 
                alt={middleStories[0].title} 
                className="middle-top-img"
              />
              <span 
                className="category-tag" 
                style={{ 
                  position: 'absolute', 
                  bottom: '6px', 
                  left: '6px',
                  marginBottom: 0,
                  fontSize: '11px',
                  padding: '2px 7px'
                }}
              >
                {middleStories[0].tag}
              </span>
            </div>

            <div className="middle-top-content">
              <h2 className="middle-top-title">
                {middleStories[0].title}
              </h2>
              <div className="card-meta-row">
                <span className="meta-item">
                  <Clock size={13} />
                  <span>{middleStories[0].date}</span>
                </span>
                <span className="meta-item">
                  <Eye size={13} />
                  <span>{middleStories[0].views}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Story 2: Farmers (Horizontal) */}
          <div 
            className="horizontal-card"
            onClick={() => onOpenArticle(middleStories[1])}
          >
            <div className="horizontal-thumb-wrapper">
              <img 
                src={middleStories[1].image} 
                alt={middleStories[1].title} 
                className="horizontal-thumb"
              />
            </div>
            <div className="horizontal-content">
              <span className="category-tag" style={{ fontSize: '11px', padding: '1px 6px', marginBottom: '2px' }}>
                {middleStories[1].tag}
              </span>
              <h3 className="horizontal-title">
                {middleStories[1].title}
              </h3>
              <div className="card-meta-row">
                <span className="meta-item">
                  <Clock size={12} />
                  <span>{middleStories[1].date}</span>
                </span>
                <span className="meta-item">
                  <Eye size={12} />
                  <span>{middleStories[1].views}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Story 3: Rangpur Tourism / Monument (Horizontal) */}
          <div 
            className="horizontal-card"
            onClick={() => onOpenArticle(middleStories[2])}
          >
            <div className="horizontal-thumb-wrapper">
              <img 
                src={middleStories[2].image} 
                alt={middleStories[2].title} 
                className="horizontal-thumb"
              />
            </div>
            <div className="horizontal-content">
              <span className="category-tag" style={{ fontSize: '11px', padding: '1px 6px', marginBottom: '2px' }}>
                {middleStories[2].tag}
              </span>
              <h3 className="horizontal-title">
                {middleStories[2].title}
              </h3>
              <div className="card-meta-row">
                <span className="meta-item">
                  <Clock size={12} />
                  <span>{middleStories[2].date}</span>
                </span>
                <span className="meta-item">
                  <Eye size={12} />
                  <span>{middleStories[2].views}</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Column 3: Popular News (Exact level baseline alignment) */}
        <PopularNews onOpenArticle={onOpenArticle} />
      </div>
    </div>
  );
}
