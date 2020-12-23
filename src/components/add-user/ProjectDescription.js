import React from 'react';

const ProjectDescription = ({ onBack }) => {
  return (
    <div className="description">
      <div className="description__box">
        Autorem projektu jest Krystian Kordaszewski. Jest to aplikacja
        pobierająca dane konta z portalu github.com. Po podaniu ID użytkownika
        wyświetlone zostaną informacje o koncie oraz pięć ostatnio
        aktualizowanych repozytoriów wraz z commitami.
      </div>
      <button type="submit" className="button" onClick={onBack}>
        Powrót
      </button>
    </div>
  );
};

export default ProjectDescription;
