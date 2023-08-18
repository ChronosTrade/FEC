import React, { useState, useEffect, useContext, useMemo } from 'react';
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

  const getRelated = () => {
    axios.get(`/products/${productID}/related`)
      .then((response) => {
        var productsPromises = response.data.map((product) => {
          return getProduct(product)
        })
        Promise.all(productsPromises)
          .then((values) => {
            setRelatedProducts(values);
          })

        //setRelatedProducts(response.data);
      })
      .catch(() => {
        console.log('Unable to retrieve related products');
      })
  }

  useEffect(() => {
    getRelated();
  },[productID]);

  return (
    <div>
      <ProductList products={relatedProducts} />
      <Outfit />
    </div>
  );
}

export default RelatedProductsMain;
