import React, { forwardRef } from 'react';
import axios from 'axios';

import { AddToCart } from '../overviewStyles';

const Add = forwardRef(({
  selSku,
  selQuantity,
  showButton,
  setSizeNotice,
}, ref) => {
  const submitHandler = function submitHandler(event) {
    event.preventDefault();
    if (!selSku) {
      ref.current.focus();
      setSizeNotice(true);
    } else {
      const data = {
        sku_id: selSku.sku_id,
        count: selQuantity,
      };
      axios.post('/cart', data);
    }
  };
  return (
    <div>
      {showButton
        ? (
          <AddToCart
            data-testid="add-to-cart"
            onClick={submitHandler}
            type="button"
          >
            Add to Cart
          </AddToCart>
        ) : null}
    </div>
  );
});

export default Add;
