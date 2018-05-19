import React, { Component } from 'react';

class PersonDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: {}
    }
  }

  componentDidMount() {
    const peopleId = this.props.match.params.peopleId;
    console.log(peopleId);
    fetch(`https://swapi.co/api/people/${peopleId}/`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState((prevState, props) => {
          return {
            people: data
          };
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    const { name, height, mass, hair_color, skin_color, eye_color } = this.state.people
    return (
      <div>
        <h1>{name}</h1>
        <dl><dt>height</dt><dd>{height}</dd></dl>
        <dl><dt>mass</dt><dd>{mass}</dd></dl>
        <dl><dt>hair color</dt><dd>{hair_color}</dd></dl>
        <dl><dt>skin color</dt><dd>{skin_color}</dd></dl>
        <dl><dt>eye color</dt><dd>{eye_color}</dd></dl>
      </div>
    )
  }
}

export default PersonDetail;
