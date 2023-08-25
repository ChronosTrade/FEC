import React from 'react';
import styled from 'styled-components';
import companyLogo from '../assets/favicon.png';
import Toggle from './Toggle'; // Import the Toggle component

const NavHeader = styled.header`
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 50;
  background: ${(props) => props.theme.themeColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;

  p {
    font-family: 'Ysabeau SC';
    color: white;
    font-size: 1.5rem;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`;

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled.button`
  text-transform: uppercase;
  background: none;
  border: none;
  margin: 0 0.5rem;
  cursor: pointer;
  color: white;
  font-size: 1rem;
  &:hover {
    text-decoration: underline;
  }
`;

const Img = styled.img`
  height: 50px;
`;

const Favicon = styled.img`
  width: 20px;
  margin-left: 0.5rem;
`;

function Navbar({ toggled, onChange }) {
  return (
    <NavHeader>
      <NavWrapper>
        <p>PIRAEUS</p>
        {/* <IconContainer>
          <Img src={companyLogo} alt="Company Logo" />
        </IconContainer> */}
        <LinkContainer>
          <NavLink>New</NavLink>
          <NavLink>Women</NavLink>
          <NavLink>Men</NavLink>
          <NavLink>Sale</NavLink>
        </LinkContainer>
      </NavWrapper>
      <ToggleContainer>
        <Toggle id="toggle-theme" toggled={toggled} onChange={onChange} />
        {/* <Favicon src={} alt="Favicon 1" />
        <Favicon src={} alt="Favicon 2" /> */}
      </ToggleContainer>
    </NavHeader>
  );
}

export default Navbar;
