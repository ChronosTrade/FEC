import React from 'react';
import { CardWrapper, ProductName, ProductCategory, ProductPrice } from './styles';

function Card() {
  return (
    <CardWrapper>
      <ProductName>Product Name</ProductName>
      <ProductCategory>Product Category</ProductCategory>
      <ProductPrice>Product Price</ProductPrice>
    </CardWrapper>
  );
}

export default Card;
