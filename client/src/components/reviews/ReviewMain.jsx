import React, { useState, useContext } from 'react';
import AppContext from '../AppContext';

function ReviewMain() {
  const [reviews, setReviews] = useState([]);
  const { totalRatings, setTotalRatings } = useContext(AppContext);

  return (
    <div>
      {/* <h4>The Review Module</h4>
      <p>the average rating score is {totalRatings}</p>
      <StyledButton primary onClick={() => setTotalRatings(totalRatings + 1)}>
        Add one review
      </StyledButton> */}
    </div>
  );
}

export default ReviewMain;
