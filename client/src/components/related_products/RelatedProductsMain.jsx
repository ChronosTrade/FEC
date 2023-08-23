import React, { useState, useEffect, useContext } from 'react';
// import { uniq } from 'lodash';
import axios from 'axios';
import ProductList from './Lists/ProductList';
import Outfit from './Lists/Outfit';
import AppContext from '../AppContext';
import { RelatedProductsWrapper } from './styles';

const uniq = require('lodash/uniq');

function RelatedProductsMain() {
  const { productID, setProductID } = useContext(AppContext);
  const [relatedProducts, setRelatedProducts] = useState([]);

  const getProduct = (productID) => {
    return axios.get(`/products/${productID}`)
      .then((response) => response.data)
      .catch(() => {
        console.log('Unable to retrieve product');
      })
  }

  useEffect(() => {
    axios.get(`/products/${productID}/related`)
      .then((response) => {
        const uniqueIDs = uniq(response.data);
        const filteredIDs = uniqueIDs.filter((id) => id !== productID);
        const productsPromises = filteredIDs.map((product) => getProduct(product));
        return productsPromises;
      })
      .catch(() => console.log('Unable to retrieve related ids'))
      .then((promises) => Promise.all(promises))
      .catch(() => console.log('Unable to retrieve related products'))
      .then((values) => {
        setRelatedProducts(values);
      })
      .catch(() => {
        console.log('Unable to set related products');
      });
  }, [productID]);

  return (
    <div>
      <p>Related Products</p>
      <ProductList products={relatedProducts} />
      <p>Your Outfit</p>
      <Outfit />
    </div>
  );
}

export default RelatedProductsMain;
