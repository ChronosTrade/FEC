import React, { useState, forwardRef } from 'react';
import { StarWrap, SeeReviewsButton, ReviewsWrap } from '../overviewStyles';
import AppContext from '../../AppContext';

const Stars = forwardRef((_props, ref) => {
  // const { averageRatings, totalRatings } = useContext(AppContext);
  const [averageRatings, setAverageRatings] = useState(2.5);
  const [totalRatings, setB] = useState(4);
  const clickHandler = () => {
    const section = document.querySelector('#Reviews');
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const full = Math.floor(averageRatings);
  const remainder = (averageRatings - full) * 100;
  const message = `View ${totalRatings} Reviews`;
  return (
    <ReviewsWrap>
      {Array.from({ length: full }).map((_, i) => (
        <StarWrap className="full" key={i}>
          &#9733;
        </StarWrap>
      ))}
      {remainder ? (
        <StarWrap className="partial" width={`${remainder}%`}>
          &#9734;
        </StarWrap>
      ) : null}
      {Array.from({ length: 5 - full - Math.ceil(averageRatings - full) }).map((_, i) => (
        <StarWrap key={i + full}>
          &#9734;
        </StarWrap>
      ))}
      <SeeReviewsButton
        tabIndex={0}
        onClick={clickHandler}
        onKeyDown={clickHandler}
      >
        {message}
      </SeeReviewsButton>
    </ReviewsWrap>
  );
});

export default Stars;
