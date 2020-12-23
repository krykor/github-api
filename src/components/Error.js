import React from 'react';

const Error = ({ onBack }) => {
  return (
    <div className="error">
      <div className="error__box">
        Użytkownik o podanej nazwie nie istnieje. Wróć do ekranu wyszukiwania.
      </div>
      <button type="submit" className="button" onClick={onBack}>
        Powrót
      </button>
    </div>
  );
};

export default Error;
