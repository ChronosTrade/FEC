import React, { useState, useEffect } from 'react';

export default function Size({
  selStyle,
  totalStyleQuantity,
  setSelSku,
}) {
  // The optionsState is the selected state/value on the dropdown list
  const [optionsState, setOptionsState] = useState('Select Size');
  // The skusObject is an object containing all of the skus(sizes) for a selected style.
  const [skusObject, setSizeOptions] = useState({});
  // The skusArray allows us to map each sku(size) to dropdown list options.
  // Because the skusObject is an object, we need to convert the sizes to an array.
  const [skusArray, setSkus] = useState([]);
  // The sizeMap object was created in order to check for duplicate sizes (bad data) from API
  const [sizeMap, setSizeMap] = useState({});

  useEffect(() => {
    setOptionsState('Select Size');
    setSelSku(null);
    if (Object.keys(selStyle).length !== 0) {
      setSizeOptions(selStyle.skus);
      setSkus(Object.keys(selStyle.skus));
      const tempSizeMap = {};
      const tempSizeArr = [];
      const set = {};
      Object.keys(selStyle.skus).forEach((key) => {
        if (!set[selStyle.skus[key].size]) {
          tempSizeArr.push(key);
          tempSizeMap[selStyle.skus[key].size] = {
            sku_id: key,
            quantity: selStyle.skus[key].quantity,
          };
        }
        set[selStyle.skus[key].size] = true;
      });
      setSizeMap(tempSizeMap);
      setSkus(tempSizeArr);
    }
  }, [selStyle]);
  const handleChange = function (event) {
    setOptionsState(event.target.value);
    const tempSkuObj = {
      sku_id: event.target.value,
      quantity: skusObject[event.target.value].quantity
    }
    setSelSku(tempSkuObj);
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
                value={sku}
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
