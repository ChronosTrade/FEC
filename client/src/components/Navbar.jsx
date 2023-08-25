import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartShopping,
  faUser,
  faBagShopping,
} from '@fortawesome/free-solid-svg-icons';
import Toggle from './Toggle';

const NavHeader = styled.header`
  width: 100%;
  height: 3rem;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 50;
  background: ${(props) => props.theme.navBar};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  z-index: 1000;
`;

const LogoBox = styled.div`
  font-family: 'Ysabeau SC', sans-serif;
  color: white;
  font-size: 1.5rem;
  margin: 0 0 0.5rem 0;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1.5rem;
  color: white;
  cursor: pointer;
  padding: 0.2rem;
  &:hover {
    border-bottom: 0.07rem solid white;
  }
`;

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
    font-family: 'Nunito';
`;

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 3rem;
`;

const NavLink = styled.button`
  text-transform: uppercase;
  font-family: 'Nunito';
  font-size: 1rem;
  background: none;
  border: none;
  margin: 0 0.5rem;
  cursor: pointer;
  color: white;
  transition: 0.6s;
  &:hover {
    border-bottom: 0.07rem solid white;
  }
`;

const Favicon = styled.img`
  width: 3rem;
  margin-left: 0.5rem;
`;

function Navbar({ toggled, onChange }) {
  return (
    <NavHeader>
      <NavWrapper>
        <LogoBox>Piraeus</LogoBox>
        <LinkContainer>
          <NavLink>New</NavLink>
          <NavLink>Women</NavLink>
          <NavLink>Men</NavLink>
          <NavLink>Sale</NavLink>
        </LinkContainer>
      </NavWrapper>
      <ToggleContainer>
        <IconContainer>
          <FontAwesomeIcon icon={faBagShopping} />
        </IconContainer>
        <IconContainer>
          <FontAwesomeIcon icon={faUser} />
        </IconContainer>
        <Toggle id="toggle-theme" toggled={toggled} onChange={onChange} />
        {/* <Favicon src={} alt="Favicon 1" />
        <Favicon src={} alt="Favicon 2" /> */}
      </ToggleContainer>
    </NavHeader>
  );
}

export default Navbar;
