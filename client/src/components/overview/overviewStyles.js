import styled from 'styled-components';

export const ExpandedImage = styled.img`
// width: 50rem;
// height: 50rem;
max-height: 90%;
object-fit: cover;
overflow: hidden;
cursor: zoom-in;
position: absolute;
`;

export const ExpandedModal = styled.div`
  // position: fixed;
  position: absolute;
  left: 50%;
  top: 50%;
  max-height: 90%;
  font-family: 'Nunito', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;

  transform: translate(-50%, -50%);
`;

export const ThumbImage = styled.img`
  border: 0.07rem solid;
  border-color: #ccc;
  width: 4rem;
  height: 4rem;
  object-fit: cover;
  overflow: hidden;
  cursor: pointer;
`;
export const ThumbImageSelect = styled.img`
  border: 0.2rem solid;
  border-color: red;
  width: 4rem;
  height: 4rem;
  object-fit: cover;
  overflow: hidden;
  cursor: pointer;
  // flex: 0 0 20%;
  flex-grow: 1;

`;
export const StylePhotosWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.5rem;
  img {
    object-fit: cover;
    overflow: hidden;
  }
`;

export const MainImage = styled.img`
  border: 0.07rem solid;
  border-color: #ccc;
  width: 30rem;
  height: 30rem;
  object-fit: cover;
  overflow: hidden;
  cursor: pointer;
`;
export const PhotoSelect = styled.img`
  border: 0.2rem solid;
  border-color: red;
  width: 4rem;
  height: 4rem;
  object-fit: cover;
  overflow: hidden;
  cursor: pointer;
  // flex: 0 0 20%;
  flex-grow: 1;
`;
export const Photo = styled.img`
  border: 0.07rem solid;
  border-color: #ccc;
  width: 4rem;
  height: 4em;
  object-fit: cover;
  overflow: hidden;
  cursor: pointer;
`;
export const PhotosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 0.5rem;
  img {
    object-fit: cover;
    overflow: hidden;
  }
`;

export const Modal = styled.div`
  // position: fixed;
  position: absolute;
  left: 50%;
  top: 50%;
  max-height: 90%;
  font-family: 'Nunito', sans-serif;
  background: #f6f6f6;
  width: 50rem;
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;

  transform: translate(-50%, -50%);
`;

export const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1000%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export const StarWrap = styled.span`
  display: inline-block;
  position: relative;
  font-size: '2.5rem'};
  color: #666;
  .full {
    color: #f80;
  }
  .partial::after {
    content: '★';
    position: absolute;
    left: 0;
    overflow: hidden;
    width: ${(props) => props.width};
    color: #f80;
    z-index: 1;
  }
`;
