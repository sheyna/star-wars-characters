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
    let pageNum = this.props.match.params.pageNum;
    if (pageNum === undefined ) {
      pageNum = 1;
    }
    console.log(pageNum);
    fetch(`https://swapi.co/api/people/?page=${pageNum}`)
      .then(response => response.json())
      .then(data => {
        if (data.results.length > 0) {
        console.log(data);
        this.setState((prevState, props) => {
          return {
            people: data.results
          };
        });
      } else {
        return {};
      }
      })
      .catch(error => console.log(error));
  };

  render() {
    const people = this.state.people;
    return (
      <div className="home page-content">
        {people.map((people, idx) => {
          return <PersonCard key={idx} people={people} />;
        })}
      </div>
    )
  }
}

export default home;
