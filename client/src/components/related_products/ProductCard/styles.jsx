import styled from 'styled-components';

export const CardWrapper = styled.div`
  border: 0.75px solid;
  display: flex;
  flex-direction: column;
  flex: 0 0 220px;
  height: 350px;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px rgba(0, 0, 0, .08);
  box-sizing: border-box;
  cursor: pointer;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 35%;
`;

export const ProductName = styled.h4`
  box-sizing: border-box;
  height: 0px;
  margin-bottom: 5px
`;

export const ProductCategory = styled.p`
  height: 0px;
  margin-bottom: 0px
`;

export const ProductPrice = styled.p`
  height: 0px;
  margin-bottom: 35px
`;

export const ProductRating = styled.div`

`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 65%
`;

export const ProductImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;

`;

export const ActionButton = styled.button`
  color: #000000;
  position: absolute;
  align-self: flex-end;
  background: none;
  border: none;
  &:hover {
    color: #F5CB50;
  }
`;

export const ModalWrapper = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  border: 1px solid black;
  width: 40%;
  min-width: 400px;
  margin: 10% auto auto auto;
  background-color: white
`;