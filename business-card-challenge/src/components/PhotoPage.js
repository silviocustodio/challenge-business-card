import React, { PropTypes } from 'react';

// First, we extract images, onHandleSelectImage, and selectedImage from 
// props using ES6 destructuring assignment and then render.
const PhotosPage = ({ names, onHandleSelectName, selectedName }) => (
  <div className="col-md-6">
    <h2> Names </h2>
    <div className="selected-image">
      <div key={selectedName.id}>
        <h6>{selectedName.name}</h6>
      </div>
    </div>
    <div className="image-thumbnail">
       {names.map(name => (
        <div key={name.id} onClick={onHandleSelectName.bind(this, name)}>
          
          <h1>{name.name}</h1>
        </div>
      ))}
        
    </div>
  </div>
);

// Define PropTypes
// PhotosPage.propTypes = {
//   names: PropTypes.array.isRequired,
//   selectedName: PropTypes.object,
//   onHandleSelectName: PropTypes.func.isRequired
// };

export default PhotosPage;