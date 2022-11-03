import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Layout from './Layout';

it('render app', () => {
  const render = renderer
    .create(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    )
    .toJSON();
  expect(render).toMatchSnapshot();
});
