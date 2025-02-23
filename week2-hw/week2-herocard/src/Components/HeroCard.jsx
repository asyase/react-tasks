import React from "react";

function HeroCard({ name, image, power, description }) {
  return (
    <div className="hero-card">
      <img src={image} alt={name} className="hero-image" />
      <div className="hero-info">
        <h2>{name}</h2>
        <p><strong>Power:</strong> {power}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default HeroCard;
