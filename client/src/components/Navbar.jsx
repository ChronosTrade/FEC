import React from 'react';
import styled from 'styled-components';
import companyLogo from '../assets/favicon.png';

const NavHeader = styled.header`
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 50;
  background: #666;
`;

const IconContainer = styled.div`
  display: flex;
`;

const NavWrapper = styled.div`
  display: flex;
  height: 75px;
  justify-content: space-between
`;

const LinkContainer = styled.div`
  display: flex;
  alight-items: center;
  padding: 1rem 0.75rem;
  position: relative;
`;

const ToggleContainer = styled.div`
  display: flex;
`;

const NavLink = styled.span`
  text-transform: uppercase;
`;

const Img = styled.img`
`

function Navbar() {
  return (
    <NavHeader>
      <NavWrapper>
        <IconContainer>
          <Img src={companyLogo} />
        </IconContainer>
        <LinkContainer>
          <NavLink>Men</NavLink>
          <NavLink>Women</NavLink>
          <NavLink>Kids</NavLink>
        </LinkContainer>
        <ToggleContainer />
      </NavWrapper>
    </NavHeader>
  );
}

export default Navbar;
