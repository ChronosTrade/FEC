import styled from 'styled-components';

export const FooterContainer = styled.div`
  background: ${(props) => props.theme.footer};
  color: ${(props) => props.theme.basicFontColor};
  padding: 2rem 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  a {
    margin: 1rem;
    padding: 0;
    color: ${(props) => props.theme.basicFontColor};
  }

  button {
    background: ${(props) => props.theme.footer};
    color: ${(props) => props.theme.basicFontColor};
    border:0;
    margin: 1rem;
    font-size: 1rem;
    padding: 0;
    cursor: pointer;
  }
`;

export const Copyright = styled.div`
  font-size: 0.8rem;
  margin: 2rem;
  color: ${(props) => props.theme.basicFontColor};
`;
