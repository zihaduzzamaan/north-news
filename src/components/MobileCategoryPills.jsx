import React from 'react';
import { 
  MapPin, 
  Leaf, 
  Landmark, 
  Globe, 
  BarChart2, 
  Users, 
  Trophy, 
  PlayCircle 
} from 'lucide-react';
import { mobileIconCategories } from '../data/newsData';

const iconMap = {
  MapPin,
  Leaf,
  Landmark,
  Globe,
  BarChart2,
  Users,
  Trophy,
  PlayCircle
};

export default function MobileCategoryPills({ onSelectCategory }) {
  return (
    <div className="mobile-icons-strip">
      {mobileIconCategories.map((item) => {
        const IconComponent = iconMap[item.icon] || MapPin;
        return (
          <div 
            key={item.id} 
            className="mobile-icon-item"
            onClick={() => onSelectCategory(item.id)}
          >
            <div 
              className="mobile-icon-circle"
              style={{ backgroundColor: item.bg, color: item.color }}
            >
              <IconComponent size={22} />
            </div>
            <span className="mobile-icon-label">
              {item.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
