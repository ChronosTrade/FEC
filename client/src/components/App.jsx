import React, { useState, useMemo } from 'react';
import ReviewMain from './reviews/ReviewMain';
import RelatedProductsMain from './related_products/RelatedProductsMain';
import AppContext from './AppContext';

function App() {
  const [totalRatings, setTotalRatings] = useState(0);

  const contextValue = useMemo(
    () => ({ totalRatings, setTotalRatings }),
    [totalRatings, setTotalRatings],
  );

  return (
    <AppContext.Provider value={contextValue}>
      <ReviewMain />
      <RelatedProductsMain />
    </AppContext.Provider>
  );
}

export default App;
