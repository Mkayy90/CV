import Section from './../section/Section';
import config from './sections-config';
import './Main.css';

function Main() {
  const sections = config;

  return (
    <main className="main-container">
      <div className="main__header">
        <h1 className="header__title">CV:resume</h1>
        <h4 className="header__subtitle">Max Kjellqvist Johnsson : Webdeveloper</h4>
      </div>

      <div className="main__content">
        <Section items={sections.education} title="Education" />
        <Section items={sections.work} title="Work" />
        <Section items={sections.other} title="Other" />
      </div>
    </main>
  );
}

export default Main;
