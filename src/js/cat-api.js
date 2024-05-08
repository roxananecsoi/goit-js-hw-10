import axios from 'axios';
import Notiflix from 'notiflix';

const ENDPOINT = 'https://api.thecatapi.com/v1';
const API_KEY =
  'live_Dlptjwsu63vx6XV9KOwPMGBvJ1I6tLn8AQcu0oSQmnD0byZGZpKZgz42In5XIjqt';

axios.defaults.headers.common['x-api-key'] = API_KEY;

export function fetchBreeds() {
  return axios
    .get(`${ENDPOINT}/breeds`)
    .then(response => response.data)
    .catch(error => {
      Notiflix.Notify.failure('Failed to fetch breeds');
      console.error('Failed to fetch breeds', error);
    });
}

export function fetchCatByBreed(breedId) {
  return axios
    .get(`${ENDPOINT}/images/search?breed_ids=${breedId}`)
    .then(response => response.data)
    .catch(error => {
      Notiflix.Notify.failure('Failed to fetch cat information');
      console.error('Failed to fetch cat information', error);
    });
}
