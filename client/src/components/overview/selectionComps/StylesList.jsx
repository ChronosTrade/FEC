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

      setTitle(`Color: ${styles[0].name}`);
    }
  }, [styles]);
  return (
    <>
      <h3 className="styleTitle">{title}</h3>
      <div className="styled" role="presentation">
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
      </div>
    </>
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

    setTitle(`Color: ${style.name}`);
  };
  return (
    <div>
      {(selStyle === style)
        ? (
          <img
            className="imgSelect"

            alt=""
            src={style.photos[0].thumbnail_url}
          />
        ) : (
          <img
            className="img"
            alt=""
            src={style.photos[0].thumbnail_url}
            onClick={clickHandler}
          />
        )}
    </div>
  );
}
