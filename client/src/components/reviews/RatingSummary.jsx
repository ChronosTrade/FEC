import React, { useContext, useEffect } from 'react';
import AppContext from '../AppContext';
import PropTypes from 'prop-types';
import StarRating from './StarRating';
import {
  SummaryWrapper,
  BarWrapper,
  BarLabel,
  Bar,
  FilledBar,
  BarSpot,
  RatingContainer,
} from './styles';

function RatingSummary({ ratings, recommended, characteristics }) {
  const { averageRatings, setTotalRatings, setAverageRatings } = useContext(AppContext); 

  if (!ratings || !characteristics) {
    return null;
  }

  useEffect(() => {
    const totalRatingsValue = Object.keys(ratings).reduce(
      (acc, rating) => acc + Number(ratings[rating]),
      0,
    );

    const averageRatingValue = Object.keys(ratings).reduce(
      (acc, rating) => acc + Number(rating) * Number(ratings[rating]),
      0,
    ) / totalRatingsValue;

    // Update context values
    setTotalRatings(totalRatingsValue);
    setAverageRatings(averageRatingValue);
  }, [ratings, setTotalRatings, setAverageRatings]);


  const totalReviews = Object.values(ratings).reduce(
    (acc, curr) => acc + Number(curr),
    0
  );

  const mapCharacteristicToPercentage = (value) => ((value - 1) / 4) * 100;

  const recommendPercent = (
    (Number(recommended.true) /
      (Number(recommended.true) + Number(recommended.false))) *
    100
  ).toFixed(1);

  return (
    <SummaryWrapper>
      <div className='leftColumn'>
        <RatingContainer>
          <h2>{averageRatings.toFixed(1)}</h2>
          <StarRating rating={averageRatings} size='1.5rem' />
        </RatingContainer>
        {[5, 4, 3, 2, 1].map((star) => (
          <BarWrapper key={star}>
            <BarLabel>{`${star} Stars:`}</BarLabel>
            <Bar>
              <FilledBar $percentage={(ratings[star] / totalReviews) * 100} />
            </Bar>
          </BarWrapper>
        ))}
        <p>{`${recommendPercent} % of reviews recommend this product`}</p>
      </div>

      <div className='rightColumn'>
        <h2>Characteristics</h2>
        {Object.keys(characteristics).map((characteristic) => (
          <BarWrapper key={characteristic}>
            <BarLabel>{`${characteristic}:`}</BarLabel>
            <Bar>
              <BarSpot
                $percentage={mapCharacteristicToPercentage(
                  characteristics[characteristic].value
                )}
              />
            </Bar>
          </BarWrapper>
        ))}
      </div>
    </SummaryWrapper>
  );
}

RatingSummary.propTypes = {
  ratings: PropTypes.objectOf(PropTypes.number),
  recommended: PropTypes.shape({
    true: PropTypes.number,
    false: PropTypes.number,
  }),
  characteristics: PropTypes.objectOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
    }),
  ),
};

RatingSummary.defaultProps = {
  ratings: {},
  recommended: {},
  characteristics: {},
};

export default RatingSummary;
