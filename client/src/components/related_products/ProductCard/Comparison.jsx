import React, {useState, useEffect, useContext} from 'react';
import { ModalWrapper, ModalContent } from './styles';

function Comparison({onClose}) {

  return (
    <ModalWrapper onClick={onClose}>
    <ModalContent>
      Hello
    </ModalContent>
    </ModalWrapper>
  );
};

export default Comparison;



