import React from 'react';
import styled from 'styled-components';

const StarWrapper = styled.span`
  display: inline-block;
  position: relative;
  font-size: ${(props) => props.size || '1.5rem'};
  color: #666;

  &.full {
    color: #f80;
  }

  &.partial::after {
    content: '★';
    position: absolute;
    left: 0;
    top: 0;
    width: ${(props) => props.width || '0%'};
    overflow: hidden;
    color: #f80;
    z-index: 1;
  }
`;

const StarRating = ({ rating, size }) => {
  const fullStars = Math.floor(rating);
  const remainder = (rating - fullStars) * 100;

  return (
    <div>
      {Array.from({ length: fullStars }).map((_, idx) => (
        <StarWrapper key={idx} size={size} className='full'>
          ★
        </StarWrapper>
      ))}
      {fullStars < 5 && (
        <StarWrapper className='partial' size={size} width={`${remainder}%`}>
          ☆
        </StarWrapper>
      )}
      {Array.from({ length: 5 - fullStars - 1 }).map((_, idx) => (
        <StarWrapper key={idx + fullStars} size={size}>
          ☆
        </StarWrapper>
      ))}
    </div>
  );
};

export default StarRating;
