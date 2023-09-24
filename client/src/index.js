import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import UploadForm from './components/uploadForm/uploadForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UploadForm />
  </React.StrictMode>
);
