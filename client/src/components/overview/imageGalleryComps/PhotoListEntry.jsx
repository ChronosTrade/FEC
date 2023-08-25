import React from 'react';

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

  const keyHandler = (event) => {
    if (event.charCode === 13 || event.charCode === 32) {
      setIndex(Number(event.target.getAttribute('i')));
    }
  };

  return (
    <div>
      {(photos[selIndex] === photo)
        ? (
          <div className="pseudoSelect">
            <img
              className="selected"
              data-testid="photoTestSelected"
              src={photo.src}
              alt="View of Style"
              i={i}
            />
          </div>
        ) : (
          <div
            className="pseudo"
            tabIndex={0}
            role="button"
            onClick={clickHandler}
            onKeyPress={keyHandler}
            i={i}
          >
            <img
              className="unselected"
              data-testid="photoTestOption"
              src={photo.src}
              i={i}
              alt="View of Style"
            />
          </div>
        )}
    </div>
  );
}
