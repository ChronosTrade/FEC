import React from 'react';
import PropTypes from 'prop-types';
import { StarWrapper } from './styles';

function StarRating({ rating, size }) {
  const fullStars = Math.floor(rating);
  const remainder = (rating - fullStars) * 100;

  return (
    <div>
      {Array.from({ length: fullStars }).map((_, idx) => (
        <StarWrapper key={`fullStar-${idx}`} size={size} className="full">
          ★
        </StarWrapper>
      ))}
      {fullStars < 5 && (
        <StarWrapper className="partial" size={size} width={`${remainder}%`}>
          ☆
        </StarWrapper>
      )}
      {Array.from({ length: 5 - fullStars - 1 }).map((_, idx) => (
        <StarWrapper key={`emptyStar-${idx + fullStars}`} size={size}>
          ☆
        </StarWrapper>
      ))}
    </div>
  );
}

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
  size: PropTypes.string,
};

StarRating.defaultProps = {
  size: '1rem',
};

export default StarRating;
