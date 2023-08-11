import React, { useState, useMemo } from 'react';
import ReviewMain from './reviews/ReviewMain';
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
    </AppContext.Provider>
  );
}

export default App;
