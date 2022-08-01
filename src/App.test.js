import React from 'react';
import App from './App';
import ReactTestRenderer from 'react-test-renderer';

describe('PersonCard component', () => {
  it('should render an h1', () => {
    // create the component
    const component = ReactTestRenderer.create(<App />);

    // find the root
    const instance = component.root;

    // look for the H1
    const element = instance.findByType('h1');

    // check if the H1 text inludes the words 'Character Index'
    expect(element.props.children.includes('Character Index')).toBe(true);
  });
});
