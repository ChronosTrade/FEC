import React, {useState, useEffect, useContext} from 'react';
import { ModalWrapper, ModalContent, ModalCaption, HeaderRow, ProductHeader } from './styles';
import UserContext from '../../UserContext';

function Comparison({ onClose, features }) {
  const {currentProduct, setCurrentProduct } = useContext(UserContext)
  const [currentProductFeatures, setCurrentProductFeatures] = useState(currentProduct.features);
  const [comparedProductFeatures, setComparedProductFeatures] = useState(features);

  console.log(currentProductFeatures)
  console.log(comparedProductFeatures)
  return (
    <ModalWrapper onClick={onClose}>
    <ModalContent>
      <ModalCaption>

      </ModalCaption>
      <thead>
        <HeaderRow>
          <ProductHeader>Product 1</ProductHeader>
          <ProductHeader>Blank</ProductHeader>
          <ProductHeader>Product 2</ProductHeader>
        </HeaderRow>
      </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Characteristic</td>
            <td>X</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Characteristic</td>
            <td>Y</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Characteristic</td>
            <td>Z</td>
          </tr>
        </tbody>
    </ModalContent>
    </ModalWrapper>
  );
};

export default Comparison;



