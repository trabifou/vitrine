import { useEffect, useRef } from 'react'
import Section from '../Section/Section'
import './Presentation.css'

const Presentation = () => {
  const bgRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const scrolled = window.pageYOffset
        const offset = scrolled * 0.25
        bgRef.current.style.backgroundPositionX = `${50 - offset / 10}%`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Section id="presentation" className="presentation-section" customRef={bgRef}>
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
    </Section>
  )
}

export default Presentation
