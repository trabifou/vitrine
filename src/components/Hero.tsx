import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Bienvenue sur notre site vitrine
          </h1>
          <p className="hero-subtitle">
            Découvrez notre expertise et nos services exceptionnels qui transformeront votre vision en réalité
          </p>
          <div className="hero-buttons">
            <button 
              className="cta-button primary"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              En savoir plus
            </button>
            <button 
              className="cta-button secondary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Nous contacter
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-illustration">
            <div className="floating-card card-1">
              <div className="card-content">
                <h3>Innovation</h3>
                <p>Solutions créatives</p>
              </div>
            </div>
            <div className="floating-card card-2">
              <div className="card-content">
                <h3>Excellence</h3>
                <p>Qualité garantie</p>
              </div>
            </div>
            <div className="floating-card card-3">
              <div className="card-content">
                <h3>Support</h3>
                <p>Accompagnement 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;