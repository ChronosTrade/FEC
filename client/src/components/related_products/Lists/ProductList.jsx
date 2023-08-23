import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  ListWrapper, ListCarousel, CardContainer, LeftButton, RightButton,
} from './styles';
import Card from '../ProductCard/Card';

function ProductList({ products }) {
  const cardWidth = 220;
  const divRef = useRef(null);
  const [scrollValue, setScrollValue] = useState(0);
  const [maxWidth, setMaxWidth] = useState(0);

  const handleArrowClick = (direction) => {
    if (direction === 'right') {
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

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      campus: PropTypes.string,
      name: PropTypes.string,
      slogan: PropTypes.string,
      description: PropTypes.string,
      category: PropTypes.string,
      default_price: PropTypes.string,
      features: PropTypes.arrayOf(
        PropTypes.shape({
          feature: PropTypes.string,
          value: PropTypes.string,
        }),
      ),
      created_at: PropTypes.string,
      updated_at: PropTypes.string,
    }),
  ).isRequired,
};
