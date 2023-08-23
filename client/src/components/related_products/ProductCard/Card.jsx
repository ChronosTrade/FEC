import React, { useState, useEffect, useContext } from 'react';
import { createPortal } from 'react-dom';
import axios from 'axios';
import AppContext from '../../AppContext';
import {
  ActionButton, CardWrapper, ProductName, ProductCategory, ProductContainer, ProductPrice, OldPrice,
  ImageContainer, ProductImage, RemoveButton,
} from './styles';
import StarByProductId from '../../reviews/StarByProductId';
import Comparison from './Comparison';

function Card({product, type, remove}) {
  const [defaultStyle, setDefaultStyle] = useState({})
  const [imageUrl, setImageUrl] = useState('');
  const [productRatings, setProductRatings] = useState(0);
  const { productID, setProductID } = useContext(AppContext);
  const [showModal, setShowModal] = useState(false);
  const [onSale, setOnSale] = useState(false);

  const handleRemoveClick = () => {
    remove(product.id);
  };

  const handleProductClick = () => {
    if (imageUrl === null) {
      alert('Product is unavailable');
    } else {
      setProductID(product.id);
    }
  };

  const getPrice = () => {
    if (defaultStyle !== undefined) {
      return defaultStyle.original_price;
    }
    return product.default_price;
  };

  useEffect(() => {
    const config = {
      params: {
        ID: product.id,
      },
    };
    axios.get('/styles', config)
      .then((response) => {
        const styles = response.data.results.filter((style) => style['default?'] === true);
        setDefaultStyle(styles[0]);
        setImageUrl(response.data.results[0].photos[0].thumbnail_url);
        //If the default style is on sale
        if (styles[0].sale_price !== null) {
          setOnSale(true);
        }
      })
      .catch(() => {
        console.log('Unable to fetch style');
      });
  }, []);

  return (
    <CardWrapper>
      <ImageContainer>
        {type === 'product' && <ActionButton onClick={() => setShowModal(true)}>&#9734;</ActionButton>}
        {type === 'outfit' && <RemoveButton onClick={handleRemoveClick}><span>&#120;</span></RemoveButton>}
        {showModal && createPortal(<Comparison
          name={product.name}
          features={product.features}
          onClose={() => setShowModal(false)}
        />, document.body)}

        <ProductImage src={imageUrl} />
      </ImageContainer>
      <ProductContainer onClick={handleProductClick}>
        <ProductCategory>{product.category}</ProductCategory>
        <ProductName>{product.name}</ProductName>
        {onSale ? (
          <div>
            <ProductPrice className="sale-price">
              $
              {defaultStyle.sale_price}
            </ProductPrice>
            <OldPrice>
              $
              {getPrice}
            </OldPrice>
          </div>
        )
          : (
            <ProductPrice>
              $
              {getPrice()}
            </ProductPrice>
          )}
        <StarByProductId productId={product.id.toString()} />
      </ProductContainer>
    </CardWrapper>
  );
}

export default Card;
