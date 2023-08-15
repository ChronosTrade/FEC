import React from 'react';
import { ListWrapper, ListCarousel, CardContainer, RightButton, ListTitle } from './styles';
import Card from '../ProductCard/Card';

function Outfit() {
  return (
    <ListWrapper>
      <ListTitle>Your Outfit</ListTitle>
      <ListCarousel>
        <CardContainer>
          <Card />
        </CardContainer>
      </ListCarousel>
    </ListWrapper>
  );
}

export default Outfit;
