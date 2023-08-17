import React from 'react';
import StarRating from './StarRating';
import styled from 'styled-components';
import {
  SummaryWrapper, BarWrapper, BarLabel, Bar, FilledBar, BarSpot
} from './styles';

const RatingSummary = ({ ratings, recommended, characteristics }) => {
  // Calculate average rating
  const totalRatings = Object.keys(ratings).reduce(
    (acc, rating) => acc + Number(ratings[rating]),
    0
  );

  const totalReviews = Object.values(ratings).reduce(
    (acc, curr) => acc + Number(curr),
    0
  );

  const averageRating =
    Object.keys(ratings).reduce(
      (acc, rating) => acc + Number(rating) * Number(ratings[rating]),
      0
    ) / totalRatings;

  const mapCharacteristicToPercentage = (value) => {
    return ((value - 1) / 4) * 100; // maps a value from 1-5 to 0%-100%
  };

  const RatingContainer = styled.div`
    display: flex;
    align-items: center; // Vertically aligns the content in the middle
    gap: 10px; // Adds a gap between the h2 and the star component
  `;

  return (
    <SummaryWrapper>
      <div className='leftColumn'>
        <RatingContainer>
          <h2>{averageRating.toFixed(1)}</h2>
          <StarRating rating={averageRating} size={'1.5rem'} />
        </RatingContainer>
        {[5, 4, 3, 2, 1].map((star) => (
          <BarWrapper key={star}>
            <BarLabel>{star} Stars:</BarLabel>
            <Bar>
              <FilledBar percentage={(ratings[star] / totalReviews) * 100} />
            </Bar>
          </BarWrapper>
        ))}
      </div>

      <div className='rightColumn'>
        <h2>Characteristics</h2>
        {Object.keys(characteristics).map((characteristic) => (
          <BarWrapper key={characteristic}>
            <BarLabel>{characteristic}:</BarLabel>
            <Bar>
              <BarSpot
                percentage={mapCharacteristicToPercentage(
                  characteristics[characteristic].value
                )}
              />
            </Bar>
          </BarWrapper>
        ))}
      </div>
    </SummaryWrapper>
  );
};

export default RatingSummary;
