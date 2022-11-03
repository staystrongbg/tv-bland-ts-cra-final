import axios from 'axios';

export async function loadMovies(url: string) {
  return await axios.get(`https://api.tvmaze.com${url}`);
}
