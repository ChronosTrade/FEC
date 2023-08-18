import React, { useState, useEffect, forwardRef} from 'react';
import Select from 'react-select';

const Size = forwardRef(function Size({
  selStyle,
  sizeNotice,
  setSizeNotice,
  setShowButton,
  setSelSku,
}, ref) {
  // The optionsState is the selected state/value on the dropdown list
  const [optionsState, setOptionsState] = useState('Select Size');
  // The skusObject is an object containing all of the skus(sizes) for a selected style.
  const [skusObject, setSizeOptions] = useState({});
  // The skusArray allows us to map each sku(size) to dropdown list options.
  // Because the skusObject is an object, we need to convert the sizes to an array.
  const [sizesArray, setSizesArray] = useState([]);
  const [OutOfStock, setOutOfStock] = useState(false);

  useEffect(() => {
    setOptionsState({ value: null, label: 'Select Size' })
    setSelSku(null);
    setOutOfStock(false);
    if (Object.keys(selStyle).length !== 0) {
      setSizeOptions(selStyle.skus);
      const tempSizesArr = [];
      const set = {};
      let count = 0;
      Object.keys(selStyle.skus).forEach((key) => {
        count += selStyle.skus[key].quantity; //comment out to test out of stock functionality
        if (!set[selStyle.skus[key].size]) {
          tempSizesArr.push({
            value: key,
            label: selStyle.skus[key].size,
          })
        }
        set[selStyle.skus[key].size] = true;
      });
      // If data only includes 1 size as an option
      if (Object.keys(selStyle.skus).length === 1) {
        setOptionsState(tempSizesArr[0])
        const tempSkuObj = {
          sku_id: tempSizesArr[0].value,
          quantity: selStyle.skus[tempSizesArr[0].value].quantity
        }
      }
      // If all quantities of sizes of the selected style are out of stock
      if (count === 0) {
        setOutOfStock(true);
        setOptionsState({ value: null, label: 'Out of Stock' });
        setShowButton(false);
      } else {
        setSizesArray(tempSizesArr);
      }
    }
  }, [selStyle]);
  const handleChange = function (e) {
    setOptionsState(e)
    const tempSkuObj = {
      sku_id: e.value,
      // quantity: 0  //for testing only
      quantity: skusObject[e.value].quantity
    }
    setSelSku(tempSkuObj);
    setSizeNotice(false);
  };
  return (
    <div>
      {sizeNotice ? <h4>Please Select Size</h4> : null}
      {!OutOfStock
        ? (
          <Select
            aria-label="Size Options"
            placeHolder="Select Size"
            openMenuOnFocus={true}
            options={sizesArray}
            value={optionsState}
            ref={ref}
            onChange={handleChange}
          />
        ) : (
          <Select
            aria-label="Size Options"
            isDisabled={true}
            value={optionsState}
            // openMenuOnFocus={true}
            // options={sizesArray}
            // value={optionsState}
            ref={ref}
          />
        )}
    </div>
  );
});

export default Size;