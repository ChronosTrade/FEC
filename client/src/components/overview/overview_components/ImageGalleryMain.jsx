import React, { useState, useEffect } from 'react';
import { MainImage } from './ImageMainStyles'

export default function ImageGalleryMain({
  selStyle,
  productID
}) {
  const [index, setIndex] = useState(0);
  const [mainImg, setMainImg] = useState('');
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  useEffect(() => {
    console.log(selStyle);
    if (Object.keys(selStyle).length > 0) {
      if (selStyle.photos.length === 1) {
        setShowRight(false);
        setShowLeft(false);
        setIndex(0);
        setMainImage(selStyle.photos[0].url);
      } else if (index >= selStyle.photos.length - 1) {
        console.log('max to less catch');
        console.log('index in max to less', index);
        setIndex(selStyle.photos.length - 1);
        setMainImg(selStyle.photos[selStyle.photos.length - 1].url);
        setShowRight(false);
      } else if (index < selStyle.photos.length - 1 && showRight === false) {
        console.log('min to more catch');

        setShowRight(true);
        setMainImg(selStyle.photos[index].url);
      } else {
        console.log('No change catch');
        console.log(index);
        setMainImg(selStyle.photos[index].url);
      }
    }
  }, [selStyle, index])

  useEffect(() => {
    setIndex(0);
    setShowLeft(false);
    setShowRight(true);
  }, [productID])

  const clickHandlerL = function () {
    if (index > 1) {
      setIndex(index - 1);
    } else if (index === 1) {
      setIndex(index - 1);
      setShowLeft(false);
    }
    if (showRight === false) {
      setShowRight(true);
    }
  }

  const clickHandlerR = function () {
    if (index < selStyle.photos.length - 1) {
      setIndex(index + 1);
    }      if (index === selStyle.photos.length -2) {
      setIndex(index + 1);
      setShowRight(false);
    }
    if (showLeft === false) {
      setShowLeft(true);
    }
    // setMainImg[selStyle.photos[tempIndex].url]
    // console.log(selStyle.photos[tempIndex].url);
  }

  return (
    <div>
      {/* <ImageGallery
        index={index}
        selStyle={selStyle}
      /> */}

      <MainImage
        src={mainImg}
      />
      {showLeft ? <button onClick={clickHandlerL}>GoLeft</button> : null}
      {showRight ? <button onClick={clickHandlerR}>GoRight</button> : null}

    </div>
  );
}

