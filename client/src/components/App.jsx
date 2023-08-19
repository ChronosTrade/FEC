import React, {
  useState, useEffect, useMemo, useRef,
} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import axios from 'axios';
import { GlobalStyles } from './globalStyling';
import OverviewMain from './overview/OverviewMain';
import ReviewMain from './reviews/ReviewMain';
import RelatedProductsMain from './related_products/RelatedProductsMain';
import AppContext from './AppContext';

function App() {
  const [totalRatings, setTotalRatings] = useState(0);
  const [averageRatings, setAverageRatings] = useState(0);
  const [productID, setProductID] = useState(40344);
  const [currentProduct, setCurrentProduct] = useState({});
  const refRatings = useRef(null);

  useEffect(() => {
    axios.get(`/products/${productID}`)
      .then((response) => setCurrentProduct(response.data))
      .catch(() => {
        console.log('Unable to retrieve product');
      });
  }, [productID]);

  const contextValue = useMemo(
    () => ({
      productID,
      totalRatings,
      currentProduct,
      setProductID,
      setTotalRatings,
      setCurrentProduct,
      averageRatings,
      setAverageRatings,
    }),
    [
      productID,
      totalRatings,
      currentProduct,
      setProductID,
      setTotalRatings,
      setCurrentProduct,
      averageRatings,
      setAverageRatings,
    ],
  );

  return (
    <AppContext.Provider value={contextValue}>
      <GlobalStyles />
      <OverviewMain refRatings={refRatings} />
      <ReviewMain refRatings={refRatings} />
      <RelatedProductsMain />
    </AppContext.Provider>
  );
}

export default App;
