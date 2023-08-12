import styled from 'styled-components';

export const CardWrapper = styled.div`
  border: 0.75px solid;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 200px;
  height: 300px;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px rgba(0, 0, 0, .08);
`;

export const ProductName = styled.h3`
  color: blue;
`;

export const ProductCategory = styled.h4`
  color: green;
`;

export const ProductPrice = styled.h4`
  color: purple;
`;
