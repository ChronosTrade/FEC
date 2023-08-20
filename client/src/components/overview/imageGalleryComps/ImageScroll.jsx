import React from 'react';
import PhotoListEntry from './PhotoListEntry';
import { PhotosWrapper } from '../overviewStyles';

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
