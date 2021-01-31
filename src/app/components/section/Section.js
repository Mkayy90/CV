import Projects from './../projects/Projects';
import './Section.css';

function Section(props) {
  const sectionItems = props.items.map((item, i) => (
    <div className="section-item" key={i}>
      <div className="section-item__title">
        {item.years ? (<span>{item.years} : </span>) : null}
        {item.title}
      </div>
      {item.subtitle ? <div className="section-item__subtitle">{item.subtitle}</div> : null }
      {item.description ? <div className="section-item__description">{item.description}</div> : null }
      {item.projects ? <Projects projects={item.projects} /> : null}
    </div>
  ));

  return (
    <section className="section-container">
      <div className="section__title">{props.title}</div>
      {sectionItems}
    </section>
  );
}

export default Section;
