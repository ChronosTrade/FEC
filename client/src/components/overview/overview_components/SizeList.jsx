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
  // The sizeMap object was created in order to have an object with the format: {size: sku_id}
  // We need to pass the selected Sku {setSelSku} (which implies the size) to OverviewMn.
  // Since the optionsState object & associated dropdown target value is listed in sizes (S, M...)
  // I needed a way to grab the sku @ a given size.
  const [sizeMap, setSizeMap] = useState({});

  useEffect(() => {
    setOptionsState('Select Size');
    setSelSku(null);
    if (Object.keys(selStyle).length !== 0) {
      setSizeOptions(selStyle.skus);
      setSkus(Object.keys(selStyle.skus));
      const sizes = {};
      Object.keys(selStyle.skus).forEach((key) => {
        sizes[selStyle.skus[key].size] = {
          sku_id: key,
          quantity: selStyle.skus[key].quantity,
        };
      });
      setSizeMap(sizes);
    }
  }, [selStyle]);
  const handleChange = function (event) {
    setOptionsState(event.target.value);
    setSelSku(sizeMap[event.target.value]);
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
