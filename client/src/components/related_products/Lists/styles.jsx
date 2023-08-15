import styled from 'styled-components';

export const ListWrapper = styled.div`
  display: flex;
  // flex-direction: column;
  width: 1000px;
  height: 350px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ListCarousel = styled.div`
  display: flex;
  border: solid;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  overflow-x: auto;
  // ::-webkit-scrollbar {
  //   display: none;
  // }
`;

export const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  gap: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  // overflow-x: auto;

`;

export const RightButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  &:hover {

  }
 `;

export const LeftButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  &:hover {

  }
 `;

export const ListTitle = styled.p`
   font-size: 18px;
 `;
