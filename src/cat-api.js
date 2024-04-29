import axios from 'axios';

export const fetchBreeds = () => {
  axios.defaults.headers.common['x-api-key'] =
    'live_rXjHdYWZbsBJOlK0n1E8HdHVYCBm9r9unkb5zqEeuRsIvxWUd74WKH3tsVTAJOFZ';

  return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(response => response.data);
};

export const fetchCatByBreed = breedId => {
  return axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(response => response.data);
};
