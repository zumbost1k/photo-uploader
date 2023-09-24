import React, { useState } from 'react';
import './uploadForm.css';
import Uploud from '../../photos/upload';
import axios from 'axios';
const UploadForm = () => {
  const [drag, setDrag] = useState(false);
  const dragStartHandler = (e) => {
    e.preventDefault();
    setDrag(true);
  };
  const dragLeaveHandler = (e) => {
    e.preventDefault();
    setDrag(false);
  };

  const onDropHandler = (e) => {
    e.preventDefault();
    let files = [];
    if (e.dataTransfer) {
      files = [...e.dataTransfer.files];
    } else if (e.target.files) {
      files = [...e.target.files];
    }
    const allowedTypes = ['image/jpeg', 'image/png'];

    files = files.filter((file) => allowedTypes.includes(file.type));

    if (files.length !== 0) {
      console.log('request is loading');
      const formData = new FormData();
      formData.append('file', files[0]);
      axios.post('url', formData);
    }
  };

  return (
    <section className='uplouder-section'>
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
            onDrop={(e) => onDropHandler(e)}
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
          onChange={(e) => onDropHandler(e)}
        />
        <label htmlFor='file' className='file-taker uplouder__file-taker'>
          Upload a file
        </label>
      </div>
    </section>
  );
};

export default UploadForm;
