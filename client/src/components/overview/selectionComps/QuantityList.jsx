import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { QuantityDropDown, QuantityLabel } from '../overviewStyles';

export default function Quantity({
  selSku,
  setSelQuantity
}) {
  const [optionsState, setOptionsState] = useState({ value: null, label: '-' });
  const [showOptions, setShowOptions] = useState(false);
  const [quantityOptions, setQuantityOptions] = useState([]);

  useEffect(() => {
    if (selSku) {
      let quantity = 0;
      quantity = selSku.quantity;
      const quantityArr = [];

      if (quantity > 15) {
        for (let i = 0; i < 15; i += 1) {
          const currentOption = { value: i + 1, label: i + 1 };
          quantityArr.push(currentOption);
        }
        setQuantityOptions(quantityArr);
      } else {
        for (let i = 0; i < quantity; i += 1) {
          const currentOption = { value: i + 1, label: i + 1 };
          quantityArr.push(currentOption);
        }
        setQuantityOptions(quantityArr);
      }
      if (!optionsState.value) {
        setShowOptions(true);
        setSelQuantity(1);
        setOptionsState({ value: 1, label: 1 });
      } else {
        setShowOptions(true);
      }
    } else {
      setShowOptions(false);
      setOptionsState({ value: null, label: '-' });
    }
  }, [selSku, optionsState.value, setSelQuantity]);

  const handleChange = (e) => {
    setOptionsState(e);
    setSelQuantity(e.value);
  };

  return (
    <div>
      <QuantityLabel>Quantity</QuantityLabel>
      <QuantityDropDown>
        {showOptions
          ? (
            <Select
              aria-label="Quantity Options"
              openMenuOnFocus
              options={quantityOptions}
              value={optionsState}
              onChange={handleChange}
            />
          ) : (
            <Select
              aria-label="Quantity Options"
              placeHolder="-"
              openMenuOnFocus
              isDisabled
              value={optionsState}
            />
          )}
      </QuantityDropDown>
    </div>
  );
}
