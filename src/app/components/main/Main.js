import Experiences from './../Experiences/Experiences';
import { education, work } from './../../config';
import './Main.css';

const Main = () => {
  const name = 'Max Kjellqvist Johnsson';
  const title = 'Webdeveloper';

  return (
    <main className="main-container">
      <div className="main__header">
        <h1 className="header__title">CV:resume</h1>
        <h4 className="header__subtitle">{name} : {title}</h4>
      </div>

      <div className="main__content">
        <Experiences items={work} title="Work" />
        <Experiences items={education} title="Education" />
      </div>
    </main>
  );
};

export default Main;