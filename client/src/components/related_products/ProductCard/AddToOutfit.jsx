import React, {useState, useEffect} from 'react';
import { ActionButton, CardWrapper, ImageContainer, ProductImage, AddButtonContainer, AddButtomImage } from './styles';

function AddToOutfit() {

  return (
    <CardWrapper>
      <AddButtonContainer>
        <AddButtomImage src='https://cdn.iconscout.com/icon/free/png-512/free-plus-93-434116.png?f=avif&w=256'/>
      </AddButtonContainer>
      <span>Add to Outfit</span>
    </CardWrapper>
  );
}

export default AddToOutfit;
