import React from 'react';
import PersonCard from './PersonCard';
import ReactTestRenderer from 'react-test-renderer';
import {
  MemoryRouter
} from "react-router-dom";
import PropTypes from 'prop-types';

describe('PersonCard component', () => {
  it('should render', () => {
    const mockData = {
      "name": "Luke Skywalker",
      "url": "https://swapi.co/api/people/1/"
    };
    const component = ReactTestRenderer.create(
      <MemoryRouter>
        <div>
          <PersonCard people={mockData} />;
        </div>
      </MemoryRouter>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
