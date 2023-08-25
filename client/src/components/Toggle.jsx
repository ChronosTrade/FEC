import React from 'react';
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
  width: 5rem;
  height: 2rem;
  border-radius: 6.25rem; 
  border: 0.125rem solid #ccc; 
  position: relative;
  transition: background-color 0.2s;
  background: ${(props) => props.theme.navBar};

  ${SwitchInput}:checked + ${SwitchLabel} & {
    background: black;
  }
`;

const SwitchButton = styled.span`
  content: "";
  position: absolute;
  top: auto;
  left: 0; 
  width: 2.25rem; 
  height: 2.25rem; 
  border-radius: 50%;
  transition: 0.2s;
  background: #FBF8BE;
  transform: scale(0.7); /* Rescale the button to 70% of its original size */

  ${SwitchInput}:checked + ${SwitchLabel} & {
    left: calc(100% - 0rem); 
    transform: translateX(-100%) scale(0.7);
    box-shadow: inset -0.75rem 0px 0px 0px; 
    background: black;
  }

  ${SwitchLabel}:active & {
    width: 2.8rem; 
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
