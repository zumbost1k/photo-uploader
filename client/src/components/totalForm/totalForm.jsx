import React, { useCallback, useEffect, useState } from 'react';
import './totalForm.css';
import axios from 'axios';
import UploadForm from '../uploadForm/uploadForm';
import LinkForm from '../linkForm/linkFrom';
import LoadingForm from '../loadingForm/loadingForm';
const TotalForm = () => {
  const [img, setImg] = useState(null);
  const [downloadedImage, setDownloadedImage] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const changeImg = (e) => {
    let file;

    if (e.dataTransfer) {
      file = e.dataTransfer.files[0];
    } else if (e.target.files) {
      file = e.target.files[0];
    }

    if (file) {
      if (file.type === 'image/png' || file.type === 'image/jpeg') {
        setImageLoading(true);
        setImg(file);
      } else {
        alert('The file must be in PNG or JPEG format.');
      }
    }
  };

  const onDropHandler = useCallback(async () => {
    try {
      const data = new FormData();
      data.append('downloadedImage', img);

      await axios
        .post('/api/upload', data, {
          headers: {
            'content-type': 'multipart/form-data',
          },
        })
        .then((res) => setDownloadedImage(res.data.path))
        .then(() => {
          setImageLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  }, [img]);
  useEffect(() => {
    if (img) {
      onDropHandler();
    }
  }, [img, onDropHandler]);
  return (
    <section className='uplouder-section'>
      {downloadedImage ? (
        <LinkForm downloadedImage={downloadedImage} />
      ) : imageLoading ? (
        <LoadingForm />
      ) : (
        <UploadForm changeImg={changeImg} />
      )}
    </section>
  );
};

export default TotalForm;
