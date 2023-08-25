import styled, { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  darkGrey: '#666',
  background: '#EEEEEE',
  themeColor: '#234E70',
  secColor: '#FBF8BE',
  basicFontColor: '#333',
  secFontColor: '#666',
  contrastFontColor: '#f3f3f3',
  footer: '#eee',
};

export const darkTheme = {
  darkGrey: '#666',
  background: '#222831',
  themeColor: '#FBF8BE',
  secColor: '#234E70',
  basicFontColor: '#f3f3f3',
  secFontColor: '#aaa',
  contrastFontColor: '#333',
  footer: '#222',
};

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;800&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Jura&family=Ysabeau+SC:wght@700&display=swap');    body {
      font-family: 'Nunito', 'Ysabeau SC', sans-serif;
      background: ${(props) => props.theme.background};
      color: ${(props) => props.theme.basicFontColor};
      margin:0;
    }
    }
    h1,
    h2,
    h3,
    h4 {
      justify-content: center;
      text-align: center;
    }
`;

export const ThemeToggleButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.primaryFontColor};
  border: none;
  border-radius: 4px;
  &:hover {
    background-color: ${(props) => props.theme.hoverBackground};
  }
`;
