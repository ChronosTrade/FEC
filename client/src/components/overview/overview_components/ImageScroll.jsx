import React from 'react';
import { Photo, PhotoSelect, PhotosWrapper } from './ImageMainStyles';

export default function ImageScroll({
  selIndex,
  photos,
  setIndex
}) {
  return (
    <PhotosWrapper role="presentation">
      {photos.map(
        (photo, i) => (
          <PhotoListEntry
            photo={photo}
            i={i}
            selIndex={selIndex}
            key={photo.thumbnail_url}
            photos={photos}
            setIndex={setIndex}
          />
        ),
      )}
    </PhotosWrapper>
  );
}

export function PhotoListEntry({
  photo,
  photos,
  selIndex,
  i,
  setIndex
}) {
  const clickHandler = (e) => {
    setIndex(Number(e.target.getAttribute('i')));
  };
  return (
    <div>
      {(photos[selIndex] === photo)
        ? (
          <PhotoSelect
            role="presentation"
            alt=""
            src={photo.thumbnail_url}
            i={i}
          />
        ) : (
          <Photo
            role="presentation"
            alt=""
            src={photo.thumbnail_url}
            i={i}
            onClick={clickHandler}
          />
        )}
    </div>
  );
}
