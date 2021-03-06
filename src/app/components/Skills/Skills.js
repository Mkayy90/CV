import { connect } from 'react-redux';
import { getSkills } from './../../stores/modules/skills';
import './Skills.css';

const svgStar = (rating, maxRating = 5) => {
  const fillAmount = (360 / maxRating) * rating;
  
  return (
    <svg viewBox="0 0 576 512" width="20" height="20">
      <clipPath id="star">
        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
      </clipPath>
      
      <foreignObject width="576" height="512" clipPath="url(#star)">
        <div style={{width: '100%', height: '100%', background: `conic-gradient(#5555aa 0deg, #5555aa ${fillAmount}deg, #aaa ${fillAmount}deg)`}}></div>
      </foreignObject>
    </svg>
  );
};

const Skills = (props) => {
  const skills = props.skills || {};
  
  const skillSet = (skillKey) => skills[skillKey]?.sort((a, b) => b.rating - a.rating).map((skill, i) => (
    <div className="skill-container" key={i}>
      <div className="skill__title">{skill.title}</div>
      {skill.rating ? 
        <div className="skill__rating">
          {svgStar(skill.rating)}
          <span className="skill__rating-text">{skill.rating}</span>
        </div>
      : null}
    </div>
  ));

  const skillKeys = Object.keys(skills);
  return skillKeys.map((key, i) => (
    <div className="skill-set-container" key={i}>
      <div className="skill-set__title">{key}</div>
      {skillSet(key)}
    </div>
  ));
};

export default connect((state) => getSkills(state))(Skills);