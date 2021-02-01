import Projects from '../Projects/Projects';
import './Experiences.css';

function Experiences(props) {
  const projects = (projects) => projects ? <Projects projects={projects} /> : null;

  const experienceItems = props.items.map((item, i) => (
    <div className="experience-item" key={i}>
      <div className="experience-item__title">
        <span>{item.years} : </span>{item.title}
      </div>
      <div className="experience-item__subtitle">{item.subtitle}</div>
      <div className="experience-item__description">{item.description}</div>

      {projects(item.projects)}
    </div>
  ));

  return (
    <section className="experiences-container">
      <div className="experiences__title">{props.title}</div>
      {experienceItems}
    </section>
  );
}

export default Experiences;
