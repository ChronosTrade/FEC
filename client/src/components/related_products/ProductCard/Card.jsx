import React from 'react';
import { ActionButton, CardWrapper, ProductName, ProductCategory, ProductContainer, ProductPrice, ProductRating, ImageContainer, ProductImage } from './styles';

function Card() {
  const exampleProduct = {
    "id": 40344,
    "campus": "hr-rfp",
    "name": "Camo Onesie",
    "slogan": "Blend in to your crowd",
    "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
    "category": "Jackets",
    "default_price": "140.00",
    "created_at": "2021-08-13T14:38:44.509Z",
    "updated_at": "2021-08-13T14:38:44.509Z",
    "features": [
        {
            "feature": "Fabric",
            "value": "Canvas"
        },
        {
            "feature": "Buttons",
            "value": "Brass"
        }
    ],
  };

  return (
    <CardWrapper>
      <ImageContainer>
        <ActionButton>&#9734;</ActionButton>
        <ProductImage src='https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'/>
      </ImageContainer>
      <ProductContainer>
        <ProductCategory>{exampleProduct.category}</ProductCategory>
        <ProductName>{exampleProduct.name}</ProductName>
        <ProductPrice>${exampleProduct.default_price}</ProductPrice>
        <ProductRating>&#9734;
        &#9734;
        &#9734;
        &#9734;
        &#9734;
        </ProductRating>
      </ProductContainer>
    </CardWrapper>
  );
}

export default Card;
