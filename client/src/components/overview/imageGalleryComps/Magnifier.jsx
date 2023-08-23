import React, { useState } from 'react';
import { ExpandedModalWrapper, MagnifyingGlass, ExpandedImage, LeftButtonExpand, RightButtonExpand } from '../overviewStyles';

export default function Magnifier({
  mainImg,
  index,
  maxIndex,
  setIndex,
  showLeft,
  showRight
}) {
  const [[x, y], setXY] = useState([500, 500]);
  const [[,], setSize] = useState([0, 0]);
  const [showmag, setShowMag] = useState(undefined);

  const changeHandler = (e) => {
    const element = e.currentTarget;
    const { top, left } = element.getBoundingClientRect();
    const xPos = e.pageX - left - window.pageXOffset;
    const yPos = e.pageY - top - window.pageYOffset;
    setXY([xPos, yPos]);
  };

  const leaveHandler = () => {
    setShowMag(undefined);
  };

  const insideHandler = (e) => {
    const elem = e.currentTarget;
    const { width, height } = elem.getBoundingClientRect();
    setSize([width, height]);
    setTimeout(() => { setShowMag('true'); }, 50);
  };

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

  return (
    <ExpandedModalWrapper>
      <ExpandedImage
        src={mainImg}
        data-testid="expandedImage"
        onMouseEnter={insideHandler}
        onMouseMove={changeHandler}
        onMouseLeave={leaveHandler}
        alt="Zoomed View"
      />
      {showLeft ? (
        <LeftButtonExpand
          data-testid="expandedLeftButton"
          onClick={clickHandlerL}
        >
          GoLeft
        </LeftButtonExpand>
      ) : null}
      {showRight ? (
        <RightButtonExpand
          data-testid="expandedRightButton"
          onClick={clickHandlerR}
        >
          GoRight
        </RightButtonExpand>
      ) : null}
      <MagnifyingGlass x={x} y={y} showmag={showmag} mainimg={mainImg} />
    </ExpandedModalWrapper>
  );
}
