import styled, { keyframes, createGlobalStyle } from 'styled-components';

export const lightTheme = {
  darkGrey: '#666',
  background: '#f3f3f3',
  themeColor: '#234E70',
  secColor: '#FBF8BE',
  basicFontColor: '#333',
  secFontColor: '#666',
  contrastFontColor: '#f3f3f3',
};

// export const darkTheme = {
//   darkGrey: '#666',
//   background: '#333',
//   basicFontColor: '#f3f3f3',
//   secFontColor: '#333',
//   contrastFontColor: '#fff',
//   themeColor: '#FBF8BE',
//   secColor: '#234E70',
// };

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;800&display=swap');
    body {
      font-family: 'Nunito', sans-serif;
      background: ${lightTheme.background};
      color: ${lightTheme.basicFontColor};
    }
    h1,
    h2,
    h3,
    h4 {
      justify-content: center;
      text-align: center; 
    }
    .input:focus{
      border-color: ${lightTheme.themeColor};
    }
`;
