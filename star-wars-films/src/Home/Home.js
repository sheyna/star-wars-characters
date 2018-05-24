import React, { Component } from 'react';
import PersonCard from '../PersonCard/PersonCard';
import {
  Link
} from "react-router-dom";
import './Home.css';

class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
    }
  }

  getLink(pageNo, linkText) {
    return (
    <Link to={`/page/${pageNo}`} style={{ textDecoration: 'none' }} refresh="true">{linkText}</Link>
    );
  }

  componentDidMount() {
    let pageNum = this.props.match.params.pageNum;
    if (pageNum === undefined ) {
      pageNum = 1;
    }
    this.setState((prevState, props) => {
      return {
        people: []
      };
    });
    fetch(`https://swapi.co/api/people/?page=${pageNum}`)
      .then(response => response.json())
      .then(data => {
        if (data.results.length > 0) {
        this.setState((prevState, props) => {
          return {
            people: data.results,
            next: (parseInt(pageNum) + 1),
            prev: (parseInt(pageNum) - 1)
          };
        });
      } else {
        this.setState((prevState, props) => {
          return {
            people: []
          };
        });
      }
      })
      .catch(error => console.log(error));
  };

  render() {
    const people = this.state.people;
    return (
      <div className="home">
        <section className="page-content">
          {people.map((people, idx) => {
            return <PersonCard key={idx} people={people} />;
          })}
        </section>
        <div className="pagination">
          {this.state.prev >= 1 ? this.getLink(this.state.prev, "Previous") : null}
          {this.state.next < 9 ? this.getLink(this.state.next, "Next") : null}
        </div>
      </div>
    )
  }
}

export default home;
