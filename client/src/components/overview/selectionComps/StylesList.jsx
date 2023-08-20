import React, { useState, useEffect } from 'react';
import { ThumbImage, ThumbImageSelect, StylePhotosWrapper } from '../overviewStyles';

export default function StylesList({
  selStyle,
  styles,
  setSizeNotice,
  setSelStyle
}) {
  const [title, setTitle] = useState('');
  useEffect(() => {
    if (styles.length > 0) {
      setTitle(styles[0].name);
    }
  }, [styles]);
  return (
    <StylePhotosWrapper role="presentation">
      <h3>{title}</h3>
      {styles.map(
        (style) => (
          <StylesListEntry
            style={style}
            key={style.style_id}
            selStyle={selStyle}
            setSelStyle={setSelStyle}
            setSizeNotice={setSizeNotice}
            setTitle={setTitle}
          />
        ),
      )}
    </StylePhotosWrapper>
  );
}

function StylesListEntry({
  style,
  selStyle,
  setSelStyle,
  setSizeNotice,
  setTitle
}) {
  const clickHandler = () => {
    setSelStyle(style);
    setSizeNotice(false);
    setTitle(style.name);
  };
  return (
    <div>
      {(selStyle === style)
        ? (
          <ThumbImageSelect
            alt=""
            src={style.photos[0].thumbnail_url}
          />
        ) : (
          <ThumbImage
            alt=""
            src={style.photos[0].thumbnail_url}
            onClick={clickHandler}
          />
        )}
    </div>
  );
}
