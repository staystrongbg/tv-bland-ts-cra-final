import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './Footer';

it('render app', () => {
  const render = renderer.create(<Footer />).toJSON();
  expect(render).toMatchSnapshot();
});
