import Section from '../Section/Section'
import './Presentation.css'

const Presentation = () => {
  return (
    <Section id="presentation" className="presentation-section">
      <div className="presentation-background"></div>
      <div className="presentation-container">
        <h1>Offres Canopéerenne</h1>
        <p className="subtitle">Des solutions adaptées à vos besoins.</p>

        <div className="presentation-columns">
          <div className="presentation-content">
            <p className="presentation-text">
              Canopérenne vous accompagne dans la création de solutions numériques fiables. <br />
              Avec une expertise en développement web, pour une conception sur mesure et un suivi.
            </p>
          </div>

          <div className="presentation-offers">
            <div className="offer-card">
              <div className="card-head">
                <h3>Starter</h3>
                <p><i>à partir de 700 €</i></p>
              </div>

              <ul>
                <li>Site vitrine ou boutique clés en main</li>
                <li>Design propre et responsive</li>
                <li>Référencement naturel basique (SEO)</li>
                <li>+1h d'assistance</li>
              </ul>

              <p><i>Pour les petits projets, indépendants, artisans, ou créateurs.</i></p>
            </div>

            <div className="offer-card">
              <div className="card-head">
                <h3>Pro</h3>
                <p><i>à partir de 1400 €</i></p>
              </div>

              <ul className="card-traits">
                <li>Site web perso ou application web légère</li>
                <li>Architecture evolutive</li>
                <li>Intégration de service (API)</li>
                <li>+3h d'assistance</li>
              </ul>

              <p><i>Pour les entreprises qui veulent un outil adapté à leur activité.</i></p>
            </div>

            <div className="offer-card">
              <div className="card-head">
                <h3>Dev à la Tâche</h3>
                <p><i>360 €/jour</i></p>
              </div>

              <ul className="card-traits">
                <li>Résolution de besoins techniques précis</li>
                <li>Correction applicative</li>
                <li>Ajustements techniques, optimisation, CI/CD</li>
              </ul>

              <p><i>Flexibilité maximale pour évoluer au rythme de votre projet</i></p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Presentation
