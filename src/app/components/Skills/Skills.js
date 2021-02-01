import { skills } from './../../config';
import './Skills.css';

function Skills() {
  const skillSet = (skillKey) => skills[skillKey].sort((a, b) => b.level - a.level).map((skill, i) => (
    <div className="skill-container" key={i}>
      <div className="skill__title">{skill.title}</div>
      <div className="skill__level">{skill.level}</div>
    </div>
  ));

  const skillKeys = Object.keys(skills);
  const skillSets = skillKeys.map((key, i) => (
    <div className="skill-set-container" key={i}>
      <div className="skill-set__title">{key}</div>
      {skillSet(key)}
    </div>
  ));

  return (
    <section className="skills-container">
      <div className="skills__title">Skills</div>
      {skillSets}
    </section>
  );
}

export default Skills;
