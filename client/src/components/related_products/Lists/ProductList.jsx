import React, {useState, useContext, useRef} from 'react';
import axios from 'axios';
import { ListWrapper, ListCarousel, CardContainer, LeftButton, RightButton, ListTitle } from './styles';
import Card from '../ProductCard/Card';

function ProductList() {
  const cardWidth = 220;
  const gap = 20;
  const divRef = useRef(null);
  const [scrollValue, setScrollValue] = useState(0);

  const handleArrowClick = (direction) => {
    // console.log(divRef.current.scrollLeft);
    if (direction === 'right') {
      setScrollValue(cardWidth + gap);
      divRef.current.scrollLeft += (scrollValue);
    } else {
      setScrollValue(cardWidth + gap);
      divRef.current.scrollLeft -= (scrollValue);
    }
  };
  return (
    <ListWrapper>
      <ListTitle>Related Products</ListTitle>
      <ListCarousel>
        {scrollValue > 0 && <LeftButton onClick={() => { handleArrowClick('left'); }}>&#10094;</LeftButton>}
        <CardContainer ref={divRef}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardContainer>
        <RightButton onClick={() => { handleArrowClick('right'); }}>&#10095;</RightButton>
      </ListCarousel>
    </ListWrapper>
  );
}

export default ProductList;
