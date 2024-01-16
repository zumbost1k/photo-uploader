import React from 'react';
import './loadingForm.css';

const LoadingForm = () => {
  return (
    <div className='uplouder uplouder-section__uplouder'>
      <h2 className='title'>Uploading...</h2>
      <div className='loading uplouder__loading' />
    </div>
  );
};

export default LoadingForm;
