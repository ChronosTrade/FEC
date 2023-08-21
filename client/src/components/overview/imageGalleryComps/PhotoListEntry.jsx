import React from 'react';
import { Photo, PhotoSelect, PhotosWrapper } from '../overviewStyles';

export default function PhotoListEntry({
  photo,
  photos,
  selIndex,
  i,
  setIndex,
}) {
  const clickHandler = (e) => {
    setIndex(Number(e.target.getAttribute('i')));
  };
  return (
    <div>
      {(photos[selIndex] === photo)
        ? (
          <PhotoSelect
            src={photo.thumbnail_url}
            i={i}
          />
        ) : (
          <Photo
            src={photo.thumbnail_url}
            i={i}
            onClick={clickHandler}
          />
        )}
    </div>
  );
}
