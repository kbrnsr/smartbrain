import React from 'react';
import { PropTypes } from 'prop-types';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => (
  <div>
    <p className="f3">
      This magic brain will detect faces in your pictures. Give it a try.
    </p>
    <div className="center">
      <div className="form center pa4 br3 shadow-5">
        <input
          type="text"
          className="f4 pa2 w-70 center"
          onChange={onInputChange}
        />
        <button
          type="button"
          className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
          onClick={onButtonSubmit}
        >
          Detect
        </button>
      </div>
    </div>
  </div>
);

ImageLinkForm.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onButtonSubmit: PropTypes.func.isRequired,
};

export default ImageLinkForm;
