import React, { Component } from 'react';
import './App.css';
import {
  Route,
  Link,
  BrowserRouter as Router
} from "react-router-dom";
import PersonDetail from './PersonDetail/PersonDetail';

// app.use(express.static(path.join(__dirname, 'public')));
// const srcPath = path.join(__dirname, '..', 'publicfolder')

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    }
  }

  componentDidMount() {
    fetch('https://swapi.co/api/films')
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        this.setState((prevState, props) => {
          return {
            people: data.results
          };
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/people/:peopleId" component={PersonDetail} />
        </div>
      </Router>
    );
  }
}

export default App;

      // {this.state.films.map((film, idx =>
      //     <p key={idx}>{film.title}</p>)
      // }
