import React, { Component } from 'react';
import './PersonCard.css';
import {
  Link
} from "react-router-dom";
import PropTypes from 'prop-types';

class PersonCard extends Component {

  render() {
    const people = this.props.people;
    const url = people.url;
    const indexNumber = url.split('/').reverse()[1];
    const backgroundMediaStyles = {
        backgroundImage: 'url(\'/characters/character-' + indexNumber + '.jpg\')',
    };
    return (

      <div className="person-card">
      <Link to={`/people/${indexNumber}`} style={{ textDecoration: 'none' }}>
        <div className="media" style={backgroundMediaStyles}></div>
        <div className="container">
          <p className="styleized-font"><span>{people.name}</span></p>
          <h1>{people.name}</h1>
        </div>
        </Link>
      </div>
    )
  }
}


PersonCard.propTypes = {
  people: PropTypes.shape({
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
};

export default PersonCard;
