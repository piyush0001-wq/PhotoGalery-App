import React from 'react';
import { useState } from 'react';
import ProgressBar from '../component/ProgressBar'

function UploadForm() {

  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg'];

  function changeHandler(event) {
    let selected = event.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError(null)
    } else {
      setFile(null);
      setError("Please select an image file (png or jpeg)");
    }
  }

  return (
    <div>
      <form >
        <label>
          <input type="file" onChange={changeHandler} /> <span>+</span>
        </label>
        <div className="output">
          {error && <div className="error">{error}</div>}
          {file && <div> {file.name} </div>}
          {file && <ProgressBar file={file} setFile={setFile} />}
        </div>
      </form>
    </div>
  )
}

export default UploadForm
