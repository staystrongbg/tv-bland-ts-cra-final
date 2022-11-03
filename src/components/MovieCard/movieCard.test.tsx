import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import ShowsApi from '../../api/shows';
import Show from '../../models/Show';
import MovieCard from './MovieCard';

it('render app', async () => {
  let render, data: Show;

  await ShowsApi.get('1')
    .then((res) => {
      data = res;
      render = renderer
        .create(
          <BrowserRouter>
            <MovieCard data={data} />
          </BrowserRouter>
        )
        .toJSON();
    })
    .catch((error) => console.error(error));

  expect(render).toMatchSnapshot();
});
