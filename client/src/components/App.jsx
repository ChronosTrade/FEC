import React, { useState, useMemo } from 'react';
import OverviewMain from './overview/OverviewMain';
import ReviewMain from './reviews/ReviewMain';
import RelatedProductsMain from './related_products/RelatedProductsMain';
import AppContext from './AppContext';
import { GlobalStyles } from './globalStyling';

function App() {
  const [totalRatings, setTotalRatings] = useState(0);
  const [productID, setProductID] = useState(40344);

  const contextValue = useMemo(
    () => ({
      productID,
      setProductID,
      totalRatings,
      setTotalRatings,
    }),
    [productID, setProductID, totalRatings, setTotalRatings],
  );
  return (
    <AppContext.Provider value={contextValue}>
      <GlobalStyles />
        <OverviewMain />
        <ReviewMain />
        <RelatedProductsMain />
    </AppContext.Provider>
  );
}

export default App;
