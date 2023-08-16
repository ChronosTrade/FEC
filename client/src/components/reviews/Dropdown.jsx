import React from 'react';

function Dropdown({ onChange }) {
  return (
    <select onChange={(e) => onChange(e.target.value)}>
      <option value="relevant">Relevant</option>
      <option value="newest">Newest</option>
      <option value="helpful">Helpful</option>
    </select>
  );
}

export default Dropdown;
