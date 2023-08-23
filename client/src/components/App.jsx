import React, {
  useState, useEffect, useMemo, useRef,
} from 'react';
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
  const [styles, setSelStyles] = useState(null);
  const [currentProduct, setCurrentProduct] = useState({});
  const refRatings = useRef(null);

  useEffect(() => {
    axios.get(`/products/${productID}`)
      .then((response) => setCurrentProduct(response.data))
      .catch(() => {
        console.log('Unable to retrieve product');
      });
    const config = {
      params: {
        ID: 40344,
        // ID: productID,
      },
    };
    axios.get('/styles', config)
      .then((response) => {
        if (response.data.results.length > 0) {
          setSelStyles(response.data.results);
        }
      })
      .catch(() => {
      });
  }, [productID]);

  const contextValue = useMemo(
    () => ({
      productID,
      totalRatings,
      currentProduct,
      averageRatings,
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
      averageRatings,
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
      <OverviewMain styles={styles} refRatings={refRatings} />
      <ReviewMain refRatings={refRatings} />
      <RelatedProductsMain />
    </AppContext.Provider>
  );
}

export default App;
