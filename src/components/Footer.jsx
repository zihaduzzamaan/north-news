import React from 'react';
import { navCategories } from '../data/newsData';

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="news-container">
        <div className="footer-top">
          {/* Brand info */}
          <div className="footer-brand">
            <img 
              src="/assets/logo.png" 
              alt="Daily Northern Herald" 
              className="footer-logo"
            />
            <p className="footer-tagline">
              দৈনিক নর্দার্ন হেরাল্ড — সত্য, আস্থা ও তথ্যের নির্ভরযোগ্য জাতীয় ও আঞ্চলিক দৈনিক। উত্তরাঞ্চল ও রংপুর বিভাগের সংবাদে সবার আগে।
            </p>
          </div>

          {/* Links Column 1 */}
          <div className="footer-links-group">
            <div>
              <h4 className="footer-col-title">বিভাগসমূহ</h4>
              <ul className="footer-links-list">
                {navCategories.slice(0, 6).map((c) => (
                  <li key={c.id}>
                    <a href={`#${c.id}`}>{c.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="footer-col-title">অন্যান্য</h4>
              <ul className="footer-links-list">
                {navCategories.slice(6, 12).map((c) => (
                  <li key={c.id}>
                    <a href={`#${c.id}`}>{c.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="footer-col-title">যোগাযোগ ও ব্যুরো</h4>
              <ul className="footer-links-list">
                <li>প্রধান কার্যালয়: রংপুর ব্যুরো অফিস</li>
                <li>ধাপ, জেল রোড, রংপুর সদর</li>
                <li>ফোন: +৮৮০ ৫২১-৬৫৪৩২</li>
                <li>ইমেইল: news@dailynorthernherald.com</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} নর্দার্ন হেরাল্ড (Northern Herald). সর্বস্বত্ব সংরক্ষিত।</p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <a href="#privacy">গোপনীয়তা নীতি</a>
            <a href="#terms">ব্যবহারের শর্তাবলী</a>
            <a href="#editorial">সম্পাদকীয় নীতিমালা</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
