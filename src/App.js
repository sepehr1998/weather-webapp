import './App.css';
import Greetings from './components/greeting-container/greeting-container.component';
import SideBar from './components/sidebar/sidebar.component';

function App() {
  return (
    <div className="App">
      <div className='greetings'>
        <Greetings />
      </div>
      <div className='side-bar'>
          <SideBar/>
      </div>
    </div>
  );
}

export default App;
