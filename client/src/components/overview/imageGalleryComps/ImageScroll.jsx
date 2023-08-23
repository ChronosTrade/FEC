import React from 'react';
import PhotoListEntry from './PhotoListEntry';
import { PhotosWrapper } from '../overviewStyles';

export default function ImageScroll({
  selIndex,
  photos,
  setIndex
}) {
  return (
    <PhotosWrapper>
      {photos.map(
        (photo, i) => (
          <PhotoListEntry
            photo={photo}
            i={i}
            selIndex={selIndex}
            key={i}
            photos={photos}
            setIndex={setIndex}
          />
        ),
      )}
    </PhotosWrapper>
  );
}
