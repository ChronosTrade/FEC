// styles.js
import styled from 'styled-components';

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