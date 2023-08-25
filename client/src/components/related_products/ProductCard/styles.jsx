import styled from 'styled-components';

export const CardWrapper = styled.div`
  border: 0.75px solid;
  display: flex;
  flex-direction: column;
  flex: 0 0 220px;
  height: 350px;
  z-index: 1;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px rgba(0, 0, 0, .08);
  box-sizing: border-box;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 35%;
  cursor: pointer;
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
&.sale-price {
  color: red;
}
  height: 0px;
  margin-bottom: 35px;
`;

export const OldPrice = styled.s`
  height: 0px;
  margin-bottom: 35px
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
  color:  ${(props) => props.theme.themeColor};
  position: absolute;
  align-self: flex-end;
  background: none;
  border: none;
  font-size: 18px;
  z-index: 3;
  &:hover {
    color: #FADD39;
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

export const ModalContent = styled.table`
  width: 40%;
  height: 40%;
  min-width: 400px;
  margin: 10% auto auto auto;
  background-color: ${(props) => props.theme.background};
  border: 1px solid black;
`;

export const HeaderRow = styled.tr`
`;

export const ProductHeader = styled.th`
  &.caption {
    text-align: start;
    font-weight: normal;
  }
  &.left-product {
    text-align: start;
    width: 25%;
  }
  &.right-product {
    text-align: end;
    width: 25%;
  }
`;

export const CompareRow = styled.tr`
`;

export const RowElement = styled.td`
  &.left-value {
    text-align: start;
    font-weight: bold;
    font-size: 20px;
  }
  &.center-value {
    text-align: center;
  }
  &.right-value {
    text-align: end;
    font-weight: bold;
    font-size: 20px;
  }
`;

export const AddButtonContainer = styled.div`
display: flex;
flex-direction: column;
position: relative;
height: 85%
`;

export const AddButtomImage = styled.img`
height: 100%;
width: 100%;
object-fit: contain;
`;

export const RemoveButton = styled.button`
  color: #000000;
  position: absolute;
  align-self: flex-end;
  background: none;
  border: none;
  font-size: 28px;
  z-index: 3;
  &:hover {
    color: #FA0010;
  }
`;
