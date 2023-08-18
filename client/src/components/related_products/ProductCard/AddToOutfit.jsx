import React, {useState, useEffect, useContext} from 'react';
import { ActionButton, CardWrapper, ImageContainer, ProductImage, AddButtonContainer, AddButtomImage } from './styles';
import AppContext from '../../AppContext';

function AddToOutfit({ add, outfit }) {
  const {currentProduct, setCurrentProduct } = useContext(AppContext);

  const handleClick = () => {
    add();
  };

  return (
    <CardWrapper>
      <AddButtonContainer onClick={handleClick}>
        <AddButtomImage src='https://cdn.iconscout.com/icon/free/png-512/free-plus-93-434116.png?f=avif&w=256'/>
      </AddButtonContainer>
      <span>Add to Outfit</span>
    </CardWrapper>
  );
}

export default AddToOutfit;
