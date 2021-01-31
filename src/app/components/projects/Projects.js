import './Projects.css';

function Projects(props) {
  const projects = props.projects.map((project, i) => (
    <div className="project-container" key={i}>
      <div className="project__title">{project.title}</div>
      <div className="project__description">- {project.description}</div>
      <div className="project__tags">{project.tags.join(' - ')}</div>
    </div>
  ));

  return (
    <div className="projects-container">
      {projects}
    </div>
  );
}

export default Projects;
