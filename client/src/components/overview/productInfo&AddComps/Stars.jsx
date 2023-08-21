import React, {
  useState, useEffect, useContext, forwardRef,
} from 'react';
import { StarWrap, SeeReviews, OverviewRatingsWrap } from '../overviewStyles';
import AppContext from '../../AppContext';

const Stars = forwardRef((_props, ref) => {
  // const { averageRatings, totalRatings } = useContext(AppContext);
  const [averageRatings, setAverageRatings] = useState(2.5);
  const [totalRatings, setB] = useState(4);
  const clickHandler = () => {
    ref.current.focus();
  };

  const full = Math.floor(averageRatings);
  const remainder = (averageRatings - full) * 100;
  const message = `View ${totalRatings} Reviews`;
  return (
    <OverviewRatingsWrap>
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
      <SeeReviews role="link" onClick={clickHandler}>
        {message}
      </SeeReviews>
    </OverviewRatingsWrap>
  );
});

export default Stars;
