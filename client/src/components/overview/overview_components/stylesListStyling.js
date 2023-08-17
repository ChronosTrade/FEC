// styles.js
import styled, { keyframes } from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const transitionPreset1 = 'all 0.15s ease-in-out';
export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;800&display=swap');
  body {
    font-family: 'Nunito', sans-serif;
    background: #f6f6f6;
  }
  h1,
  h2,
  h3,
  h4 {
    justify-content: center;
    text-aligh: center;
  }
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