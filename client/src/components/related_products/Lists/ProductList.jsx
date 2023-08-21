import React, { useState, useEffect, useRef } from 'react';
import {
  ListWrapper, ListCarousel, CardContainer, LeftButton, RightButton, ListTitle,
} from './styles';
import Card from '../ProductCard/Card';

function ProductList({ products }) {
  const cardWidth = 220;
  // const gap = 20;
  const divRef = useRef(null);
  const [scrollValue, setScrollValue] = useState(0);
  const [maxWidth, setMaxWidth] = useState(0);



  const handleArrowClick = (direction) => {
    if (direction === 'right') {
      console.log(scrollValue);
      setScrollValue(divRef.current.scrollLeft += (cardWidth));
    } else {
      setScrollValue(divRef.current.scrollLeft -= (cardWidth));
    }
  };

  useEffect(() => {
    if (products.length > 4) {
      setMaxWidth((products.length - 4) * 220 + (220 - 2));
    } else {
      setMaxWidth((0));
    }
  }, [products.length]);

  return (
    <ListWrapper>
      {/* <ListTitle>Related Products</ListTitle> */}
      {scrollValue > 0 && <LeftButton onClick={() => { handleArrowClick('left'); }}>&#10094;</LeftButton>}
      <ListCarousel ref={divRef}>
        <CardContainer>
          {products.map((product) => <Card key={product.id} product={product} type="product" />)}
        </CardContainer>
      </ListCarousel>
      {scrollValue < maxWidth && <RightButton onClick={() => { handleArrowClick('right'); }}>&#10095;</RightButton>}
    </ListWrapper>
  );
}

export default ProductList;
