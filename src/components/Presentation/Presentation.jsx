import Section from '../Section/Section'
import './Presentation.css'

const Presentation = () => {
  return (
    <Section id="presentation" className="presentation-section">
      <div className="presentation-background"></div>
      <div className="presentation-container">
        <h1>Présentation</h1>
        <p className="subtitle">Découvrez mon expertise et mes offres</p>
        
        <div className="presentation-columns">
          <div className="presentation-content">
            <p className="presentation-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          
          <div className="presentation-offers">
            <div className="offer-card">
              <h3>Offre Starter</h3>
              <p>Solution idéale pour démarrer votre projet digital avec les fonctionnalités essentielles.</p>
            </div>
            <div className="offer-card">
              <h3>Offre Pro</h3>
              <p>Accompagnement complet pour des projets ambitieux avec support personnalisé.</p>
            </div>
            <div className="offer-card">
              <h3>Offre Enterprise</h3>
              <p>Solutions sur mesure pour les grandes organisations avec infrastructure dédiée.</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Presentation
