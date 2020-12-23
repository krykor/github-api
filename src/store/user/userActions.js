import { getRepos, getCommits, getUser } from '../../data';

export const fetchUser = userId => {
  return async dispatch => {
    dispatch(fetchUserRequest());
    try {
      const userData = await getUser(userId);
      const { login, name, bio } = userData;

      const reposData = await getRepos(userId);
      const reposName = reposData.map(repo => repo.name);
      const repos = reposData.map(
        ({ name, description, updated_at: updated, created_at: created }) => {
          return {
            name,
            description,
            updated,
            created,
          };
        }
      );

      const reposCommitsData = await getCommits(userId, reposName);
      const commits = await reposCommitsData.map((commitsData, index) => ({
        repoName: reposName[index],
        commitsList: commitsData.map(commitData => commitData.commit.message),
      }));

      const accountData = {
        userId: login,
        name,
        bio,
        repos,
        commits,
      };

      dispatch(fetchUserSuccess(accountData));
    } catch (e) {
      dispatch(fetchUserFailure(e.message));
    }
  };
};

export const fetchUserRequest = () => {
  return {
    type: 'FETCH_USER_REQUEST',
  };
};

export const fetchUserSuccess = user => {
  return {
    type: 'FETCH_USER_SUCCESS',
    payload: user,
  };
};

export const fetchUserFailure = error => {
  return {
    type: 'FETCH_USER_FAILURE',
    payload: error,
  };
};

export const cleanUser = () => {
  return {
    type: 'CLEAN_USER',
  };
};
