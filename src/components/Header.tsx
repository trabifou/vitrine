import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h2>Vitrine</h2>
        </div>
        <nav className="navigation">
          <button onClick={() => scrollToSection('hero')} className="nav-link">
            Accueil
          </button>
          <button onClick={() => scrollToSection('about')} className="nav-link">
            À Propos
          </button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;