import React, { useState } from "react";

const MainBanner = (props) => {
  const [position, setPosition] = useState(30); // Default slider position
  const { dataValue } = props;
  const handleSliderChange = (e) => {
    setPosition(e.target.value);
  };

  return (
    <div className="container____">
      <div className="image-container">
        {/* Before Image */}
        <img
          src={dataValue.BeforImage}
          alt="Before"
          className="slider-image image-before"
          style={{ width: `${position}%` }}
        />
        {/* After Image */}
        <img
          src={dataValue.AfterImage}
          alt="After"
          className="slider-image"
        />
        {/* Slider */}
        <input
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={handleSliderChange}
          className="slider"
        />
        {/* Slider Line */}
        <div
          className="slider-line"
          style={{ left: `calc(${position}% - 1px)` }}
        />
        {/* Slider Button */}
        <div
          className="slider-button"
          style={{ left: `calc(${position}% - 1px)` }}
        >
          ⬤
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
