import React from 'react';
import Title from './component/Title';
import UploadForm from './component/UploadForm';
import ImageGrid from './component/ImageGrid';
import Modal from './component/Modal';
import { useState } from 'react'
import './App.css'


function App() {

  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
      <footer className="footer">
        <h3>Made By: PIYUSH SOLAKHIYA</h3>
      </footer>
    </div>
  );
}

export default App;
