import './App.css';
import Sidebar from './components/sidebar/Sidebar.js';
import Main from './components/main/Main.js';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
