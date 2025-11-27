import Section from '../Section/Section'
import ProjectCard from './ProjectCard'
import './Projets.css'

const Projets = () => {
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

  return (
    <Section id="projets" className="projets-section">
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
    </Section>
  )
}

export default Projets
