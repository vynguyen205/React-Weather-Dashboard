import './App.css';
import Dashboard from './components/Dashboard';
import FetchGeo from './utils/functions/fetchGeo';

function App() {
  FetchGeo("Westminster");

  return (
    <div className="App">
      {<Dashboard />}
    </div>
  );
}

export default App;
