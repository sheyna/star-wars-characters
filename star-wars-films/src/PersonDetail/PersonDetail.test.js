import React from 'react';
import PersonDetail from './PersonDetail';
import ReactTestRenderer from 'react-test-renderer';
import PropTypes from 'prop-types';

describe('PersonDetail component', () => {
  it('should render', () => {
    const match = { params: { peopleId: 1 } }
    const component = ReactTestRenderer.create(
      <PersonDetail match={match} />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
