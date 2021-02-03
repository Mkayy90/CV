import { about } from '../../config';
import './About.css';

const About = () => {
  return about.map((item, i) => (
    <div className="about-container" key={i}>
      <div className="about__title">{item.title}</div>
      <div className="about__description">{item.description}</div>
    </div>
  ));
};

export default About;
