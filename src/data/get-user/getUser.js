import axios from 'axios';

export const getUser = userId =>
  axios
    .get(`https://api.github.com/users/${userId}`)
    .then(response => response.data);
