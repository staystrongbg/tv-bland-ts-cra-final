import Api from './api';
import Show from '../models/Show';
import Schedule from '../models/Schedule';

class ShowsApi {
  get(id: string): Promise<Show> {
    return Api.http({
      method: 'get',
      url: `/shows/${id}`,
    });
  }

  getAll(): Promise<Schedule[]> {
    return Api.http({
      method: 'get',
      url: '/schedule',
    });
  }
}

export default new ShowsApi();
