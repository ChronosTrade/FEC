import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { ActionButton, CardWrapper, ProductName, ProductCategory, ProductContainer, ProductPrice, ProductRating, ImageContainer, ProductImage } from './styles';

function Card({product}) {
  const [defaultStyle, setDefaultStyle] = useState({})
  const [imageUrl, setImageUrl] = useState('');

  const getDefaultStyle = () => {
    const config = {
      params: {
        ID: product.id,
      },
    };
    axios.get('/styles', config)
    .then((response) => {
      const styles = response.data.results.filter((style) => style['default?'] === true);
      console.log(styles[0])
      setDefaultStyle(styles[0]);
      setImageUrl(response.data.results[0].photos[0].thumbnail_url)
    })
    .catch(() => {
      console.log('Unable to fetch style')
    })
  }

  useEffect(() => {
    getDefaultStyle();
  },[]);


  return (
    <CardWrapper>
      <ImageContainer>
        <ActionButton>&#9734;</ActionButton>
        <ProductImage src={imageUrl}/>
      </ImageContainer>
      <ProductContainer>
        <ProductCategory>{product.category}</ProductCategory>
        <ProductName>{product.name}</ProductName>
        {defaultStyle !== undefined ? <ProductPrice>${defaultStyle.original_price}</ProductPrice>: <ProductPrice>${product.default_price}</ProductPrice> }
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
