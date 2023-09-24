import React, { useState } from 'react';
import './totalForm.css';
import axios from 'axios';
import UploadForm from '../uploadForm/uploadForm';
import LinkForm from '../linkForm/linkFrom';
const TotalForm = () => {
  const [img, setImg] = useState(null);
  const [avatar, setAvatar] = useState(false);

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
      {avatar ? <LinkForm /> : <UploadForm onDropHandler={onDropHandler} />}
    </section>
  );
};

export default TotalForm;
