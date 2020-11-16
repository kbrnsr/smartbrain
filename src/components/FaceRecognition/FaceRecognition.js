import React from 'react';
import { PropTypes } from 'prop-types';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
  const { topRow, rightCol, botRow, leftCol } = box;
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img
          id="inputimage"
          width="500px"
          height="auto"
          alt="face recognition"
          src={imageUrl}
        />
        <div
          className="bounding-box"
          style={{
            top: topRow,
            right: rightCol,
            bottom: botRow,
            left: leftCol,
          }}
        />
      </div>
    </div>
  );
};

FaceRecognition.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  box: PropTypes.shape({
    topRow: PropTypes.number,
    rightCol: PropTypes.number,
    botRow: PropTypes.number,
    leftCol: PropTypes.number,
  }),
};

FaceRecognition.defaultProps = {
  box: { topRow: 0, rightCol: 0, botRow: 0, leftCol: 0 },
};

export default FaceRecognition;
