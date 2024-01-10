import React from 'react';

const SimpleSlider = ({sliderValue}) => {

  return (
    <div className='slider'>
      
      <input
        type="range"
        id="simple-slider"
        min="0"
        max="100"
        step="1"
        value={sliderValue}
      />
      <label className='emp2' htmlFor="simple-slider"> {sliderValue}</label>
    </div>
  );
};

export default SimpleSlider;