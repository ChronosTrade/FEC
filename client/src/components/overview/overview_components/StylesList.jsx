import React from 'react';

export default function StylesList({ selStyle, styles, setSelStyle }) {
  return (
    <div role="presentation">
      {styles.map(
        (style) => (
          <StylesListEntry
            style={style}
            key={style.style_id}
            selStyle={selStyle}
            setSelStyle={setSelStyle}
          />
        ),
      )}
    </div>
  );
}

export function StylesListEntry({ style, selStyle, setSelStyle }) {
  const clickHandler = () => {
    setSelStyle(style);
  };
  return (
    <div>
      {(selStyle === style) ? <img role="presentation" alt="" src={style.photos[0].thumbnail_url} className="highlighted" /> : <img role="presentation" alt="" src={style.photos[0].thumbnail_url} className="thumbnail" onClick={clickHandler} />}
    </div>
  );
}
