import React, { useCallback, useState } from 'react';
import './totalForm.css';
import axios from 'axios';
import UploadForm from '../uploadForm/uploadForm';
import LinkForm from '../linkForm/linkFrom';
const TotalForm = () => {
  const [img, setImg] = useState(null);
  const [avatar, setAvatar] = useState(false);

  const changeImg = (e) => {
    if (e.dataTransfer) {
      setImg(e.dataTransfer.files[0]);
    } else if (e.target.files) {
      setImg(e.target.files[0]);
    }
    onDropHandler();
  };

  const onDropHandler = useCallback(async () => {
    try {
      console.log('')
      const data = new FormData();
      data.append('avatar', img);

      await axios
        .post('/api/upload', data, {
          headers: {
            'content-type': 'mulpipart/form-data',
          },
        })
        .then((res) => setAvatar(res.data.path));
    } catch (error) {
      console.log(error);
    }
  }, [img]);

  return (
    <section className='uplouder-section'>
      {avatar ? (
        <LinkForm avatar={avatar} />
      ) : (
        <UploadForm changeImg={changeImg} />
      )}
    </section>
  );
};

export default TotalForm;
