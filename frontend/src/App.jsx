import React, { useEffect, useState } from "react";
import { postImage } from "./api";

function App() {
  const [imageFile, setImageFile] = useState({});

  const handleImagePreview = (e) => {
    // <- This will let you preview the uploaded image
    const file = e.target.files[0];
    setImageFile(file);
  };
  const handleSubmit = async () => {
    // <- This will send the selected image to our api
    try {
      const res = await postImage({ image: imageFile });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <div className="uploadImage">
        <input
          type="file"
          accept="image/png, image/jpg, image/jpeg, image/webp"
          onChange={(e) => handleImagePreview(e)}
        />
      </div>

      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>

    </div>
  );
}

export default App;
