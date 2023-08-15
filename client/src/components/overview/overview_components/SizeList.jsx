import React, { useState, useEffect } from 'react';

export default function Size({
  skusArray,
  skusObject,
  selStyle,
  setSelSize,
  selSize,
  totalStyleQuantity,
  setSelSku
}) {
  const [optionsState, setOptionsState] = useState('Select Size');
  // const [skuMap, setSkuMap] = useState({});
  useEffect(() => {
    setOptionsState('Select Size');
  }, [selStyle]);
  useEffect(() => {
    const sizes = [];
    const sizeMap = {};
    for (let i = 0; i < skusArray.length; i += 1) {
      sizes[i] = skusObject[skusArray[i]].size;
    }
    //setSelSku = skusMap[optionsState]
  }, [selStyle]);
  const handleChange = function (event) {
    setSelSize(event.target.value); // I actually only care about the sku_id, HOW DO I GRAB IT
    setOptionsState(event.target.value);
    console.log(skusObject);
    console.log(event.target.value);
    // I need to update/create dependency for quantity based on the object of skusObj[sku]
  };
  return (
    <div>
      {totalStyleQuantity
        ? (
          <select
            aria-label="Size Options"
            className="dropDown"
            value={optionsState}
            onChange={handleChange}
          >
            <option value="default">Select Size</option>
            {skusArray.map((sku) => (
              <option
                disabled={skusObject[sku].quantity === 0 ? true : null}
                key={sku}
              >
                {skusObject[sku].size}
              </option>
            ))}
          </select>
        ) : <h2>Out of Stock</h2>}
    </div>

  );
}
