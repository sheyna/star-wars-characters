import React, { Component } from 'react';
import PersonCard from '../PersonCard/PersonCard';
import './Home.css';

class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    }
  }

  componentDidMount() {
    fetch('https://swapi.co/api/people')
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

    const people = this.state.people;
    return (

      <div className="home page-content">
        {people.map((people, idx) => {
          return <PersonCard key={idx} indexNum={idx} people={people} />;
        })}
      </div>
    )
  }
}

export default home;
