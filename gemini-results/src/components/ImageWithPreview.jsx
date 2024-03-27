import React from 'react';

const ImageWithPreviews = ({ imageName }) => {
  const base = "data";
  const imagePath = `${base}/images/${imageName}.png`;
  const googleVisionPath = `${base}/google_vision/${imageName}.html`;
  const geminiPath = `${base}/gemini/${imageName}.html`;
  debugger;
  return (
    <div>
      <h2>Image: {imageName}</h2>
      <div>
        <h3>Original Image</h3>
        <img width={500} src={imagePath} alt={imageName} />
      </div>
      <div>
        <h3>Google Vision Preview</h3>
        {/* <iframe src={googleVisionPath} title="Google Vision Preview" width="400" height="300"></iframe> */}
      </div>
      <div>
        <h3>Gemini Preview</h3>
        {/* <iframe srcDoc={geminiPath} title="Gemini Preview" width="400" height="300"></iframe> */}
      </div>
    </div>
  );
};

export default ImageWithPreviews;
