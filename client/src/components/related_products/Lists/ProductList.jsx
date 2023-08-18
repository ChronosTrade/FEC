import React, {useState, useEffect, useContext, useRef} from 'react';
import { ListWrapper, ListCarousel, CardContainer, LeftButton, RightButton, ListTitle } from './styles';
import Card from '../ProductCard/Card';

function ProductList({ products }) {
  const cardWidth = 220;
  const gap = 20;
  const divRef = useRef(null);
  const [scrollValue, setScrollValue] = useState(0);
  const handleArrowClick = (direction) => {
    if (direction === 'right') {
      setScrollValue( divRef.current.scrollLeft += (gap*2));
    } else {
      setScrollValue(divRef.current.scrollLeft -= (gap*2));
    }
  };

  return (
    <ListWrapper>
      <ListTitle>Related Products</ListTitle>
      {scrollValue > 0 && <LeftButton onClick={() => { handleArrowClick('left'); }}>&#10094;</LeftButton>}
      <ListCarousel ref={divRef}>
        <CardContainer>
          {products.map((product) => <Card key={product.id} product={product} />)}
        </CardContainer>
      </ListCarousel>
      {scrollValue < 1000 && <RightButton onClick={() => { handleArrowClick('right'); }}>&#10095;</RightButton>}
    </ListWrapper>
  );
}

export default ProductList;
