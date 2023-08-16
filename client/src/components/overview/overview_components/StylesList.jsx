import React from 'react';
import { ThumbImage, ThumbImageSelect, StylePhotosWrapper } from './stylesListStyling'

export default function StylesList({
  selStyle,
  styles,
  setSelStyle
}) {
  return (
    <StylePhotosWrapper role="presentation">
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
    </StylePhotosWrapper>
  );
}

export function StylesListEntry({ style, selStyle, setSelStyle }) {
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



// import React, { useState } from 'react';
// import { ModalImage, ModalOverlay, ThumbnailImage } from './styles';

// const Thumbnail = ({ imageUrl }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//     <div>
//       <ThumbnailImage
//         src={imageUrl}
//         alt='Review Thumbnail'
//         onClick={() => setIsModalOpen(true)}
//       />
//       {isModalOpen && (
//         <ModalOverlay onClick={() => setIsModalOpen(false)}>
//           <ModalImage src={imageUrl} alt='Full Review' />
//         </ModalOverlay>
//       )}
//     </div>
//   );
// };

// export default Thumbnail;
