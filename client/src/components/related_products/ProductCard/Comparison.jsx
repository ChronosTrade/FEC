import React, {useState, useEffect, useContext} from 'react';
import { ModalWrapper, ModalContent, ModalCaption, HeaderRow, ProductHeader,CompareRow } from './styles';
import { isEqual } from 'lodash'
import UserContext from '../../UserContext';

function Comparison({ onClose, name, features }) {
  const {currentProduct, setCurrentProduct } = useContext(UserContext)
  const [currentProductFeatures, setCurrentProductFeatures] = useState(currentProduct.features);
  const [comparedProductFeatures, setComparedProductFeatures] = useState(features);

  const combinedFeatures = [
    ...currentProductFeatures,
    ...comparedProductFeatures
  ]
  const keys = combinedFeatures.map(({feature}) => feature);
  const filteredFeatures = combinedFeatures.filter(({feature}, index) =>
                            !keys.includes(feature, index + 1));


  const compare = (product, trait) => {
    if (product === 1) {
      for (var i = 0; i < currentProductFeatures.length; i++) {
        if (_.isEqual(currentProductFeatures[i], trait))
        return <span>&#10003;</span>
      }
    } else if (product === 2) {
      for (var i = 0; i < comparedProductFeatures.length; i++) {
        if (_.isEqual(comparedProductFeatures[i], trait))
        return <span>&#10003;</span>
      }
    }
  }

  return (
    <ModalWrapper onClick={onClose}>
    <ModalContent>
      <ModalCaption>

      </ModalCaption>
      <thead>
        <HeaderRow>
          <ProductHeader>{currentProduct.name}</ProductHeader>
          <ProductHeader>Blank</ProductHeader>
          <ProductHeader>{name}</ProductHeader>
        </HeaderRow>
      </thead>
        <tbody>
          {filteredFeatures.map((char, i) =>
          <CompareRow key={i}>
            <td>{compare(1, char)}</td>
            {char.value ? <td>{char.value}</td> :<td>{char.feature}</td> }
            <td>{compare(2, char)}</td>
          </CompareRow>)}
        </tbody>
    </ModalContent>
    </ModalWrapper>
  );
};

export default Comparison;



