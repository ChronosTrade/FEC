import React, { useState, useEffect, forwardRef } from 'react';
import axios from 'axios';

const Add = forwardRef(function Add({
  selSku,
  selQuantity,
  showButton,
  setSizeNotice,
}, ref) {
  const [enableSize, setEnableSize] = useState(true);
  const submitHandler = function () {
    event.preventDefault();
    if (!selSku) {
      ref.current.focus();
      setSizeNotice(true);
    } else {
      const data = {
        sku_id: selSku.sku_id,
        count: selQuantity,
      };
      axios.post('/cart', data)
        .then(() => {
          console.log('Post Success');
        })
        .catch(() => {
          console.log('Server error, cart not updated');
        });
    }
  };

  return (
    <div>
      {showButton
        ?
        <button
          onClick={submitHandler}
          type="button">Add to Cart</button> :
        null
      }
    </div>
  );
});

export default Add;
/*
If the default ‘Select Size’ is currently selected: Clicking this button should open the size dropdown, and a message should appear above the dropdown stating “Please select size”.
If there is no stock: This button should be hidden
If both a valid size and valid quantity are selected: Clicking this button will add the product to the user’s cart.
*/