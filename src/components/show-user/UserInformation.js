import React from 'react';
import UserRepoSection from './UserRepoSection';

const UserInformation = ({ userData, onBack }) => {
  const { repos, commits, userId, name, bio } = userData;
  return (
    <div className="information">
      <div className="information__account">
        <p className="information__text">
          <span className="information__text-name">Login: </span>
          {userId}
        </p>
        <p className="information__text">
          <span className="information__text-name">Nazwa: </span> {name}
        </p>
        <p className="information__text">
          <span className="information__text-name">Opis: </span>
          {bio}
        </p>
      </div>
      {repos.map((repo, index) => (
        <UserRepoSection
          repo={repo}
          commits={commits}
          key={`${repo.name}-${index}`}
        />
      ))}
      <button className="button" onClick={onBack}>
        Cofnij
      </button>
    </div>
  );
};

export default UserInformation;
