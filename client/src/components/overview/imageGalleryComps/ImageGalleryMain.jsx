import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  MainImage, ModalBackground, ExpandedModal, ImageGalleryWrapper, DefaultImageWrapper,
} from '../overviewStyles';
import ImageScroll from './ImageScroll';
import ExpandedView from './ExpandedView';

export default function ImageGalleryMain({
  selStyle,
  productID,
}) {
  const [index, setIndex] = useState(0);
  const [mainImg, setMainImg] = useState('');
  const [maxIndex, setMaxIndex] = useState(0);
  const [photos, setPhotos] = useState([]);
  const [showExp, setShowExp] = useState(false);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

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

  useEffect(() => {
    if (showExp === false) {
      // document.body.style.overflow = 'unset';
    }
  }, [showExp]);

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

  const clickHandlerMain = function clickHandlerMain() {
    setShowExp(true);
    // document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowExp(false);
  };

  return (
    <ImageGalleryWrapper>
      <ImageScroll
        selIndex={index}
        photos={photos}
        setIndex={setIndex}
      />
      {showExp ? (
        <>
          <ModalBackground onClick={closeModal} />
          <ExpandedModal>
            <ExpandedView
              index={index}
              mainImg={mainImg}
              maxIndex={maxIndex}
              showLeft={showLeft}
              showRight={showRight}
              setIndex={setIndex}
              setShowExp={setShowExp}
            />
          </ExpandedModal>
        </>
      ) : null}
      <DefaultImageWrapper>
        <img
          alt=""
          className="mainImg"
          role="presentation"
          src={mainImg}
          onClick={clickHandlerMain}
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
      </DefaultImageWrapper>
    </ImageGalleryWrapper>

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
