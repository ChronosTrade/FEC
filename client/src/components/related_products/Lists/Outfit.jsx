import React, {useState, useEffect} from 'react';
import { ListWrapper, ListCarousel, CardContainer, RightButton, ListTitle } from './styles';
import Card from '../ProductCard/Card';
import AddToOutfit from '../ProductCard/AddToOutfit';

function Outfit({ outfit }) {

  return (
    <ListWrapper>
      <ListTitle>Your Outfit</ListTitle>
      <ListCarousel>
        <CardContainer>
          <AddToOutfit />
          <Card />
        </CardContainer>
      </ListCarousel>
    </ListWrapper>
  );
}

export default Outfit;
