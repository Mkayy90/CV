import Main from './components/Main/Main.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import Examples from './components/Examples/Examples';
import './App.css';

const App = () => (
  <div className="app-container">
    <Sidebar />
    <Main />
    <Examples />
  </div>
);

export default App;
