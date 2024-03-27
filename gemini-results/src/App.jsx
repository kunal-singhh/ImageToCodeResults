import React from 'react';
import ImageWithPreviews from './components/ImageWithPreview';
import Carousel from './components/Carousal';

const App = () => {
  // Assuming you have a list of image names
  const imageNames = ['s1', 'pagerduty'];

  // Generate an array of ImageWithPreviews components
  const imageComponents = imageNames.map((imageName, index) => (
    <ImageWithPreviews key={index} imageName={imageName} />
  ));

  return (
    <div>
      <h1>Image Carousel with Previews</h1>
      <Carousel items={imageComponents} />
    </div>
  );
};

export default App;
