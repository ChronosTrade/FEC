import React, { useState, useEffect } from 'react';

export default function PhotoListEntry({
  photo,
  photos,
  selIndex,
  i,
  setIndex,
}) {
  const [photoURL, setPhotoURL] = useState('');

  useEffect(() => {
    const checkPhoto = photo.url.split('&fit');
    const checkPhotoThumb = photo.thumbnail_url.split('&fit');
    if (checkPhotoThumb[0] !== checkPhoto[0]) {
      setPhotoURL(photo.url);
    } else {
      setPhotoURL(photo.thumbnail_url);
    }
  }, [photo]);

  const clickHandler = (e) => {
    setIndex(Number(e.target.getAttribute('i')));
  };

  return (
    <div>
      {(photos[selIndex] === photo)
        ? (
          <img
            className="selected"
            data-testid="photoTestSelected"
            src={photoURL}
            alt="View of Style"
            i={i}
          />
        ) : (
          <img
            className="unselected"
            data-testid="photoTestOption"
            src={photoURL}
            i={i}
            alt="View of Style"
            onClick={clickHandler}
            onKeyDown={clickHandler}
          />
        )}
    </div>
  );
}
