import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { ActionButton, CardWrapper, ProductName, ProductCategory, ProductContainer, ProductPrice, ProductRating, ImageContainer, ProductImage } from './styles';
import StarRating from '../../reviews/StarRating';

function Card({product}) {
  const [defaultStyle, setDefaultStyle] = useState({})
  const [imageUrl, setImageUrl] = useState('');
  const [productRatings, setProductRatings] = useState(0);

  const getDefaultStyle = () => {
    const config = {
      params: {
        ID: product.id,
      },
    };
    axios.get('/styles', config)
    .then((response) => {
      const styles = response.data.results.filter((style) => style['default?'] === true);
      setDefaultStyle(styles[0]);
      setImageUrl(response.data.results[0].photos[0].thumbnail_url)
    })
    .catch(() => {
      console.log('Unable to fetch style')
    })
  }

  const getRating = () => {
    const config = {
      params: {
        product_id: product.id,
      },
    };
    axios.get('/reviews/meta', config)
      .then((response) => {
        const ratings = response.data.ratings;
        const totalRatings = Object.keys(ratings).reduce(
          (acc, rating) => acc + Number(ratings[rating]),
          0
        );
        const averageRating =
        Object.keys(ratings).reduce(
          (acc, rating) => acc + Number(rating) * Number(ratings[rating]),
          0
        ) / totalRatings;

        setProductRatings(averageRating)

      })
      .catch(() => {
        console.log('Unable to fetch rating');
      })
  }

  useEffect(() => {
    getRating()
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
        <StarRating rating={productRatings} size='1rem'/>
        {/* <ProductRating>&#9734;
        &#9734;
        &#9734;
        &#9734;
        &#9734;
        </ProductRating> */}
      </ProductContainer>
    </CardWrapper>
  );
}

export default Card;
