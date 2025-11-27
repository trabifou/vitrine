const ProjectCard = ({ title, description, imageColor, imageText }) => {
  const imageSrc = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='220'%3E%3Crect width='600' height='220' fill='${encodeURIComponent(imageColor)}'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='white'%3E${encodeURIComponent(imageText)}%3C/text%3E%3C/svg%3E`

  return (
    <div className="project-card">
      <img 
        src={imageSrc} 
        alt={title} 
        className="project-card-image"
      />
      <div className="project-card-content">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description">{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard
