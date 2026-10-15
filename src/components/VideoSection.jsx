import React, { useState } from 'react';
import { Play, ArrowRight, Video as VideoIcon } from 'lucide-react';
import { videoNews } from '../data/newsData';

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="video-section-wrapper">
      {/* Header */}
      <div className="section-header-bar">
        <div className="section-title-wrap">
          <div className="section-vertical-bar" />
          <h2 className="section-title-text" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <VideoIcon size={20} color="var(--primary-red)" />
            <span>ভিডিও</span>
          </h2>
        </div>
        <a href="#video-more" className="section-see-all">
          <span>সব দেখুন</span>
          <ArrowRight size={16} />
        </a>
      </div>

      {/* Video Card */}
      <div className="video-card-container">
        <div 
          className="video-thumb-wrapper"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          <img 
            src={videoNews.image} 
            alt={videoNews.title} 
            className="video-thumb-img" 
          />

          <div className="video-play-overlay">
            <div className="play-circle">
              <Play size={24} fill="currentColor" style={{ marginLeft: '2px' }} />
            </div>
          </div>

          <span className="video-duration-badge">
            {videoNews.duration}
          </span>
        </div>

        <div className="video-card-info">
          <h3 className="video-card-title">
            {videoNews.title}
          </h3>
        </div>
      </div>
    </div>
  );
}
