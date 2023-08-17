import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import StarRating from './StarRating';

function StarByProductId({ productId }) {
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    axios
      .get(`/reviews/meta?product_id=${productId}`)
      .then((response) => {
        const reviewMeta = response.data;
        const totalRatings = Object.keys(reviewMeta.ratings).reduce(
          (acc, rating) => acc + Number(rating) * Number(reviewMeta.ratings[rating]),
          0,
        );
        const totalReviews = Object.values(reviewMeta.ratings).reduce(
          (acc, curr) => acc + Number(curr),
          0,
        );
        setAverageRating(totalRatings / totalReviews);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [productId]);

  return <StarRating rating={averageRating} />;
}

StarByProductId.propTypes = {
  productId: PropTypes.string.isRequired,
};

export default StarByProductId;
