import Hero from '../Hero/Hero';
import ScheduleList from '../ScheduleList/ScheduleList';
import { useState, useEffect } from 'react';
import Schedule from '../../models/Schedule';
import ShowsApi from '../../api/shows';

const Home: React.FC = () => {
  const [schedule, setSchedule] = useState<Schedule[]>([]);

  useEffect(() => {
    ShowsApi.getAll()
      .then((res) => {
        setSchedule(res);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Hero />
      <ScheduleList list={schedule} />
    </>
  );
};

export default Home;
