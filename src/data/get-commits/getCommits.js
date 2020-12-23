import axios from 'axios';

export const getCommits = async (userId, reposName) => {
  const commitsData = reposName.map(repoName =>
    axios
      .get(`https://api.github.com/repos/${userId}/${repoName}/commits`)
      .then(response => response.data)
  );
  return Promise.all(commitsData);
};
