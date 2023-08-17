import React from 'react';
import { ThumbImage, ThumbImageSelect, StylePhotosWrapper } from './stylesListStyling'

export default function PhotoList({
  selStyle,
}) {
  return (
    useEffect(() => {
      if (Object.keys(selStyle).length !== 0) {
        setSizeOptions(selStyle.skus);
        setSkus(Object.keys(selStyle.skus));
        const tempSizeMap = {};
        const tempSizeArr = [];
        const set = {};
        Object.keys(selStyle.skus).forEach((key) => {
          if (!set[selStyle.skus[key].size]) {
            tempSizeArr.push(key);
            tempSizeMap[selStyle.skus[key].size] = {
              sku_id: key,
              quantity: selStyle.skus[key].quantity,
            };
          }
          set[selStyle.skus[key].size] = true;
        });
        setSizeMap(tempSizeMap);
        setSkus(tempSizeArr);
      }
    }, [selStyle]);

    <ImagePhotosWrapper role="presentation">
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
    </ImagePhotosWrapper>
  );
}

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

