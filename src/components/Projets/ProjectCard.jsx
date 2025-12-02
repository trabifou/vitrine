const ProjectCard = ({ title, description, img, lien }) => {
  return (
    <div className="project-card">
      <div className="card-background" >
        <img
          src={img}
          alt={title}
          className="project-card-image"
        />
      </div>
      <div className="project-card-content">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description">{description}</p>
        <div className="lien">
          <a href="http://">
            lien
          </a>
          <button></button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard