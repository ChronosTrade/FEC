import React, { useState, useEffect, useContext } from 'react';
import { uniq } from 'lodash';
import axios from 'axios';
import ProductList from './Lists/ProductList';
import Outfit from './Lists/Outfit';
import AppContext from '../AppContext';

function RelatedProductsMain() {
  const { totalRatings, setTotalRatings } = useContext(AppContext);
  const { productID, setProductID } = useContext(AppContext);
  const [currentProduct, setCurrentProduct]  = useState({});
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
        const uniqueIDs = _.uniq(response.data);
        const productsPromises = uniqueIDs.map((product) => getProduct(product));
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
      <ProductList products={relatedProducts} />
      <Outfit />
    </div>
  );
}

export default RelatedProductsMain;
