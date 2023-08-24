import React, { useState, useEffect } from 'react';

export default function StylesLisEntry({
  style,
  selStyle,
  setSelStyle,
  setSizeNotice,
  setTitle
}) {
  const [photoURL, setPhotoURL] = useState('');

  useEffect(() => {
    setPhotoURL(style.photos[0].thumbnail_url);
  }, [style]);

  const clickHandler = () => {
    setSelStyle(style);
    setSizeNotice(false);
    setTitle(`Color: ${style.name}`);
  };

  return (
    <div>
      {(selStyle === style)
        ? (
          <div className="pseudoSelect">
            <img
              data-testid="stylesTestSelected"
              className="selectedStyle"
              alt="Style View"
              src={photoURL}
            />
          </div>
        ) : (
          <div
            className="pseudo"
            role="button"
            tabIndex={0}
            onClick={clickHandler}
            onKeyDown={clickHandler}
          >
            <img
              data-testid="stylesTestOption"
              className="unselectedStyle"
              alt="Style View"
              src={photoURL}
            />
          </div>
        )}
    </div>
  );
}
