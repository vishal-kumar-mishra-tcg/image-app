import React, { useEffect, useState } from 'react';
import ImagePreview from './components/ImagePreview';
import ThumbnailList from './components/ThumbnailList';

const App = () => {
  const [imageData, setImageData] = useState([]); // State to hold the image data
  const [selectedImage, setSelectedImage] = useState(null); // State for the selected image

  // Function to fetch JSON data
  const fetchImageData = async () => {
    try {
      const response = await fetch('/dataset.json'); // Adjust the path if necessary
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json(); // Parse the JSON response

      // Format the data
      const formattedData = data.data.map(item => ({
        frame: item.frame,
        source: item.source,
        timestamp: item.timestamp,
        violation_type: item.violation_type,
      }));

      setImageData(formattedData); // Save the data in imageData state

      // Set default image to the first one if available
      if (formattedData.length > 0) {
        setSelectedImage(formattedData[0]); // Set default image to the first one
      }
    } catch (error) {
      console.error('Error fetching JSON data:', error); // Handle errors
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchImageData();
  }, []);

  // Render
  return (
    <div className="App">
      {/* Image Preview */}
      {selectedImage && <ImagePreview selectedImage={selectedImage} />}

      {/* Thumbnails */}
      <ThumbnailList 
        imageData={imageData} 
        setSelectedImage={setSelectedImage} 
        selectedImage={selectedImage} 
      />
    </div>
  );
}

export default App;
