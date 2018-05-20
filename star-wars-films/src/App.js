import React, { Component } from 'react';
import './App.css';
import {
  Route,
  Link,
  BrowserRouter as Router
} from "react-router-dom";
import PersonDetail from './PersonDetail/PersonDetail';
import PersonCard from './PersonCard/PersonCard';
import Home from './Home/Home';

// app.use(express.static(path.join(__dirname, 'public')));
// const srcPath = path.join(__dirname, '..', 'publicfolder')

class App extends Component {

  // HomePage = (props) => {
  //   return (
  //     <home
  //       people={this.state.people}
  //       {...props} />
  //   );
  // }

  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <img src="/logo.png" className="App-logo" alt="logo" />
            <h1>Character Index</h1>
            <div className="header-shape"></div>
          </header>
          <main>
            <Route exact path="/" component={Home}/>
            <Route path="/people/:peopleId" component={PersonDetail} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;

      // <Route exact path="/" render={this.HomePage}/>
