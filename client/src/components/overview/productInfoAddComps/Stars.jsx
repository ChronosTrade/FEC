import React, { useState, useEffect } from 'react';
import { StarWrap, SeeReviewsButton, ReviewsWrap } from '../overviewStyles';
import AppContext from '../../AppContext';

export default function Stars({averageRatings, totalRatings}) {
  const [message, setMessage] = useState('');
  const [rounded, setRounded] = useState(0);
  const [remainder, setRemainder] = useState(0);
  const [full, setFull] = useState(0);

  useEffect(() => {
    setFull(Math.floor(averageRatings));
    setRemainder(averageRatings - Math.floor(averageRatings));
    setMessage(`(View ${totalRatings} Reviews)`);
    setRounded(Math.round(averageRatings * 10) / 10);
  }, [averageRatings, totalRatings]);

  const clickHandler = () => {
    const section = document.querySelector('#Reviews');
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const keyHandler = (event) => {
    if (event.charCode === 13 || event.charCode === 32) {
      const section = document.querySelector('#Reviews');
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <ReviewsWrap>
      <div className="starsContainer">
        {Array.from({ length: full }).map((_, i) => (
          <StarWrap className="full" key={i}>
            &#9733;
          </StarWrap>
        ))}
        {remainder ? (
          <StarWrap className="partial" width={`${remainder * 100}%`}>
            &#9734;
          </StarWrap>
        ) : null}
        {Array.from({ length: 5 - full - Math.ceil(averageRatings - full) }).map((_, i) => (
          <StarWrap key={i + full}>
            &#9734;
          </StarWrap>
        ))}
      </div>
      <p className="starsRatings">
        {rounded}
      </p>
      <SeeReviewsButton
        tabIndex={0}
        onClick={clickHandler}
        onKeyDown={keyHandler}
      >
        {message}
      </SeeReviewsButton>
    </ReviewsWrap>
  );
}
