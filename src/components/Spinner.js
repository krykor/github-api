import React from 'react';
import Loader from 'react-loader-spinner';

const Spinner = () => {
  return (
    <div className="spinner">
      <Loader type="Oval" color="#7044a0" height={100} width={100} />
    </div>
  );
};

export default Spinner;
