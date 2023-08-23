import React, { useContext } from 'react';
// import { some, isEqual } from 'lodash';
import { CardWrapper, AddButtonContainer, AddButtomImage } from './styles';
import AppContext from '../../AppContext';

const isEqual = require('lodash/isEqual');
const some = require('lodash/some');

function AddToOutfit({ add, outfit }) {
  const { currentProduct, setCurrentProduct } = useContext(AppContext);

  const handleClick = () => {
    if ((some(outfit, ((item) => isEqual(item, currentProduct)))) === false) {
      add();
    }
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
