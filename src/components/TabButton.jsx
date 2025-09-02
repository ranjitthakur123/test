
import React from 'react';
import { getImagePath } from '../utils/imageUtils';

const TabButton = ({ 
  id, 
  title, 
  icon, 
  isActive = false, 
  onClick, 
  target = null,
  ariaControls = null 
}) => {
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick(id);
    }
  };

  return (
    <li className="nav-item" role="presentation">
      <button
        className={`nav-link services-nav-link ${isActive ? 'active' : ''}`}
        id={`${id}-tab`}
        data-bs-toggle={target ? "pill" : undefined}
        data-bs-target={target ? `#${target}` : undefined}
        type="button"
        role="tab"
        aria-controls={ariaControls || target}
        aria-selected={isActive}
        onClick={handleClick}
      >
        <div className="tab_innerimg_icon">
          <img
            src={getImagePath(icon)}
            alt={title}
          />
        </div>
        <div className="nav_btncontent f-20 f-600">
          {title}
        </div>
      </button>
    </li>
  );
};

export default TabButton;
