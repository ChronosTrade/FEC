import React, { useState, useMemo } from 'react';
import OverviewMain from './overview/OverviewMain';
import ReviewMain from './reviews/ReviewMain';
import RelatedProductsMain from './related_products/RelatedProductsMain';
import AppContext from './AppContext';

function App() {
  const [totalRatings, setTotalRatings] = useState(0);
  const [productID, setProductID] = useState(40351);

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
      <OverviewMain />
      <ReviewMain />
      <RelatedProductsMain />
    </AppContext.Provider>
  );
}

export default App;
