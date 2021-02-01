import About from '../About/About';
import Skills from '../Skills/Skills';
import image from './profile-img.jpg';
import './Sidebar.css';

function Sidebar() {
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
    </div>
  );
}

export default Sidebar;
