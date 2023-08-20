import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StarWrapper } from './styles';

function StarRatingInput({ onChange, size }) {
  const [hoveredStar, setHoveredStar] = useState(null);
  const [selectedRating, setSelectedRating] = useState(0);

  const handleClick = (value) => {
    setSelectedRating(value);
    onChange(value);
  };

  return (
    <div>
      {Array.from({ length: 5 }).map((_, index) => (
        <StarWrapper
          key={`star-${index}`}
          size={size}
          className={index < (hoveredStar || selectedRating) ? 'full' : 'partial'}
          onMouseEnter={() => setHoveredStar(index + 1)}
          onMouseLeave={() => setHoveredStar(null)}
          onClick={() => handleClick(index + 1)}
        >
          {index < (hoveredStar || selectedRating) ? '★' : '☆'}
        </StarWrapper>
      ))}
    </div>
  );
}

StarRatingInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  size: PropTypes.string,
};

StarRatingInput.defaultProps = {
  size: '2rem',
};

export default StarRatingInput;
