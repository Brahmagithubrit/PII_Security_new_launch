import React, { useState } from "react";
import axios from "axios";
import '../Styles/upload.css'
const Upload = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    if (selectedFile && selectedFile.type.startsWith("image/")) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setPreview(imageUrl);
    } else {
      setPreview(null);
    }
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("API_ENDPOINT", formData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 id="upload_heading">Upload Document</h1>
      <input type="file" onChange={handleFileChange} />
      {preview && (
        <div>
          <h3>Image Preview:</h3>
          <img
            src={preview}
            alt="Preview"
            style={{ width: "200px", height: "auto" }}
          />
        </div>
      )}
      <button id="upload_btn_1" onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default Upload;
