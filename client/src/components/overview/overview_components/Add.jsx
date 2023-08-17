import React, {useState} from 'react';
import axios from 'axios';

export default function Add({
  selSku, selQuantity
}) {
  const submitHandler = function (event) {
    event.preventDefault();
    const data = {
      sku_id: selSku.sku_id,
      count: selQuantity,
    };
    console.log('data for cart', data);
    axios.post('/cart', data)
      .then(() => {
        console.log('Post Success');
      })
      .catch(() => {
        console.log('Server error, cart not updated');
      });
  };

  return (
    <button type="button" onClick={submitHandler}>Add to Cart</button>
  );

}
