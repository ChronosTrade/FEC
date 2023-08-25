import React, { useContext } from 'react';
// import { some, isEqual } from 'lodash';
import { CardWrapper, AddButtonContainer, AddButtomImage, AddButtonText } from './styles';
import AppContext from '../../AppContext';
import plusButton from '../../../assets/Plus_symbol.svg.png';

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
        <AddButtomImage src={plusButton} alt="plus sign" />
      </AddButtonContainer>
      <AddButtonText>Add to Outfit</AddButtonText>
    </CardWrapper>
  );
}

export default AddToOutfit;
