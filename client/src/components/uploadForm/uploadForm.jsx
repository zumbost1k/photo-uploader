import React, { useState } from 'react';
import './uploadForm.css';
import Uploud from '../../photos/upload';
const UploadForm = ({ changeImg }) => {
  const [drag, setDrag] = useState(false);

  const dragStartHandler = (e) => {
    e.preventDefault();
    setDrag(true);
  };
  const dragLeaveHandler = (e) => {
    e.preventDefault();
    setDrag(false);
  };
  return (
    <div className='uplouder uplouder-section__uplouder'>
      <h2 className='title uplouder__title'>Upload your image</h2>
      <h3 className='subtitle uplouder__subtitle'>
        File should be Jpeg, Png,...
      </h3>

      {drag ? (
        <div
          className='drag uplouder__drag uplouder__drag_active-drag'
          onDragEnter={(e) => dragStartHandler(e)}
          onDragLeave={(e) => dragLeaveHandler(e)}
          onDragOver={(e) => dragStartHandler(e)}
          onDrop={(e) => changeImg(e)}
        >
          <div className='drag__photo'>
            <Uploud />
          </div>
          <p className='text drag__text'>Drop your image here</p>
        </div>
      ) : (
        <div
          onDragEnter={(e) => dragStartHandler(e)}
          onDragLeave={(e) => dragLeaveHandler(e)}
          onDragOver={(e) => dragStartHandler(e)}
          className='drag uplouder__drag'
        >
          <div className='drag__photo'>
            <Uploud />
          </div>
          <p className='text drag__text'>Drag your image here</p>
        </div>
      )}

      <p className='text uplouder__text'>Or</p>
      <input
        type='file'
        id='file'
        accept='image/,.png,.jpeg'
        style={{ display: 'none' }}
        onChange={(e) => changeImg(e)}
      />
      <label htmlFor='file' className='button uplouder__button'>
        Upload a file
      </label>
    </div>
  );
};

export default UploadForm;
