import React, { Component } from 'react';
import './App.css';
import {
  Route,
  Link,
  BrowserRouter as Router
} from "react-router-dom";
import PersonDetail from './PersonDetail/PersonDetail';
import Home from './Home/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    }
  }

  HomePage = (props) => {
    return (
      <Home
        page={this.state.page}
        {...props} />
    );
  }


  render() {
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
            <Route exact path="/" render={this.HomePage} />
            <Route path="/people/:peopleId" component={PersonDetail} />
          </main>
          <footer>
            <div className="footer-shape">
              <p>A project by <span className="emph">Sheyna Watkins</span></p>
              <p>for JSCRIPT 300 A Sp 18: Modern Web Application</p>
            </div>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
