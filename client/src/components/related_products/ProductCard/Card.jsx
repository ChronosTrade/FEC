import React, {useState, useEffect, useContext} from 'react';
import { createPortal } from 'react-dom';
import AppContext from '../../AppContext';
import axios from 'axios';
import { ActionButton, CardWrapper, ProductName, ProductCategory, ProductContainer, ProductPrice, ProductRating, ImageContainer, ProductImage, RemoveButton } from './styles';
import StarByProductId from '../../reviews/StarByProductId';
import Comparison from './Comparison';

function Card({product, type}) {
  const [defaultStyle, setDefaultStyle] = useState({})
  const [imageUrl, setImageUrl] = useState('');
  const [productRatings, setProductRatings] = useState(0);
  const { productID, setProductID } = useContext(AppContext);
  const [showModal, setShowModal] = useState(false);

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

  useEffect(() => {
    getDefaultStyle();
  },[]);


  return (
    <CardWrapper>
      <ImageContainer>
        {type === 'product' && <ActionButton onClick={() => setShowModal(true)}>&#9734;</ActionButton>}
        {type === 'outfit' && <RemoveButton ><span>&#120;</span></RemoveButton>}
        {showModal && createPortal(
          <Comparison name={product.name} features={product.features} onClose={ ()=> setShowModal(false)} />,
          document.body
        )}

        <ProductImage src={imageUrl}/>
      </ImageContainer>
      <ProductContainer onClick={() => setProductID(product.id)}>
        <ProductCategory>{product.category}</ProductCategory>
        <ProductName>{product.name}</ProductName>
        {defaultStyle !== undefined ? <ProductPrice>${defaultStyle.original_price}</ProductPrice>: <ProductPrice>${product.default_price}</ProductPrice> }
        <StarByProductId productId={product.id.toString()}/>
      </ProductContainer>
    </CardWrapper>
  );
}

export default Card;
