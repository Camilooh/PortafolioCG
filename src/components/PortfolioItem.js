import React from 'react';

function PortfolioItem({ title, description, image }) {
  return (
    <div className="portfolio-item">
      {image && <img src={image} alt={title} className="portfolio-image" />}
      <h3 className="portfolio-title">{title}</h3>
      <p className="portfolio-description">{description}</p>
    </div>
  );
}

export default PortfolioItem;