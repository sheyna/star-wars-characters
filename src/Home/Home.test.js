import React from 'react';
import Home from './Home';
import ReactTestRenderer from 'react-test-renderer';
import {
  MemoryRouter
} from "react-router-dom";

describe('Home component', () => {
  it('should render', () => {
    const component = ReactTestRenderer.create(
      <MemoryRouter>
        <Home page={1}/>
      </MemoryRouter>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
