import React, { useState, useEffect } from 'react';
import { PriceWrapper } from '../overviewStyles';

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
          <PriceWrapper>
            <p className="price" data-testid="price">
              $
              {price}
            </p>
          </PriceWrapper>
        ) : (
          <PriceWrapper>
            <p className="sale" data-testid="sale">
              $
              {sale}
            </p>
            <p className="priceSale">
              $
              {price}
            </p>
          </PriceWrapper>
        )}
    </div>
  );
}
