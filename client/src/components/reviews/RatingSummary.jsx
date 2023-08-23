import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../AppContext';
import StarRating from './StarRating';
import {
  SummaryWrapper,
  BarWrapper,
  BarLabel,
  Bar,
  FilledBar,
  CharLabel,
  BarSpot,
  Slider,
  RatingContainer,
} from './styles';

const SelectChart = {
  Size: [
    'Too small',
    'Too big',
  ],
  Width: [
    'Too narrow',
    'Too wide',
  ],
  Comfort: [
    'Uncomfortable',
    'Comfortable',
  ],
  Quality: [
    'Poor',
    'Perfect',
  ],
  Length: [
    'Runs Short',
    'Runs long',
  ],
  Fit: [
    'Runs tight',
    'Runs long',
  ],
};

function RatingSummary({
  ratings, recommended, characteristics, toggleStarFilter,
}) {
  const {
    totalRatings, averageRatings, setTotalRatings, setAverageRatings,
  } = useContext(AppContext);

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

  if (!ratings || !characteristics) {
    return null;
  }

  const mapCharacteristicToPercentage = (value) => ((value - 1) / 4) * 100;

  const recommendPercent = (
    (Number(recommended.true)
      / (Number(recommended.true) + Number(recommended.false)))
    * 100
  ).toFixed(1);

  return (
    <SummaryWrapper>
      <div className="leftColumn">
        <RatingContainer>
          <StarRating rating={averageRatings} size="1.5rem" />
          <h1>{averageRatings.toFixed(1)}</h1>
        </RatingContainer>
        {[5, 4, 3, 2, 1].map((star) => (
          <BarWrapper key={star}>
            <BarLabel>{`${star} ★:`}</BarLabel>
            <Bar>
              <FilledBar $percentage={(ratings[star] / totalRatings) * 100} />
            </Bar>
            <button className="star-count" onClick={() => toggleStarFilter(star)}>
              {ratings[star]}
            </button>
          </BarWrapper>
        ))}
        <p>{`${recommendPercent} % of reviews recommend this product`}</p>
      </div>

      <div className="rightColumn" style={{ marginTop: '2rem' }}>
        {Object.keys(characteristics).map((characteristic) => (
          <div key={characteristic}>
            <p>
              {characteristic}
            </p>
            <BarWrapper>
              <CharLabel>{`${SelectChart[characteristic][0]}`}</CharLabel>
              <Slider>
                <BarSpot
                  $percentage={mapCharacteristicToPercentage(
                    characteristics[characteristic].value,
                  )}
                >
                  ▼
                </BarSpot>
              </Slider>
              <CharLabel>{`${SelectChart[characteristic][1]}`}</CharLabel>
            </BarWrapper>
          </div>
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
  toggleStarFilter: PropTypes.func.isRequired,
};

RatingSummary.defaultProps = {
  ratings: {},
  recommended: {},
  characteristics: {},
};

export default RatingSummary;
