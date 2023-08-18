import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import OverviewMain from './overview/OverviewMain';
import ReviewMain from './reviews/ReviewMain';
import RelatedProductsMain from './related_products/RelatedProductsMain';
import AppContext from './AppContext';
import UserContext from './UserContext';
import { GlobalStyles } from './globalStyling';

function App() {
  const [totalRatings, setTotalRatings] = useState(0);
  const [productID, setProductID] = useState(40344);
  const [currentProduct, setCurrentProduct] = useState({})

  const getCurrentProduct = () => {
    return axios.get(`/products/${productID}`)
      .then((response) => setCurrentProduct(response.data))
      .catch(() => {
        console.log('Unable to retrieve product');
      })
  }

  const contextValue = useMemo(
    () => ({
      productID,
      setProductID,
      totalRatings,
      setTotalRatings,
    }),
    [productID, setProductID, totalRatings, setTotalRatings],
  );

  const userContextValue = useMemo(
    () => ({
      currentProduct,
      setCurrentProduct
    }),
    [currentProduct, setCurrentProduct]
  )

  useEffect(() =>{
    getCurrentProduct();
  },[])

  return (
    <AppContext.Provider value={contextValue}>
      <UserContext.Provider value={userContextValue}>
        <GlobalStyles />
          <OverviewMain />
          <ReviewMain />
          <RelatedProductsMain />
      </UserContext.Provider>
    </AppContext.Provider>
  );
}

export default App;
