import React from 'react';
import { Home, Newspaper, LayoutGrid, PlaySquare, MoreHorizontal } from 'lucide-react';

export default function MobileBottomNav({ activeTab, onSelectTab }) {
  const navItems = [
    { id: 'home', label: 'হোম', icon: Home },
    { id: 'latest', label: 'সর্বশেষ', icon: Newspaper },
    { id: 'categories', label: 'ক্যাটাগরি', icon: LayoutGrid },
    { id: 'video', label: 'ভিডিও', icon: PlaySquare },
    { id: 'more', label: 'আরও', icon: MoreHorizontal }
  ];

  return (
    <nav className="mobile-bottom-nav">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;
        return (
          <button
            key={item.id}
            className={`mobile-bottom-btn ${isActive ? 'active' : ''}`}
            onClick={() => onSelectTab(item.id)}
          >
            <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
