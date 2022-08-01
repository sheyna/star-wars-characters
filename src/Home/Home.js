import React from 'react';
import axios from 'axios';
import PersonCard from '../PersonCard/PersonCard';
import './Home.css';

import PropTypes from 'prop-types';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      page: this.props.page
    }
  }

  componentDidMount = async () => {
    let url = `https://swapi.dev/api/people/?page=${this.state.page}`;
    let res = await axios.get(url);
    this.setState({
        people: res.data.results
    });
  }

  next = () => {
    this.setState((prevState) => {
      return { page: prevState.page + 1 };
    }, this.componentDidMount);
  }

  previous = () => {
    this.setState((prevState) => {
      return { page: prevState.page - 1 };
    }, this.componentDidMount);
  }

  getPrevButton() {
    return (
      <button onClick={this.previous}>Previous</button>
    );
  }

  getNextButton() {
    return (
      <button onClick={this.next}>Next</button>
    );
  }

  render () {
    const people = this.state.people;
    return (
      <div className="home">
        <section className="page-content">
          {people.map((people, idx) => {
            return <PersonCard key={idx} people={people} />;
          })}
        </section>
        <div className="pagination">
          {this.state.page > 1 ? this.getPrevButton() : null}
          {this.state.page < 9 ? this.getNextButton() : null}
        </div>
      </div>
    )
  }
}

export default Home;


Home.propTypes = {
  page: PropTypes.number.isRequired
};
