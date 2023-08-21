import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import {
  RadioButton,
  RadioButtonBox,
  RadioButtonSpot,
  RadioButtonTxt,
  RadioButtonLabel,
  FormLabelGroupWrapper,
} from './styles';

const SelectChart = {
  Size: [
    'Too small',
    'Too big',
  ],
  Width: [
    'Too narrow',
    'Too wide',
  ],
  Comfort: [
    'Uncomfortable',
    'Comfortable',
  ],
  Quality: [
    'Poor',
    'Perfect',
  ],
  Length: [
    'Runs Short',
    'Runs long',
  ],
  Fit: [
    'Runs tight',
    'Runs long',
  ],
};

function CustomRadioButton({ label, options, value, onChange }) {

  return (
    <RadioButtonBox>
      <RadioButtonLabel>{label}</RadioButtonLabel>
      <RadioButton>
        {options.map((option, index) => (
          <RadioButtonSpot
            key={option}
            active={value === index + 1 ? 1 : 0}
            onClick={() => onChange(index + 1)}
          >
            <RadioButtonTxt>{option}</RadioButtonTxt>
          </RadioButtonSpot>
        ))}
      </RadioButton>
      <FormLabelGroupWrapper>
        <label>{SelectChart[label][0]}</label>
        <label>{SelectChart[label][1]}</label>
      </FormLabelGroupWrapper>
    </RadioButtonBox>
  );
}

CustomRadioButton.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CustomRadioButton;