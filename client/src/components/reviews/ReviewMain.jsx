import React, {
  useState, useEffect, useContext, useMemo,
} from 'react';
import axios from 'axios';
import AppContext from '../AppContext';
import {
  ReviewWrapper,
  LoadMoreButton,
  SortReviews,
} from './styles';
import ReviewCard from './ReviewCard';
import RatingSummary from './RatingSummary';
import Dropdown from './Dropdown';
import WriteReview from './WriteReview';
import Loading from './Loading';

function ReviewMain() {
  const { productID, totalRatings } = useContext(AppContext);
  const [reviews, setReviews] = useState([]);
  const [reviewMeta, setReviewMeta] = useState({});
  const [displayedReviewsCount, setDisplayedReviewsCount] = useState(2);
  const [activeFilter, setActiveFilter] = useState(null);

  function convertToNumbers(data) {
    const convertedRatings = Object.fromEntries(
      Object.entries(data.ratings).map(([key, value]) => [key, Number(value)]),
    );

    const convertedRecommended = {
      true: Number(data.recommended.true),
      false: Number(data.recommended.false),
    };

    const convertedCharacteristics = Object.fromEntries(
      Object.entries(data.characteristics).map(([key, charObj]) => [
        key,
        { ...charObj, value: Number(charObj.value) },
      ]),
    );

    return {
      ...data,
      ratings: convertedRatings,
      recommended: convertedRecommended,
      characteristics: convertedCharacteristics,
    };
  }

  useEffect(() => {
    axios
      .get(`/reviews?product_id=${productID}`)
      .then((response) => setReviews(response.data.results))
      .catch((error) => {
        console.error(error);
      });

    axios
      .get(`/reviews/meta?product_id=${productID}`)
      .then((response) => {
        const modifiedData = convertToNumbers(response.data);
        setReviewMeta(modifiedData);
      })
      .catch((error) => {
        console.error(error);
      });
    setActiveFilter(null);
  }, [productID]);

  const filteredReviews = useMemo(() => reviews.filter(
    (review) => !activeFilter || review.rating === activeFilter,
  ), [reviews, activeFilter]);

  const handleLoadMoreReviews = () => {
    setDisplayedReviewsCount((prevCount) => prevCount + 2);
  };

  const handleSortChange = (order) => {
    let sortedReviews;

    switch (order) {
      case 'newest':
        sortedReviews = [...reviews].sort(
          (a, b) => new Date(b.date) - new Date(a.date),
        );
        break;
      case 'helpful':
        sortedReviews = [...reviews].sort(
          (a, b) => b.helpfulness - a.helpfulness,
        );
        break;
      default:
        sortedReviews = reviews;
    }

    setReviews(sortedReviews);
  };

  const toggleStarFilter = (star) => {
    if (activeFilter === star) {
      setActiveFilter(null);
    } else {
      setActiveFilter(star);
    }
  };

  return (
    <div>
      {reviewMeta.ratings
      && reviewMeta.recommended
      && reviewMeta.characteristics ? (
        <ReviewWrapper id="Reviews">
          <div id="review-header">
            REVIEWS
            &#40;
            {totalRatings}
            &#41;
          </div>
          <RatingSummary
            ratings={reviewMeta.ratings}
            recommended={reviewMeta.recommended}
            characteristics={reviewMeta.characteristics}
            toggleStarFilter={toggleStarFilter}
            activeFilter={activeFilter}
          />
          <SortReviews>
            <p>
              {'There are '}
              {filteredReviews.length}
              {' reviews, '}
            </p>
            <p>sorted by</p>
            <Dropdown onChange={handleSortChange} />
          </SortReviews>
          {reviews
            .filter((review) => !activeFilter || review.rating === activeFilter)
            .slice(0, displayedReviewsCount)
            .map((review) => (
              <ReviewCard key={review.review_id} review={review} />
            ))}
          <LoadMoreButton
            onClick={handleLoadMoreReviews}
            $isHidden={reviews.length <= displayedReviewsCount}
          >
            More Reviews
          </LoadMoreButton>
          <WriteReview reviewMeta={reviewMeta} />
        </ReviewWrapper>
        ) : (
          <Loading />
        )}
    </div>
  );
}

export default ReviewMain;
