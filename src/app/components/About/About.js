import { connect } from 'react-redux';
import { getAbout } from './../../stores/modules/about';
import './About.css';

const About = (props) => {
  return props.about.map((item, i) => (
    <div className="about-container" key={i}>
      <div className="about__title">{item.title}</div>
      <div className="about__description">{item.description}</div>
    </div>
  ));
};

export default connect((state) => getAbout(state))(About);
