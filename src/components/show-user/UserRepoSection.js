import React from 'react';

const UserRepoSection = ({ repo, commits }) => {
  const { name, created, updated, description } = repo;
  const polishDate = date => new Date(date).toLocaleDateString('pl-PL');

  const prepareList = commits
    .filter(item => item.repoName === name)
    .find(item => item.commitsList);

  const commitsListToShow = prepareList && prepareList.commitsList;

  return (
    <div className="repo">
      <p className="repo__text">
        <span className="repo__text-name">Nazwa repozytorium: </span>
        {name}
      </p>
      <p className="repo__text">
        <span className="repo__text-name">Data utworzenia: </span>
        {polishDate(created)}
      </p>
      <p className="repo__text">
        <span className="repo__text-name">Data ostatniej modyfikacji: </span>
        {polishDate(updated)}
      </p>
      {description && (
        <p className="repo__text">
          <span className="repo__text-name">Opis: </span>
          {description}
        </p>
      )}
      <p className="repo__text">
        <span className="repo__text-name">Commity: </span>{' '}
        {commitsListToShow ? commitsListToShow.length : '0'}
      </p>
      <ul>
        {commitsListToShow &&
          commitsListToShow.map((commitDescription, index) => (
            <li
              className="repo__text repo__text-commit"
              key={`${index}-commit-of-${name}`}
            >
              {commitDescription}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default UserRepoSection;
