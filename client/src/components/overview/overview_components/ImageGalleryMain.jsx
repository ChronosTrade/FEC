import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { MainImage } from './ImageMainStyles';
import ImageScroll from './ImageScroll';

export default function ImageGalleryMain({
  selStyle,
  productID,
}) {
  const [index, setIndex] = useState(0);
  const [mainImg, setMainImg] = useState('');
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);
  const [maxIndex, setMaxIndex] = useState(0);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    if (Object.keys(selStyle).length) {
      setMaxIndex(selStyle.photos.length - 1);
      setPhotos(selStyle.photos);
    }
  }, [selStyle]);

  useEffect(() => {
    if (photos.length > 0) {
      if (maxIndex === 0) {
        setShowLeft(false);
        setShowRight(false);
        setIndex(0);
        setMainImg(photos[0].url);
      }
      if (index > maxIndex) {
        setIndex(maxIndex);
      }
      if (index > 0) {
        setShowLeft(true);
      }
      if (index === 0) {
        setShowLeft(false);
      }
      if (index === maxIndex) {
        setShowRight(false);
      }
      if (index < maxIndex) {
        setShowRight(true);
      }
      if (photos[index]) {
        setMainImg(photos[index].url);
      }
    }
  }, [index, maxIndex, photos]);

  useEffect(() => {
    setIndex(0);
    setShowLeft(false);
    setShowRight(true);
  }, [productID]);

  const clickHandlerL = function clickHandlerL() {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const clickHandlerR = function clickHandlerR() {
    if (index < maxIndex) {
      setIndex(index + 1);
    }
  };

  return (
    <div>
      <ImageScroll
        selIndex={index}
        photos={photos}
        setIndex={setIndex}
      />

      <MainImage
        src={mainImg}
      />
      {showLeft ? (
        <button
          type="button"
          onClick={clickHandlerL}
        >
          GoLeft
        </button>
      ) : null}
      {showRight ? (
        <button
          type="button"
          onClick={clickHandlerR}
        >
          GoRight
        </button>
      ) : null}

    </div>
  );
}

// ImageGalleryMain.propTypes = {
//   // selStyle: PropTypes.shape({
//   //   default: PropTypes.boolean,
//   //   name: PropTypes.string,
//   //   // original_price: PropTypes.string,
//   //   // photos Array of
//   //   // sale_price: PropTypes.string,
//   //   // skus:
//   //   // style_id: PropTypes.integer
//   // }),
//   productID: PropTypes.shape.isRequired,
// };
