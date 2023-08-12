import React, {useState, useContext} from 'react';
import StyledCard from './ProductCard/Card';
import AppContext from '../AppContext';

function RelatedProductsMain() {
  const { totalRatings, setTotalRatings } = useContext(AppContext);

  return (
    <div>
      <StyledCard />
    </div>
  );
}

export default RelatedProductsMain;
