import React, { useState, useEffect, forwardRef } from 'react';
import Select from 'react-select';
import { SelectSizeNote, SizeLabel, SelectDropDown } from '../overviewStyles';

const Size = forwardRef(({
  selStyle,
  sizeNotice,
  setSizeNotice,
  setShowButton,
  setSelSku,
}, ref) => {
  const [optionsState, setOptionsState] = useState({ value: null, label: 'Select Size' });
  const [skusObject, setSizeOptions] = useState({});
  const [sizesArray, setSizesArray] = useState([]);
  const [OutOfStock, setOutOfStock] = useState(false);

  useEffect(() => {
    setOptionsState({ value: null, label: 'Select Size' });
    setSelSku(null);
    setOutOfStock(false);
    if (Object.keys(selStyle).length > 0) {
      let skus = {};
      skus = selStyle.skus;
      setSizeOptions(skus);
      const tempSizesArr = [];
      const set = {};
      let count = 0;
      Object.keys(skus).forEach((key) => {
        count += skus[key].quantity;
        if (!set[skus[key].size]) {
          tempSizesArr.push({
            value: key,
            label: skus[key].size,
          });
        }
        set[skus[key].size] = true;
      });
      if (Object.keys(skus).length === 1) {
        setOptionsState(tempSizesArr[0]);
      }
      if (count === 0) {
        setOutOfStock(true);
        setOptionsState({ value: null, label: 'Out of Stock' });
        setShowButton(false);
      } else {
        setSizesArray(tempSizesArr);
      }
    }
  }, [selStyle, setSelSku, setShowButton]);
  const handleChange = (e) => {
    setOptionsState(e);
    const tempSkuObj = {
      sku_id: e.value,
      quantity: skusObject[e.value].quantity,
    };
    setSelSku(tempSkuObj);
    setSizeNotice(false);
  };

  return (
    <div>
      {sizeNotice ? (
        <SelectSizeNote>Please Select Size</SelectSizeNote>
      ) : <SelectSizeNote>Size</SelectSizeNote>}
      <SelectDropDown>
        {!OutOfStock
          ? (
            <Select
              aria-label="Size Options"
              openMenuOnFocus
              options={sizesArray}
              value={optionsState}
              ref={ref}
              onChange={handleChange}
            />
          ) : (
            <Select
              aria-label="Size Options"
              isDisabled
              value={optionsState}
              ref={ref}
            />
          )}
      </SelectDropDown>

    </div>
  );
});

export default Size;
