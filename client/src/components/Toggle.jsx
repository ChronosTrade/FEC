import React, { useState } from 'react';
import styled from 'styled-components';

const SwitchInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
`;

const SwitchLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 80px;
  height: 40px;
  border-radius: 100px;
  border: 2px solid gray;
  position: relative;
  transition: background-color 0.2s;
  background: #00CFF4;

  ${SwitchInput}:checked + ${SwitchLabel} & {
    background: black;
  }
`;

const SwitchButton = styled.span`
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  transition: 0.2s;
  background: #F5BD3C;

  ${SwitchInput}:checked + ${SwitchLabel} & {
    left: calc(100% - 2px);
    transform: translateX(-100%);
    box-shadow: inset -12px 0px 0px 0px;
    background: black;
  }

  ${SwitchLabel}:active & {
    width: 45px;
  }
`;

function Toggle({ id, toggled, onChange }) {
  return (
    <>
      <SwitchInput
        className="switch-checkbox"
        type="checkbox"
        id={id}
        checked={toggled}
        onChange={onChange}
      />
      <SwitchLabel className="switch-label" htmlFor={id}>
        <SwitchButton className="switch-button" />
      </SwitchLabel>
    </>
  );
}

export default Toggle;
