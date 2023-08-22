import React, { useState, useContext } from 'react';
//import { isEqual } from 'lodash';
import {
  ModalWrapper, ModalContent, HeaderRow, ProductHeader, CompareRow,
  RowElement,
} from './styles';
import AppContext from '../../AppContext';

const isEqual = require('lodash/isEqual');

function Comparison({ onClose, name, features }) {
  const {currentProduct, setCurrentProduct } = useContext(AppContext);
  const [currentProductFeatures, setCurrentProductFeatures] = useState(currentProduct.features);
  const [comparedProductFeatures, setComparedProductFeatures] = useState(features);

  const combinedFeatures = [
    ...currentProductFeatures,
    ...comparedProductFeatures,
  ];
  const keys = combinedFeatures.map(({ feature }) => feature);
  const filteredFeatures = combinedFeatures
    .filter(({ feature }, index) => !keys.includes(feature, index + 1));

  const compare = (product, trait) => {
    if (product === 1) {
      for (let i = 0; i < currentProductFeatures.length; i++) {
        if (isEqual(currentProductFeatures[i], trait)) {
          return <span>&#10003;</span>;
        }
      }
    } else if (product === 2) {
      for (let i = 0; i < comparedProductFeatures.length; i++) {
        if (isEqual(comparedProductFeatures[i], trait)) {
          return <span>&#10003;</span>;
        }
      }
    }
  };

  return (
    <ModalWrapper onClick={onClose}>
      <ModalContent data-testid="compare-table">
        <thead>
          <HeaderRow>
            <ProductHeader className="caption">Comparing</ProductHeader>
          </HeaderRow>
          <HeaderRow>
            <ProductHeader className="left-product">{currentProduct.name}</ProductHeader>
            <ProductHeader></ProductHeader>
            <ProductHeader className="right-product">{name}</ProductHeader>
          </HeaderRow>
        </thead>
        <tbody>
          {filteredFeatures.map((char, i) => (
            <CompareRow key={i}>
              <RowElement className="left-value">{compare(1, char)}</RowElement>
              {char.value ? <RowElement className="center-value">{char.value}</RowElement> : <RowElement className="center-value">{char.feature}</RowElement> }
              <RowElement className="right-value">{compare(2, char)}</RowElement>
            </CompareRow>
          ))}
        </tbody>
      </ModalContent>
    </ModalWrapper>
  );
}

export default Comparison;
