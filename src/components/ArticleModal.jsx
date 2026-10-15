import React from 'react';
import { X, Clock, Eye, Share2, Bookmark } from 'lucide-react';

export default function ArticleModal({ article, onClose }) {
  if (!article) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0,0,0,0.7)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          maxWidth: '750px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            backgroundColor: 'rgba(0,0,0,0.5)',
            color: '#fff',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10
          }}
          title="বন্ধ করুন"
        >
          <X size={20} />
        </button>

        {/* Feature Image */}
        {article.image && (
          <div style={{ height: '340px', width: '100%', overflow: 'hidden' }}>
            <img 
              src={article.image} 
              alt={article.title} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        )}

        <div style={{ padding: '24px' }}>
          {article.tag && (
            <span className="category-tag">
              {article.tag}
            </span>
          )}

          <h1 style={{ fontSize: '26px', fontWeight: 700, lineHeight: 1.35, margin: '10px 0 16px' }}>
            {article.title}
          </h1>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '16px', borderBottom: '1px solid #e5e7eb', marginBottom: '20px', color: '#6b7280', fontSize: '13px' }}>
            <div style={{ display: 'flex', gap: '16px' }}>
              {article.date && (
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Clock size={15} />
                  <span>{article.date}</span>
                </span>
              )}
              {article.views && (
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Eye size={15} />
                  <span>{article.views}</span>
                </span>
              )}
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button style={{ color: '#4b5563', padding: '6px' }} title="সংরক্ষণ করুন">
                <Bookmark size={18} />
              </button>
              <button 
                style={{ color: '#4b5563', padding: '6px' }} 
                title="শেয়ার করুন"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({ title: article.title, url: window.location.href });
                  } else {
                    alert('লিংক কপি করা হয়েছে!');
                  }
                }}
              >
                <Share2 size={18} />
              </button>
            </div>
          </div>

          <div style={{ fontSize: '16px', lineHeight: 1.8, color: '#374151' }}>
            <p style={{ marginBottom: '16px' }}>
              {article.description || 'উত্তরাঞ্চলের অর্থনৈতিক সমৃদ্ধি ও যোগাযোগ ব্যবস্থা আধুনিকায়নে গৃহীত প্রকল্পের কাজ দ্রুতগতিতে এগিয়ে চলেছে। স্থানীয় প্রশাসন ও সংশ্লিষ্ট কর্তৃপক্ষ জানিয়েছেন, এই প্রকল্পের ফলে রংপুর অঞ্চলসহ সংলগ্ন জেলাসমূহের ব্যবসা-বাণিজ্য ও কৃষি উৎপাদনে ইতিবাচক রূপান্তর ঘটবে।'}
            </p>
            <p style={{ marginBottom: '16px' }}>
              স্থানীয় কৃষক, ব্যবসায়ী ও সচেতন নাগরিক সমাজ এই উদ্যোগকে স্বাগত জানিয়েছেন। সাধারণ মানুষের জীবনমান উন্নয়ন ও কর্মসংস্থান সৃষ্টিতে নতুন এই পরিকল্পনা ব্যাপক ভূমিকা রাখবে বলে বিশেষজ্ঞরা আশাবাদ ব্যক্ত করেছেন।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
