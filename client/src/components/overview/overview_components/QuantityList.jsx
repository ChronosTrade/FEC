import React, { useState, useEffect } from 'react';

export default function Quantity({
  skusArray,
  skusObject,
  selQuantity,
  selSize,
  selSku,
  setSelQuantity,
}) {
  const [optionsState, setOptionsState] = useState('-');
  const [showOptions, setShowOptions] = useState(false);
  const [quantityArray, setQuantityArray] = useState([]);
  useEffect(() => {
    console.log(selSku);
    if (selSku) {
      const [quantity] = selSku.quantity;
      if (quantity > 15) {
        setQuantityArray(Array.from(new Array(15).keys(), (x, i) => i + 1));
      } else {
        setQuantityArray(Array.from(new Array(quantity).keys(), (x, i) => i + 1));
      }
    }
    if (selSize === 'Select Size') {
      setShowOptions(false);
      setOptionsState('-');
    } else if (selQuantity === '-') {
      setShowOptions(true);
      setSelQuantity(1);
    } else {
      setShowOptions(true);
    }
  }, [selSku]);
  const handleChange = function (event) {
    setOptionsState(event.target.value);
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
            <option value="default">-</option>
            {quantityArray.map((index) => (
              <option>{quantityArray[index]}</option>
            ))}
          </select>
        ) : <option>-</option>}
    </div>

  );
}
