import './Sidebar.css';
import image from './profile-img.jpg';

function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="image-container">
        <img className="image" src={image} alt="Profile" />
      </div>
      
      <div className="sidebar__links">
        <a href="https://www.linkedin.com/in/max-kjellqvist-johnsson-57001559/">Linkedin</a>
        <a href="https://github.com/Mkayy90/CV">Github</a>
      </div>
    </div>
  );
}

export default Sidebar;
