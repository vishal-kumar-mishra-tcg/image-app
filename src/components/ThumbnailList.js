import React from 'react';

function ThumbnailList({ imageData, setSelectedImage, selectedImage }) {
  return (
    <div className="thumbnail-list">
      {imageData.map((item, index) => (
        <img
          key={index}
          src={item.frame}  
          alt={`Thumbnail for ${item.source}`}  
          className={`thumbnail ${selectedImage && selectedImage.frame === item.frame ? 'selected' : ''}`}  // Check if selectedImage matches
          onClick={() => setSelectedImage(item)}  
        />
      ))}
    </div>
  );
}

export default ThumbnailList;
