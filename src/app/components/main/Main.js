import { connect } from 'react-redux';
import { getSections } from './../../stores/modules/sections';
import Experiences from './../Experiences/Experiences';
import './Main.css';

const Main = (props) => {
  const name = 'Max Kjellqvist Johnsson';
  const title = 'Webdeveloper';

  return (
    <main className="main-container">
      <div className="main__header">
        <h1 className="header__title">CV:resume</h1>
        <h4 className="header__subtitle">{name} : {title}</h4>
      </div>

      <div className="main__content">
        <Experiences items={props.work} title="Work" />
        <Experiences items={props.education} title="Education" />
      </div>
    </main>
  );
};

export default connect((state) => getSections(state))(Main);