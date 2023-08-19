import React from 'react';
import { CardWrapper, AddButtonContainer, AddButtomImage } from './styles';

function AddToOutfit({ add, outfit }) {
  const handleClick = () => {
    add();
  };

  return (
    <CardWrapper>
      <AddButtonContainer onClick={handleClick}>
        <AddButtomImage src="https://cdn.iconscout.com/icon/free/png-512/free-plus-93-434116.png?f=avif&w=256" />
      </AddButtonContainer>
      <span>Add to Outfit</span>
    </CardWrapper>
  );
}

export default AddToOutfit;
