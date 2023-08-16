import React from 'react';
import { StyledReviewCard, PhotosWrapper, HelpfulButton , FontWeightBold, FontWeightLight} from './styles';
import Thumbnail from './Thumbnail';
import StarRating from './StarRating';

const ReviewCard = ({ review }) => {
  return (
    <StyledReviewCard>
      <p>{review.summary.toUpperCase()}</p>
      <StarRating rating={review.rating} size={'1rem'} />

      <p>{review.body}</p>
      {review.response && (
        <div className='response'>
          <h5>Response:</h5>
          <p>{review.response}</p>
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
      <div className='reviewer-details'>
        <span>
          {review.reviewer_name}
          {' at '}
          {new Date(review.date).toDateString()}
        </span>
      </div>
      {/* Helpfulness */}
      <HelpfulButton>
        <FontWeightBold>Helpful</FontWeightBold>
        {'    '}
        <FontWeightLight>{review.helpfulness}</FontWeightLight>
      </HelpfulButton>
    </StyledReviewCard>
  );
};

export default ReviewCard;
