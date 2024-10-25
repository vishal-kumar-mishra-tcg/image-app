import React from 'react';

function ImagePreview({ selectedImage }) {
  return (
    <div className="image-preview">
      <img src={selectedImage.frame} alt="Selected" className="selected-image" />
      <div className="image-details">
        <p><strong>Source:</strong> {selectedImage.source}</p>
        <p><strong>Timestamp:</strong> {new Date(selectedImage.timestamp).toLocaleString()}</p>
        <p><strong>Violation Type:</strong> {selectedImage.violation_type}</p>
      </div>
    </div>
  );
}

export default ImagePreview;
