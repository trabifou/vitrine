import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Vitrine</h3>
            <p>
              Votre partenaire de confiance pour tous vos projets digitaux. 
              Nous transformons vos idées en réalités exceptionnelles.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>Développement Web</li>
              <li>Design UI/UX</li>
              <li>Conseil Stratégique</li>
              <li>Support Technique</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li>📧 contact@vitrine.com</li>
              <li>📱 +33 1 23 45 67 89</li>
              <li>📍 Paris, France</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Suivez-nous</h4>
            <div className="social-links">
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">Instagram</a>
              <a href="#" className="social-link">GitHub</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Vitrine. Tous droits réservés.</p>
          <div className="footer-links">
            <a href="#">Mentions légales</a>
            <a href="#">Politique de confidentialité</a>
            <a href="#">CGU</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;