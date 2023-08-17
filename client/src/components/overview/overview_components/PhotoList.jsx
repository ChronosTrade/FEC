import React from 'react';
import { ThumbImage, ThumbImageSelect, StylePhotosWrapper } from './stylesListStyling'



export function PhotoListEntry({ style, selStyle, setSelStyle }) {
  const clickHandler = () => {
    setSelStyle(style);
  };
  return (
    <div>
      {(selStyle === style)
        ? <ThumbImageSelect
          role="presentation"
          alt=""
          src={style.photos[0].thumbnail_url}
          className="highlighted"
        /> : <ThumbImage
          role="presentation"
          alt=""
          src={style.photos[0].thumbnail_url}
          className="thumbnail"
          onClick={clickHandler}
        />
      }
    </div>
  );
}

