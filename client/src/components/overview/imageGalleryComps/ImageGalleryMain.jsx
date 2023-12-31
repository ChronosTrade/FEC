import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import {
  LeftColumn, LeftButton, RightButton, DefaultImageWrapper, ScrollContainer,
} from '../overviewStyles';
import ImageScroll from './ImageScroll';

export default function ImageGalleryMain({
  selStyle,
  productID,
  index,
  photos,
  mainImg,
  maxIndex,
  showLeft,
  showRight,
  setIndex,
  setShowExp,
  setShowLeft,
  setShowRight,
  setMainImg,
  setPhotos,
  setMaxIndex,
  setModalOpen,
}) {
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
  }, [index, maxIndex, photos, setIndex, setMainImg, setShowRight, setShowLeft]);

  useEffect(() => {
    setIndex(0);
    setShowLeft(false);
    setShowRight(true);
  }, [productID, setShowLeft, setShowRight, setIndex]);

  const clickHandlerL = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const clickHandlerR = () => {
    if (index < maxIndex) {
      setIndex(index + 1);
    }
  };

  const clickHandlerMain = () => {
    setShowExp(true);
    setModalOpen('true');
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    document.body.style.overflow = 'hidden';
  };

  const keyHandlerMain = (event) => {
    if (event.charCode === 13 || event.charCode === 32) {
      console.log('hello');
      setShowExp(true);
      setModalOpen('true');
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      document.body.style.overflow = 'hidden';
    }
  };

  return (
    <>
      <LeftColumn>
        <ScrollContainer>
          <ImageScroll
            selIndex={index}
            photos={photos}
            setIndex={setIndex}
          />
        </ScrollContainer>
      </LeftColumn>
      <DefaultImageWrapper>
        <div
          tabIndex={0}
          role="button"
          onClick={clickHandlerMain}
          onKeyPress={keyHandlerMain}
        >
          <img
            style={{
              width: '650px',
              height: '770px',
              objectFit: 'cover',
            }}
            alt="Main View"
            data-testid="mainImage"
            className="mainImg"
            src={mainImg}
          />
        </div>
        {showLeft ? (
          <LeftButton
            onClick={clickHandlerL}
          >
            <FontAwesomeIcon
              icon={faChevronLeft}
              size="1x"
            />
          </LeftButton>
        ) : null}
        {showRight ? (
          <RightButton
            onClick={clickHandlerR}
          >
            <FontAwesomeIcon
              icon={faChevronRight}
              size="1x"
            />
          </RightButton>
        ) : null}
      </DefaultImageWrapper>
    </>
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
