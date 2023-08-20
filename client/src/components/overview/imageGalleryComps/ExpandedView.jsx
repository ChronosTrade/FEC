import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import IconScroll from './IconScroll';
import { ExpandedImage } from '../overviewStyles';

export default function ExpandedView({
  index,
  mainImg,
  maxIndex,
  showLeft,
  showRight,
  setIndex,
  setShowExp,
}) {
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
      <IconScroll
        index={index}
        setIndex={setIndex}
      />
      <ExpandedImage
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
