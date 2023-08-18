import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  StyledReviewCard,
  PhotosWrapper,
  HelpfulButton,
  ReportButton,
  FontWeightBold,
  FontWeightLight,
  ButtonGroup,
} from './styles';
import Thumbnail from './Thumbnail';
import StarRating from './StarRating';

function ReviewCard({ review }) {
  const [isMarkedHelpful, setIsMarkedHelpful] = useState(false);
  const [helpfulCount, setHelpfulCount] = useState(review.helpfulness);

  const handleHelpfulClick = () => {
    if (!isMarkedHelpful) {
      axios
        .put(`/reviews/${review.review_id}/helpful`)
        .then(() => {
          setIsMarkedHelpful(true);
          setHelpfulCount((prevCount) => prevCount + 1);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  const handleReportClick = () => {
    axios
      .put(`/reviews/${review.review_id}/report`)
      .then(() => {
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <StyledReviewCard>
      <p>
        <b>{review.summary.toUpperCase()}</b>
      </p>
      <StarRating rating={review.rating} size="1rem" />
      <p>{review.body}</p>
      {review.response && (
        <div className="response">
          <p>
            <u>Response from seller:</u>
          </p>
          <p>{review.response}</p>
        </div>
      )}
      {review.recommend && (
        <div className="recommendation">
          <span>✓</span>
          {' I recommend this product'}
        </div>
      )}
      {review.photos.length > 0 && (
        <PhotosWrapper>
          {review.photos.map((photo) => (
            <Thumbnail imageUrl={photo.url} key={photo.id} />
          ))}
        </PhotosWrapper>
      )}
      {/* Reviewer Details */}
      <div className="reviewer-details">
        <p>
          {review.reviewer_name}
          {' at '}
          {new Date(review.date).toDateString()}
        </p>
      </div>
      <ButtonGroup>
        <HelpfulButton onClick={handleHelpfulClick} disabled={isMarkedHelpful}>
          <FontWeightBold>Helpful</FontWeightBold>
          {'    '}
          <FontWeightLight>{helpfulCount}</FontWeightLight>
        </HelpfulButton>
        <ReportButton onClick={handleReportClick}>Report</ReportButton>
      </ButtonGroup>
    </StyledReviewCard>
  );
}

ReviewCard.propTypes = {
  review: PropTypes.shape({
    helpfulness: PropTypes.number,
    review_id: PropTypes.number,
    summary: PropTypes.string,
    rating: PropTypes.number,
    body: PropTypes.string,
    response: PropTypes.string,
    recommend: PropTypes.bool,
    photos: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string,
        id: PropTypes.number,
      }),
    ),
    reviewer_name: PropTypes.string,
    date: PropTypes.string,
  }).isRequired,
};

export default ReviewCard;
