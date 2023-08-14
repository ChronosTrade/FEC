import React from 'react';
import { ListWrapper, ListContainer, RightButton, ListTitle } from './styles';
import Card from '../ProductCard/Card';

function Outfit() {
  return (
    <ListWrapper>
      <ListTitle>Your Outfit</ListTitle>
      <ListContainer>
        <Card />
      </ListContainer>
    </ListWrapper>
  );
}

export default Outfit;
