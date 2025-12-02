import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Section from '../Section/Section'
import ProjectCard from './ProjectCard'
import './Projets.css'

gsap.registerPlugin(ScrollTrigger)

const Projets = ({ enableScrollAnimation = false }) => {
  const projects = [
    {
      id: 1,
      title: 'Analytique Avancée',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageColor: '#4facfe',
      imageText: 'Analytique'
    },
    {
      id: 2,
      title: 'Solutions Digitales',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageColor: '#667eea',
      imageText: 'Digital'
    },
    {
      id: 3,
      title: 'Innovation Stratégique',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      imageColor: '#764ba2',
      imageText: 'Innovation'
    }
  ]

  useEffect(() => {
    if (!enableScrollAnimation) return

    const section = document.getElementById('projets')
    if (!section) return

    // Pin la section pendant l'animation
    ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: '+=130%',
      pin: true,
      pinSpacing: true,
      id: 'projets-pin',
    })

    // Timeline d'animation progressive
    const title = section.querySelector('h1')
    const subtitle = section.querySelector('.subtitle')
    const cardsContainer = section.querySelector('.project-cards')
    
    if (title && subtitle && cardsContainer) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 15%',
          end: '+=70%',
          scrub: 1,
          id: 'projets-timeline',
        },
      })
      
      // Animer le titre et sous-titre d'abord
      tl.fromTo([title, subtitle], {
        opacity: 0,
        y: -30,
      }, {
        opacity: 1,
        y: 0,
        duration: 0.1,
      })
      
      // Puis animer les cards depuis la gauche
      .fromTo(cardsContainer, {
        x: '-100%',
        opacity: 0,
      }, {
        x: '0%',
        opacity: 1,
        duration: 0.7,
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.id && trigger.vars.id.startsWith('projets-')) {
          trigger.kill()
        }
      })
    }
  }, [enableScrollAnimation])

  return (
    <Section id="projets" className="projets-section" enableScrollAnimation={enableScrollAnimation}>
      <div className="projets-background"></div>
      <div className="projets-container">
        <h1>Découvrez nos créations</h1>
        <p className="subtitle">Réalisations et projets en cours</p>

        <div className="project-cards">
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imageColor={project.imageColor}
              imageText={project.imageText}
            />
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Projets
