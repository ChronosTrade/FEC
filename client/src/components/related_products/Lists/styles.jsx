import styled from 'styled-components';

export const ListWrapper = styled.div`
  display: flex;
  width: 1000px;
  height: 350px;
  margin-bottom: 50px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ListCarousel = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow-x: auto;
`;

export const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  gap: 20px;
  display: flex;
  flex-direction: row;
`;

export const RightButton = styled.button`
  background: linear-gradient(to right, rgba(243,243,243,0), rgba(243,243,243,1));
  border: none;
  cursor: pointer;
  transform: translateX(-3rem);
  width: 3.5rem;
  z-index:99;

  &:hover {
    color:#FFFFFF;
    border-color:#FFFFFF;
  }
 `;

export const LeftButton = styled.button`
  background: linear-gradient(to left, rgba(243,243,243,0), rgba(243,243,243,1));
  border: none;
  cursor: pointer;
  transform: translateX(3.2rem);
  width: 3.5rem;
  z-index:99;
  &:hover {
    color:#FFFFFF;
    border-color:#FFFFFF;
  }
 `;

export const ListTitle = styled.p`
   font-size: 18px;
   width: 12%;
 `;
