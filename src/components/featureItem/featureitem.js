import React from 'react';
import './featureitem.css';

function FeatureItem({ icon, title, text }) {
  return (
    <div className="feature-item">
      <img src={icon} alt="Feature Icon" className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default FeatureItem;