import React from 'react';
import { Photo, PhotoSelect } from '../overviewStyles';

export default function IconScroll({
  index,
  maxIndex,
  setIndex,
}) {
  return (
    <div>
      {Array.from({ length: maxIndex + 1 }).map(
        (_, i) => (
          <Icons
            i={i}
            index={index}
            setIndex={setIndex}
          />
        ),
      )}
    </div>
  );
}

function Icons({
  index,
  i,
  setIndex,
}) {
  const clickHandler = (e) => {
    setIndex(Number(e.target.getAttribute('i')));
  };
  return (
    <div>
      {(index === i)
        ? (
          <PhotoSelect
            alt=""
            i={i}
          >
            &#xf553;
          </PhotoSelect>
        ) : (
          <Photo
            alt=""
            i={i}
            onClick={clickHandler}
          >
            &#xf553;
          </Photo>
        )}
    </div>
  );
}