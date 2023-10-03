import {
  Route,
  Routes,
  Link,
  BrowserRouter as Router
} from "react-router-dom";
import PersonDetail from './PersonDetail/PersonDetail';
import Home from './Home/Home';
import './App.css';

function App() {
  
  return (
    <Router>
      <div className="App">
        <header>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <img src="/logo.png" className="App-logo" alt="logo" />
            <h1>Character Index</h1>
          </Link>
          <div className="header-shape"></div>
        </header>
        <main>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/people/:peopleId" element={<PersonDetail/>} />
          </Routes>
        </main>
        <footer>
          <div className="footer-shape">
            <p>A project by <span className="emph">Sheyna Watkins</span></p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
