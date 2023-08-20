import React, { useState, useEffect } from 'react';

export default function Quantity({
  selQuantity,
  selSku,
  setSelQuantity
}) {
  const [optionsState, setOptionsState] = useState('-');
  const [showOptions, setShowOptions] = useState(false);
  const [quantityArray, setQuantityArray] = useState([]);
  useEffect(() => {
    if (selSku) {
      const quantity = selSku.quantity;
      let tempQuantityArr = [];
      if (quantity > 15) {
        tempQuantityArr = Array.from(new Array(15).keys(), (x, i) => i + 1);
        setQuantityArray(tempQuantityArr);
      } else {
        tempQuantityArr = Array.from(new Array(quantity).keys(), (x, i) => i + 1);
        setQuantityArray(tempQuantityArr);
      }
      if (selQuantity === '-') {
        setShowOptions(true);
        setSelQuantity(1);
        setOptionsState(1);
      } else {
        setShowOptions(true);
      }
    } else {
      setShowOptions(false);
      setOptionsState('-');
    }
  }, [selSku, selQuantity, setSelQuantity]);
  const handleChange = (event) => {
    setOptionsState(event.target.value);
    setSelQuantity(event.target.value);
  };
  return (
    <div>
      {showOptions
        ? (
          <select
            label="Select Quantity"
            aria-label="Quantity Options"
            className="dropDown"
            value={optionsState}
            onChange={handleChange}
          >
            {quantityArray.map((index) => (
              <option key={index}>{quantityArray[index - 1]}</option>
            ))}
          </select>
        ) : <option>-</option>}
    </div>
  );
}
