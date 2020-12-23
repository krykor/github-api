import axios from 'axios';

export const getRepos = userId =>
  axios
    .get(`https://api.github.com/users/${userId}/repos?sort=updated&per_page=5`)
    .then(response => response.data);
