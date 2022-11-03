import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import ShowsApi from '../../api/shows';
import Schedule from '../../models/Schedule';
import ScheduleList from './ScheduleList';

it('render app', async () => {
  let render, schedule: Schedule[];

  await ShowsApi.getAll()
    .then((res) => {
      schedule = res;
      render = renderer
        .create(
          <BrowserRouter>
            <ScheduleList list={schedule} />
          </BrowserRouter>
        )
        .toJSON();
    })
    .catch((error) => console.error(error));

  expect(render).toMatchSnapshot();
});
