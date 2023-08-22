import React, { useState, useEffect } from 'react';
import { PriceStyle, SaleStyle } from '../overviewStyles';

export default function Price({
  selStyle,
}) {
  const [price, setPrice] = useState(0);
  const [sale, setSale] = useState(null);
  const [showSale, setShowSale] = useState(false);
  useEffect(() => {
    if (!selStyle.sale_price) {
      setPrice(selStyle.original_price);
      setSale(null);
      setShowSale(false);
    } else {
      setPrice(selStyle.original_price);
      setSale(selStyle.sale_price);
      setShowSale(true);
    }
  }, [selStyle]);
  return (
    <div>
      {!showSale
        ? (
          <PriceStyle data-testid="price">
            {price}
          </PriceStyle>
        ) : (
          <SaleStyle data-testid="sale">
            {price}
            {sale}
          </SaleStyle>
        )}
    </div>
  );
}
