
import './App.css';
import { Link } from 'react-router-dom';
import CustomRoutes from './CustomRouters';

function App() {
  return (
    <div className="App">
      <header className="App-header"  >
        <nav>
        <Link to="/">Home</Link>
      
        </nav>
      </header>
      <CustomRoutes />
    </div>
  );
}

export default App;
