import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { ThemeProvider } from 'styled-components';
import {
  GlobalStyles, lightTheme, darkTheme, ThemeToggleButton,
} from './globalStyling';
import OverviewMain from './overview/OverviewMain';
import ReviewMain from './reviews/ReviewMain';
import RelatedProductsMain from './related_products/RelatedProductsMain';
import AppContext from './AppContext';
import Footer from './Footer';

function App() {
  const [theme, setTheme] = useState(lightTheme);
  const [totalRatings, setTotalRatings] = useState(0);
  const [averageRatings, setAverageRatings] = useState(0);
  const [productID, setProductID] = useState(40351);
  const [styles, setSelStyles] = useState(null);
  const [currentProduct, setCurrentProduct] = useState({});

  useEffect(() => {
    axios.get(`/products/${productID}`)
      .then((response) => {
        setCurrentProduct(response.data);
      })
      .catch(() => {
      });
    const config = {
      params: {
        ID: productID,
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

  const toggleTheme = () => {
    if (theme === lightTheme) {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  };

  const contextValue = useMemo(
    () => ({
      productID,
      totalRatings,
      currentProduct,
      averageRatings,
      setProductID,
      setTotalRatings,
      setCurrentProduct,
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
      setAverageRatings,
    ],
  );

  return (
    <AppContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ThemeToggleButton onClick={toggleTheme}>
          Toggle Theme
        </ThemeToggleButton>
        <OverviewMain styles={styles} />
        <RelatedProductsMain />
        <ReviewMain />
        <Footer />
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
