import React from 'react';
import PropTypes from 'prop-types';
import { StyledDropdown } from './styles';

function Dropdown({ onChange }) {
  return (
    <StyledDropdown>
      <select aria-label="reviews filter" onChange={(e) => onChange(e.target.value)}>
        <option value="relevant">Relevant</option>
        <option value="newest">Newest</option>
        <option value="helpful">Helpful</option>
      </select>
    </StyledDropdown>
  );
}

Dropdown.propTypes = {
  onChange: PropTypes.func.isRequired,
};
export default Dropdown;
