import React from 'react';
import { ListWrapper, ListContainer, RightButton, ListTitle } from './styles';
import Card from '../ProductCard/Card';

function ProductList() {
  return (
    <ListWrapper>
      <ListTitle>Related Products</ListTitle>
      <ListContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <RightButton>&#10148;</RightButton>
      </ListContainer>
    </ListWrapper>
  );
}

export default ProductList;
