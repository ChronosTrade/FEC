import React, {useState, useContext} from 'react';
import Card from './ProductCard/Card';
import ProductList from './Lists/ProductList';
import Outfit from './Lists/Outfit';
import AppContext from '../AppContext';

function RelatedProductsMain() {
  const { totalRatings, setTotalRatings } = useContext(AppContext);

  return (
    <div>
      <ProductList />
      {/* <Outfit /> */}
      {/* <Card /> */}
    </div>
  );
}

export default RelatedProductsMain;
