import { connect } from 'react-redux';
import { show } from './../../stores/modules/examples';
import About from '../About/About';
import Skills from '../Skills/Skills';
import image from './profile-img.jpg';
import './Sidebar.css';

const Sidebar = (props) => {
  const toggle = (example) => props.show(example);

  return (
    <div className="sidebar-container">
      <div className="image-container">
        <img className="image" src={image} alt="Profile" />
      </div>
      
      <div className="sidebar__links">
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/max-kjellqvist-johnsson-57001559/">Linkedin</a>
        <a target="_blank" rel="noreferrer" href="https://github.com/Mkayy90/CV">Github</a>
      </div>

      <div className="sidebar__skills">
        <div className="sidebar__title">Skills</div>
        <Skills />
      </div>

      <div className="sidebar__about">
        <div className="sidebar__title">About me</div>
        <About />
      </div>

      <div className="sidebar__code-examples">
        <div className="sidebar__title">Code examples</div>
        <button className="example__button" onClick={() => toggle('star')}>Single SVG star</button>
      </div>
    </div>
  );
};

export default connect(null, { show })(Sidebar);
