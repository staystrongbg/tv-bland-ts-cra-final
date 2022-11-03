import React from 'react';
import renderer from 'react-test-renderer';
import Hero from './Hero';

it('render app', () => {
  const render = renderer.create(<Hero />).toJSON();
  expect(render).toMatchSnapshot();
});
