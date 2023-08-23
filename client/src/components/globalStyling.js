import styled, { keyframes, createGlobalStyle } from 'styled-components';

export const darkGrey = '#666';
export const whiteBackground = '#f3f3f3';
export const themeColor = '#234E70';
export const secColor = '#FBF8BE';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;800&display=swap');
    body {
      font-family: 'Nunito', sans-serif;
      background: ${whiteBackground};
    }
    h1,
    h2,
    h3,
    h4 {
      justify-content: center;
      text-align: center; 
    }
    .input:focus{
      border-color: ${themeColor};
    }
`;
