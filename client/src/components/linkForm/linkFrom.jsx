import React from 'react';
import './linkForm.css';
import Tick from '../../photos/tick';

const LinkForm = ({ downloadedImage }) => {
  const link = 'https://images.yourdomain.com/photo-1496950866446-325...';
  return (
    <div className='uplouder uplouder-section__uplouder'>
      <div className='icon uplouder__icon'>
        <Tick />
      </div>
      <h2 className='title uplouder__title'>Uploaded Successfully!</h2>

      <img
        className='downloaded-photo uplouder__downloaded-photo'
        src={downloadedImage}
        alt='downloaded'
        width='348'
        height='235'
      />
      <div className='link-container uplouder__link-container'>
        <p className='link-text link-container__link-text'>{link}</p>
        <button
          onClick={() => {
            navigator.clipboard.writeText(link);
          }}
          className='button link-container__button'
        >
          Copy Link
        </button>
      </div>
    </div>
  );
};

export default LinkForm;
