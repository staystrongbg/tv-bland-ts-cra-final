import React from 'react';
import renderer from 'react-test-renderer';
import Paginate from './Paginate';

it('render app', () => {
  let pageNum = [1, 2],
    paginate = (page = 2) => page;

  const render = renderer
    .create(<Paginate pageNum={pageNum} paginate={paginate} />)
    .toJSON();
  expect(render).toMatchSnapshot();
});
