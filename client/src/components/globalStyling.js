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
.input:focus{
  border-colore: red;
}
`;